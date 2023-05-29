import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { Delete } from "@mui/icons-material";

import {
  addProduct,
  deleteProduct,
  deleteProductQuantity,
} from "@redux/products/productSlice";
import { ReverseIconButton } from "@styles/styledComponent";
import styles from "./CardItem.module.css";

const CardItem = ({ id, title, description, price, image, quantity }) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ display: "flex" }} className={styles.card}>
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
          <Typography variant="body2" sx={{ minHeight: "60px" }}>
            {description}
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            color="secondary"
            sx={{ p: 1 }}
          >
            Price:&nbsp;{price}&nbsp;UAH
          </Typography>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
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
  );
};

export default CardItem;

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
