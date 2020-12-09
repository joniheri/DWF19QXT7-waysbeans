import React from "react";
import format from "../config/formatingCurency";
import logo from "../Images/Icon.png";

function ProductBox({ children, product }) {
  return product ? (
    <div className="space-between bg-back shipping-card-con mb-10">
      <div className="row">
        <div className="align-center">
          <img src={product.photo} className="shipping-card-img" />
        </div>
        <div className="ml-13">
          <h5 className="shipping-card-name">{product.name}</h5>
          <p className="shipping-card-desc">
            <span className="half-bold">Friday</span>, 5 August 2020
          </p>
          <p className="shipping-card-desc mt-21">
            Price : {format(product.price)}
          </p>
          <p className="shipping-card-desc">Qty : {product.qty}</p>
          <p className="shipping-card-desc">
            <span className="half-bold">
              Sub Total : {format(product.price)}
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="item-center">
          <img src={logo} className="shipping-card-logo" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
}

export default ProductBox;
