import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { VarContext } from "../App";

function ProductEdit() {
    const navigate = useNavigate();
  const Products = useContext(VarContext);
  const { pid } = useParams();
  const [title, titleChange] = useState(0);
  const [price, priceChange] = useState(0);
  const [category, categoryChange] = useState(0);

  useEffect(() => {
    const product = Products.find((item) => item.id === parseInt(pid));
    titleChange(product.title);
    priceChange(product.price);
    categoryChange(product.category);
  }, [pid,Products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = Products[pid - 1];
    item.title = title;
    item.price = price;
    item.category = category;
    navigate("/");
  };

  return (
    <div>
      <div className="row">
        <div>
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Product Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Id </label>
                        <input
                          value={pid}
                          disabled="disabled"
                          className="form-control"
                        ></input>
                        <label>title </label>
                        <input
                          value={title ? title: ''}
                          onChange={(e) => titleChange(e.target.value)}
                          className="form-control"
                        ></input>
                        <label>price </label>
                        <input
                          value={price}
                          onChange={(e) => priceChange(e.target.value)}
                          className="form-control"
                        ></input>
                        <label>category </label>
                        <input
                          value={category}
                          onChange={(e) => categoryChange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-success">
                        save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
