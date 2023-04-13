import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VarContext } from "../App";

function ProductCreate() {
  const Products = useContext(VarContext);

  const [title, titleChange] = useState();
  const [id, idChange] = useState();
  const [price, priceChange] = useState();
  const [category, categoryChange] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    idChange(Products[Products.length - 1].id + 1);
  }, [Products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Products.push({id,title,price,category});
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
                          value={id}
                          disabled="disabled"
                          className="form-control"
                        ></input>
                        <label>title </label>
                        <input
                          value={title}
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

export default ProductCreate;
