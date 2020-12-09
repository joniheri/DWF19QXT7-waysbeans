import { useState } from "react";
import example from "../Images/Product1.png";

function AddProduct() {
  const [nameFile, setNameFile] = useState("Photo Product");
  const onUpload = (e) => {
    setNameFile(e.target.files[0].name);
  };
  return (
    <div className="row mb-90 mt-44">
      <div className="w-472 mt-33">
        <h2 className="add-product-page-title">Add Product</h2>
        <form className="column">
          <input name="name" placeholder="Name" className="input" />
          <input name="stock" placeholder="Stock" className="input" />
          <input name="price" placeholder="Price" className="input" />
          <textarea name="desc" placeholder="Description Product" rows={4} className="input" />
          <label htmlFor="file" className="cursor input w-photo-file">
            <div className="space-between align-center">
              <p>{nameFile}</p>
              <i className="fas fa-paperclip"></i>
            </div>
            <input type="file" className="none" id="file" onChange={onUpload} />
          </label>
          <div className="mt-55 item-center">
            <button className="btn btn-primary btn-add-product">
              Add Product
            </button>
          </div>
        </form>
      </div>
      <div className="ml-92">
        <img src={example} alt="add-product" className="add-product-img" />
      </div>
    </div>
  );
}

export default AddProduct;
