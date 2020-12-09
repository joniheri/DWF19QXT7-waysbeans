// import Module
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Pages
import AddProductPage from "./PageWaysbeans/AddProductPage";
import CartPage from "./PageWaysbeans/CartPage";
import LandingPage from "./PageWaysbeans/LandingPage";
import ProductDetailPage from "./PageWaysbeans/ProductDetailPage";
import ProfilePage from "./PageWaysbeans/ProfilePage";
import ShippingPage from "./PageWaysbeans/ShippingPage";
import AdminDashboard from "./PageWaysbeans/AdminDashboard";

// import dll
import Navbar from "./ComponentWaysbeans/Navbar/Navbar";
import PrivateRoute from './ComponentWaysbeans/PrivateRoot';
import { GlobalContextProvider } from "./Context/GlobalContext";
import "./Style.scss";

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/product/:id" component={ProductDetailPage} />
            <PrivateRoute exact path="/cart" component={CartPage} />
            <PrivateRoute exact path="/cart/shipping" component={ShippingPage} />
            <PrivateRoute exact path="/profile" component={ProfilePage} />
            <PrivateRoute exact path="/admin" component={AdminDashboard} />
            <PrivateRoute exact path="/admin/add-product" component={AddProductPage} />
          </Switch>
        </div>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;