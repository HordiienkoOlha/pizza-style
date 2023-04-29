import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardContent, List, ListItem, Typography } from "@mui/material";

import { clearCart } from "@redux/products/productSlice";
import { calculateTotal } from "@helpers/calculateTotal";
import { getProducts } from "@redux/products/productsSelector";
import CardItem from "@components/CardItem";
import { ReverseButton, StyledTypography } from "@styles/styledComponent";
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

  const totalPrice = calculateTotal(mergedProducts);

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
                    <CardItem
                      id={id}
                      title={title}
                      description={description}
                      price={price}
                      image={image}
                      quantity={quantity}
                    />
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
