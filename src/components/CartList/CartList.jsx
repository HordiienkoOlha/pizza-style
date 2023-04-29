import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

import { getProducts } from "../../redux/products/productsSelector";
import {
  addProduct,
  deleteProductQuantity,
} from "../../redux/products/productSlice";
import { ReverseButton } from "../../styles/styledComponent";
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

  console.log(JSON.stringify(mergedProducts, null, 2));

  const dispatch = useDispatch();

  return (
    <>
      <List className={styles.list}>
        {productsCart?.length > 0 ? (
          mergedProducts.map(
            ({ id, title, description, price, image, quantity }) => (
              <ListItem key={id} className={styles.item}>
                <Card sx={{ height: "100%" }} className={styles.card}>
                  <CardContent>
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
                    <Typography variant="body2" sx={{ minHeight: "60px" }}>
                      {description}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h3"
                      color="secondary"
                      sx={{ p: 1 }}
                    >
                      Price: {price}
                    </Typography>
                  </CardContent>
                  <CardContent className={styles.buttonWrapper}>
                    {/* {cartProduct?.length > 1 ? ( */}
                    <>
                      <ReverseButton
                        onClick={() => {
                          dispatch(deleteProductQuantity(id));
                        }}
                      >
                        <RemoveCircleOutlineTwoToneIcon />
                      </ReverseButton>
                      <Typography
                        variant="h6"
                        display="flex"
                        alignItems="center"
                        sx={{ p: 2 }}
                      >
                        {quantity}
                      </Typography>
                      <ReverseButton
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
                      </ReverseButton>
                    </>
                    {/* ) : ( */}
                    {/* <ReverseButton variant="outlined" onClick={()=>{
                      console.log(product)
                      dispatch(addProduct(product));
                    }}>
                      Add to cart
                    </ReverseButton> */}
                    {/* )} */}
                  </CardContent>
                </Card>
              </ListItem>
            )
          )
        ) : (
          <Typography>
            Please, choose pizza <Link to="/">here</Link>
          </Typography>
        )}
      </List>
    </>
  );
};

export default CartList;
