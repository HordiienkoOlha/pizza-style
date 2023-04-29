import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
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

import {
  addProduct,
  deleteProductQuantity,
} from "../../redux/products/productSlice";
import { getProducts } from "../../redux/products/productsSelector";
import getProductsApi from "../../api/FakeApi";
import { ReverseButton, ReverseIconButton } from "../../styles/styledComponent";
import styles from "./PizzaList.module.css";

const PizzaList = () => {
  const products = getProductsApi();
  const productsCart = useSelector(getProducts);

  const dispatch = useDispatch();

  const OnHandleAddProduct = ({
    id,
    title,
    description,
    price,
    image,
    quantity,
  }) => {
    const newProduct = {
      id,
      title,
      description,
      price,
      image,
      quantity: quantity + 1,
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <>
      <List className={styles.list}>
        {products &&
          products.map(({ id, title, description, price, image, quantity }) => (
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
                  {productsCart.length > 0 ? (
                    <>
                      <ReverseIconButton
                        onClick={() => {
                          dispatch(deleteProductQuantity(id));
                        }}
                      >
                        <RemoveCircleOutlineTwoToneIcon />
                      </ReverseIconButton>
                      <Typography
                        variant="h6"
                        display="flex"
                        alignItems="center"
                        sx={{ p: 2 }}
                      >
                        {" "}
                      </Typography>
                      <ReverseIconButton
                        onClick={() =>
                          OnHandleAddProduct({
                            id,
                            title,
                            description,
                            price,
                            image,
                            quantity,
                          })
                        }
                      >
                        <AddCircleOutlineTwoToneIcon />
                      </ReverseIconButton>
                    </>
                  ) : (
                    <ReverseButton
                      variant="outlined"
                      onClick={() =>
                        OnHandleAddProduct({
                          id,
                          title,
                          description,
                          price,
                          image,
                          quantity,
                        })
                      }
                    >
                      Add to cart
                    </ReverseButton>
                  )}
                </CardContent>
              </Card>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default PizzaList;

PizzaList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
