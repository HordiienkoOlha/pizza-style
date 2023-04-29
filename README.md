Pizza Style

This is a React application using Redux for state management, React Router for client-side routing, and Material-UI for styling.

Getting Started
To run the application, first clone the repository and install the dependencies using npm:

git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install

Then start the application with:
npm run dev

This will start a development server at http://localhost:5173.

File Structure

main.js: The entry point of the application. It renders the root component of the application and sets up Redux store, React Router, and Material-UI theme.
App.jsx: The root component of the application. It contains the AppBar and defines the routes for the application using React Router.

components: This app includes the following components:

- AppBarComponent: Displays the app's header.
- CardItem: Displays information about a single pizza.
- CartList: Displays a list of pizzas in the cart.
- DrawerComponent: A slide-out drawer for navigation.
- Logo: Displays the app's logo.
- Navigation: Displays the app's navigation.
- PizzaItem: Displays a single pizza in a list.
- PizzaList:Displays a list of pizzas.

views: This directory contains the views for each route, such as PizzaView, CartView, and NotFoundView.
redux: This directory contains the Redux store and action creators.
theme: This directory contains the Material-UI theme configuration.

Pages

- Pizza
- Cart

Approach

The project was developed using the Mobile First approach, with responsive design for mobile devices from 320px, tablets from 768px and desktops from 1280px. The CSS Grid algorithm was used to create the layout of the product cards.
