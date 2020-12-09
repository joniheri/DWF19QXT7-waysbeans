import React from "react";
import { Link } from "react-router-dom";
import format from "../../config/formatingCurency";

function CardProduct({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card-image">
        <img src={product.photo} />
      </div>
      <div className="card-body">
        <div className="pl-16 py-14">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-desc mt-11">{format(product.price)}</p>
          <p className="card-desc">Stock : {product.stock}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardProduct;
