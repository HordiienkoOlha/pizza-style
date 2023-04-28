import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import styles from "./PizzaList.module.css";

const PizzaList = ({ products }) => {
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
