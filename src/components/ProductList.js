import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VarContext } from "../App";

function ProductList() {
  const Products = useContext(VarContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    var index = Products.map((e) => {
      return e.id;
    }).indexOf(id);

    Products.splice(index, 1);
    navigate("/");
  };

  const editItem = (id) => {
    navigate("/product/edit/" + id);
  };

  return (
    <div className="container" style={{ border: "1px solid red" }}>
      <div className="card ">
        <div className="card-title">
          <h2>Product Listing</h2>
        </div>
        <div className="card-body">
          <div style={{ float: "right", margin: "10px" }}>
            <Link to="/product/create" className="btn btn-success">
              Add Product
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>title</td>
                <td>price</td>
                <td>category</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {Products &&
                Products.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>
                        <button
                          onClick={() => editItem(item.id)}
                          className="btn btn-success"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger "
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
