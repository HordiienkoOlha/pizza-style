const products = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    description: "A classic pizza topped with pepperoni slices.",
    price: 99,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description:
      "A simple yet delicious pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
    price: 109,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 3,
    title: "Hawaiian Pizza",
    description:
      "A controversial pizza topped with ham, pineapple, and mozzarella cheese.",
    price: 139,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 4,
    title: "Meat Lovers Pizza",
    description:
      "A pizza for meat lovers, topped with sausage, bacon, pepperoni, and ground beef.",
    price: 159,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 5,
    title: "Vegetarian Pizza",
    description:
      "A pizza for vegetarians, topped with mushrooms, bell peppers, onions, and olives.",
    price: 129,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 6,
    title: "BBQ Chicken Pizza",
    description:
      "A pizza topped with barbecue sauce, chicken, red onions, and mozzarella cheese.",
    price: 149,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 7,
    title: "Supreme Pizza",
    description:
      "A pizza with all the toppings: sausage, pepperoni, mushrooms, onions, and bell peppers.",
    price: 169,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 8,
    title: "Cheese Pizza",
    description: "A simple pizza with just tomato sauce and mozzarella cheese.",
    price: 99,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 9,
    title: "Spinach and Feta Pizza",
    description:
      "A pizza topped with spinach, feta cheese, and mozzarella cheese.",
    price: 139,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
  {
    id: 10,
    title: "Buffalo Chicken Pizza",
    description:
      "A pizza topped with spicy buffalo sauce, chicken, and mozzarella cheese.",
    price: 149,
    image:
      "https://panda-pizza.com.ua/cache/dish-mobile/img/dishes/pizza/4seasons.jpg?130223",
  },
];

const getProductsApi = () => {
  const productsWithQuantity = products.map((product) => ({
    ...product,
    quantity: 0,
  }));
  return productsWithQuantity;
};

export default getProductsApi;
