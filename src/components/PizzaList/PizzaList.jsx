import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

import styles from "./PizzaList.module.css";
import {
  // useEffect,
  useState,
} from "react";

const ReverseButton = styled(Button)`
  &:hover {
    background-color: rgba(74, 20, 140, 0.69);
    color: #fff;
  }
`;

const PizzaList = ({ products }) => {
  const [cartProduct, setCardProduct] = useState(null);
  // const [showAddButton, setShowAddButton] = useState(true);
  // console.log(products);
  console.log(cartProduct);

  const addProduct = () => setCardProduct(cartProduct + 1);
  const removeProduct = () => setCardProduct(cartProduct - 1);

  // useEffect(() => {
  //   // if (!cartProduct) {
  //   //   return;
  //   // }
  //   if (cartProduct?.length > 1) {
  //     console.log(cartProduct);
  //     setShowAddButton(false);
  //   }

  //   return;
  // }, [cartProduct]);

  return (
    <>
      <List className={styles.list}>
        {products &&
          products.map(({ id, title, description, price, image }) => (
            <ListItem key={id} className={styles.item}>
              <Card sx={{ height: "100%" }} className={styles.card}>
                <CardContent>
                  <div className={styles.cardImageContainer}>


                <CardMedia component="img" image={image} alt={title} className={styles.cardImage}/>
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
                      <ReverseButton onClick={removeProduct}>
                        <RemoveCircleOutlineTwoToneIcon />
                      </ReverseButton>
                      <Typography
                        variant="h6"
                        display="flex"
                      alignItems="center"
                      sx={{p:2}}
                      >
                        {cartProduct}
                      </Typography>
                      <ReverseButton onClick={addProduct}>
                        <AddCircleOutlineTwoToneIcon />
                      </ReverseButton>
                    </>
                  {/* ) : ( */}
                    <ReverseButton variant="outlined" onClick={addProduct}>
                      Add to cart
                    </ReverseButton>
                  {/* )} */}
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
