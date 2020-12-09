import { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import format from "../config/formatingCurency";
import trash from "../Images/trash.png";

function CartPage() {
  const [state, dispatch] = useContext(GlobalContext);
  const { totalCart } = state;
  const { ProductsCart } = state;
  useEffect(() => {
    dispatch({
      type: "GET_TOTAL_CART",
    });
  }, [state.ProductCard, dispatch]);
  return (
    <div className="mt-77">
      <h2 className="cart-page-title">My Cart</h2>
      <p className="mt-26 cart-sub-title">Review Your Order</p>
      <div className="row mt-11">
        <div className="cart-container-width">
          <div className="line w-100"></div>
          <div className="py-17">
            {ProductsCart.length > 0 ? (
              ProductsCart.map((product, index) => (
                <ProductCard product={product} dispatch={dispatch} key={index} />
              ))
            ) : (
              <div className="py-17 text-modal">Product Tidak Ada</div>
            )}
          </div>
          <div className="line w-100"></div>
        </div>
        <div className="mt-17 w-100 cart-right-container ml-34">
          <div className="line w-100"></div>
          <div className="py-17">
            <div className="space-between">
              <p className="cart-text">Subtotal</p>
              <p className="cart-text">{format(+totalCart.subtotal)}</p>
            </div>
            <div className="space-between mt-11">
              <p className="cart-text">Qty</p>
              <p className="cart-text">{totalCart.qty}</p>
            </div>
          </div>
          <div className="line w-100"></div>
          <div className="space-between mt-15">
            <p className="cart-text half-bold">Total</p>
            <p className="cart-text half-bold">{format(+totalCart.total)}</p>
          </div>
          <div className="text-right mt-35">
            {ProductsCart.length > 0 ? (
              <Link to="/cart/shipping">
                <button className="btn btn-primary">Proceed To Checkout</button>
              </Link>
            ) : (
              <button className="btn btn-primary disabled" disabled>
                Proceed To Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, dispatch }) {
  const onAdd = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    dispatch({
      type: "GET_TOTAL_CART",
    });
  };
  const onDesc = () => {
    if (product.qty > 1) {
      dispatch({
        type: "DESC_TO_CART",
        payload: product,
      });
    } else {
      dispatch({
        type: "REMOVE_TO_CART",
        payload: product,
      });
    }
    dispatch({
      type: "GET_TOTAL_CART",
    });
  };
  const onRemove = () => {
    dispatch({
      type: "REMOVE_TO_CART",
      payload: product,
    });
    dispatch({
      type: "GET_TOTAL_CART",
    });
  };
  return (
    <div className="space-between">
      <div className="row">
        <div>
          <img src={product.photo} alt="contoh" className="cart-list-img" />
        </div>
        <div className="ml-13">
          <h5 className="cart-title-name mt-11">{product.name}</h5>
          <div className="row mt-17">
            <span className="cursor cart-btn" onClick={onDesc}>
              -
            </span>
            <div className="cart-qty-con align-center px-11">
              <p className="cart-qty-num">{product.qty}</p>
            </div>
            <span className="cursor cart-btn" onClick={onAdd}>
              +
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="cart-text mt-11">
          {format(+product.price * +product.qty)}
        </p>
        <div className="text-right mt-17">
          <img src={trash} alt="remove" className="cursor" onClick={onRemove} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
