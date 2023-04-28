import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

import styles from "./PizzaList.module.css";
import { useState } from "react";

const PizzaList = ({ products }) => {
  const [cartProduct, setCardProduct] = useState(1)
  console.log(products);
  return (
    <>
      <List className={styles.list}>
        {products &&
          products.map(({ id, title, description, price, image }) => (
            <ListItem key={id}>
              <Card sx={{ height: "100%" }}>
                <CardMedia component="img" image={image} alt={title} />

                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ minHeight: "60px" }}>
                    {description}
                  </Typography>
                  <Typography variant="h5" component="h3" color="secondary">
                    Price: {price}
                  </Typography>
                </CardContent>
                <CardContent className={styles.buttonWrapper}>
                  <Button variant="outlined">Add to cart</Button>
                  <IconButton>
                    <RemoveCircleOutlineTwoToneIcon />
                  </IconButton>
                  <Typography variant="h6" display="flex" alignItems="center">
                  {cartProduct}
                  </Typography>
                  <IconButton>
                    <AddCircleOutlineTwoToneIcon />
                  </IconButton>
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
