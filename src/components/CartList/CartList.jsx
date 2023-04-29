import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { Delete } from "@mui/icons-material";

import { getProducts } from "../../redux/products/productsSelector";
import {
  addProduct,
  clearCart,
  deleteProduct,
  deleteProductQuantity,
} from "../../redux/products/productSlice";
import {
  ReverseButton,
  ReverseIconButton,
  StyledTypography,
} from "../../styles/styledComponent";
import styles from "./CartList.module.css";

const CartList = () => {
  const productsCart = useSelector(getProducts);

  const mergedProducts = productsCart.reduce((acc, curr) => {
    const matchingProduct = acc.find((p) => p.id === curr.id);
    if (matchingProduct) {
      matchingProduct.quantity++;
    } else {
      acc.push({ ...curr, quantity: 1 });
    }
    return acc;
  }, []);

  const calculateTotal = () => {
    let total = 0;
    mergedProducts.forEach((mergedProduct) => {
      total += mergedProduct.quantity * mergedProduct.price;
    });
    return total;
  };

  const totalPrice = calculateTotal();
  console.log(totalPrice);

  console.log(productsCart);
  console.log(JSON.stringify(mergedProducts, null, 2));

  const dispatch = useDispatch();

  return (
    <>
      {productsCart?.length > 0 ? (
        <>
          <List className={styles.list}>
            {mergedProducts &&
              mergedProducts.map(
                ({ id, title, description, price, image, quantity }) => (
                  <ListItem key={id} className={styles.item}>
                    <Card sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <div className={styles.cardImageContainer}>
                            <CardMedia
                              component="img"
                              image={image}
                              alt={title}
                              className={styles.cardImage}
                            />
                          </div>
                        </CardContent>
                        <CardContent>
                          <Typography variant="h6" component="h2" gutterBottom>
                            {title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ minHeight: "60px" }}
                          >
                            {description}
                          </Typography>
                          <ul className={styles.infoList}>
                            <li className={styles.infoItem}>
                              <Typography
                                variant="h5"
                                component="h3"
                                color="secondary"
                                sx={{ p: 1 }}
                              >
                                Price: {price}
                              </Typography>
                              <Typography variant="h6" sx={{ p: 1 }}>
                                Quantity: {quantity}
                              </Typography>
                            </li>

                            <li className={styles.infoItem}>
                              <Tooltip title="Remove">
                                <ReverseIconButton
                                  aria-label="Remove"
                                  size="sm"
                                  color="primary"
                                  onClick={() => {
                                    dispatch(deleteProduct(id));
                                  }}
                                >
                                  <Delete />
                                </ReverseIconButton>
                              </Tooltip>
                            </li>
                          </ul>
                        </CardContent>

                        <CardContent className={styles.buttonWrapper}>
                          <ReverseIconButton
                            sx={{ marginRight: 2 }}
                            onClick={() => {
                              dispatch(deleteProductQuantity(id));
                            }}
                          >
                            <RemoveCircleOutlineTwoToneIcon />
                          </ReverseIconButton>
                          <ReverseIconButton
                            onClick={() => {
                              dispatch(
                                addProduct({
                                  id,
                                  title,
                                  description,
                                  price,
                                  image,
                                  quantity,
                                })
                              );
                            }}
                          >
                            <AddCircleOutlineTwoToneIcon />
                          </ReverseIconButton>
                        </CardContent>
                      </Box>
                    </Card>
                  </ListItem>
                )
              )}
          </List>

          <CardContent className={styles.buttonWrapper}>
            <Typography variant="h4">
              Total:&nbsp;{totalPrice}&nbsp;UAH
            </Typography>
          </CardContent>
          <CardContent className={styles.buttonWrapper}>
            <ReverseButton
              variant="outlined"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Make an order
            </ReverseButton>
          </CardContent>
        </>
      ) : (
        <StyledTypography variant="h4">
          Please, choose pizza&nbsp;
          <Link to="/" className={styles.link}>
            here
          </Link>
        </StyledTypography>
      )}
    </>
  );
};

export default CartList;
