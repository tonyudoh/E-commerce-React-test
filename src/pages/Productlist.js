// import React from "react";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get("http://localhost:3000/product").then((response) => {
      setProducts(response.data);
    });
  };

  return (
    <div className="container">
      <article className="mt-5 mb-5 text-center">
        <h1>Products</h1>
        <p className="">Order it for you or for your beloved ones</p>
      </article>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-3 my-3">
              <div
                className="card shadow border-0"
                style={{ backgroundColor: "#F7F8FA" }}
              >
                <img src={product.img} className="card-img-top img-fluid" />
                <div className="card-body bg-white">
                  <h5 className="card-title"> {product.name}</h5>
                  <p className="card-text text-success">{product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="row g-4 ms-md-auto pt-4 d-sm-center">
          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                {" "}
                <h5 className="card-title text-start ">
                  Sweet Strawberry
                </h5>{" "}
                <p className="card-text text-end text-success fw-bold">
                  $10.99
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <h5 className="card-title text-start">Rose</h5>
                <p className="card-text text-end text-success fw-bold">
                  $15.99
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <h5 className="card-title text-start">Blue Berry</h5>
                <p className="card-text text-end text-success fw-bold">
                  $13.99
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <h5 className="card-title text-start">Orange</h5>
                <p className="card-text text-end text-success fw-bold">$5.99</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <h5 className="card-title text-start">Berry</h5>
                <p className="card-text text-end text-success fw-bold">
                  $20.99
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <h5 className="card-title text-start">Berry</h5>
                <p className="card-text text-end text-success fw-bold">
                  $15.99
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <h5 className="card-title text-start">Berry</h5>
                <p className="card-text text-end text-success fw-bold">$6.99</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="card shadow border-0"
              style={{ backgroundColor: "#efefef" }}
            >
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <h5 className="card-title text-start">Berry</h5>
                <p className="card-text text-end text-success fw-bold">$8.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Productlist;

<div className="container">
  <div className="row g-4 ms-md-auto pt-4 d-sm-center">
    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          {" "}
          <h5 className="card-title text-start ">Sweet Strawberry</h5>{" "}
          <p className="card-text text-end text-success fw-bold">$10.99</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title text-start">Rose</h5>
          <p className="card-text text-end text-success fw-bold">$15.99</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title text-start">Blue Berry</h5>
          <p className="card-text text-end text-success fw-bold">$13.99</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title text-start">Orange</h5>
          <p className="card-text text-end text-success fw-bold">$5.99</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title text-start">Berry</h5>
          <p className="card-text text-end text-success fw-bold">$20.99</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title text-start">Berry</h5>
          <p className="card-text text-end text-success fw-bold">$15.99</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title text-start">Berry</h5>
          <p className="card-text text-end text-success fw-bold">$6.99</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div
        className="card shadow border-0"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title text-start">Berry</h5>
          <p className="card-text text-end text-success fw-bold">$8.99</p>
        </div>
      </div>
    </div>
  </div>
</div>;
