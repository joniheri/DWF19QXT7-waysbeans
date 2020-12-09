import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useParams } from "react-router-dom";
import LoginModal from "../Components/Modal/LoginModal";
import RegisterModal from "../Components/Modal/RegisterModal";
import Popup from "../Components/Modal/PopupModal";
import products from "../Data/products.json";
import format from "../Config/formatingCurency";

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((data) => +data.id === +id);
  const [state, dispatch] = useContext(GlobalContext);
  const [showPop, setShowPop] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const onAdd = () => {
    if (state.isLogin) {
      setShowPop(true);
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    } else {
      setShowLogin(true);
    }
  };
  return product ? (
    <div className="row mt-92 mb-51">
      <div>
        <img src={product.photo} alt={product.id} className="product-image" />
      </div>
      <div className="ml-54">
        <h2 className="product-name mt-33">{product.name}</h2>
        <p className="product-stock">Stock : {product.stock}</p>
        <h4 className="product-detail mt-35">{product.detail}</h4>
        <h3 className="product-price text-right mt-21">
          {format(product.price)}
        </h3>
        <button className="btn btn-primary w-100 mt-55" onClick={onAdd}>
          Add Cart
        </button>
      </div>
      <Popup text="Success Add Product" show={showPop} setShow={setShowPop} time={400} />
      <LoginModal show={showLogin} setShow={setShowLogin} switchModal={setShowRegister} dispatch={dispatch} />
      <RegisterModal show={showRegister} setShow={setShowRegister} switchModal={setShowLogin} dispatch={dispatch} />
    </div>
  ) : (
    <div>Product Tidak Ada</div>
  );
}

export default ProductDetailPage;
