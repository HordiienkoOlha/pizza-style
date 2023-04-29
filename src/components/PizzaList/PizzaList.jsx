import PropTypes from "prop-types";
import { List, ListItem } from "@mui/material";

import getProductsApi from "@api/FakeApi";
import PizzaItem from "@components/PizzaItem/PizzaItem";
import styles from "./PizzaList.module.css";

const PizzaList = () => {
  const products = getProductsApi();

  return (
    <>
      <List className={styles.list}>
        {products &&
          products.map(({ id, title, description, price, image, quantity }) => {
            return (
              <ListItem key={id} className={styles.item}>
                <PizzaItem
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                  quantity={quantity}
                />
              </ListItem>
            );
          })}
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
