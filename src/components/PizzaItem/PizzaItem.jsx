import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

import {
  addProduct,
  deleteProductQuantity,
} from "@redux/products/productSlice";
import { getProducts } from "@redux/products/productsSelector";
import { ReverseButton, ReverseIconButton } from "@styles/styledComponent";
import styles from "./PizzaItem.module.css";

const PizzaItem = ({ id, title, description, price, image, quantity }) => {
  const productsCart = useSelector(getProducts);
  const [showButton, setShowButton] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    productsCart.some((value) => value.id === id)
      ? setShowButton(true)
      : setShowButton(false);
  }, [productsCart]);

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
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.cardImageContainer}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            width="500"
            loading="lazy"
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
        <Typography variant="h5" component="h3" color="secondary" sx={{ p: 1 }}>
          Price:&nbsp;{price}&nbsp;UAH
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {quantity}
        </Typography>
      </CardContent>
      <CardContent className={styles.buttonWrapper}>
        {showButton ? (
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
  );
};

export default PizzaItem;

PizzaItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
