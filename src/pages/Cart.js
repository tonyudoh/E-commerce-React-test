import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="container pt-5 text-center">
        <br></br>
        <h4 className="text-center">Your Cart item</h4>
        <br></br>
        <a href="">
          <p className="text-success"> Back to shipping</p>
        </a>
        <br></br>

        {/* table */}

        <table className="table">
          <thead>
            <tr>
              <th className="text-start" scope="col">
                Product
              </th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="">
                <div className="row p-3">
                  <div className="col-md-3">
                    <img
                      className="img-fluid"
                      style={{ width: "160px", height: "130px" }}
                      src="https://res.cloudinary.com/oluwaloni/image/upload/v1669905803/pdetails.png"
                    />
                  </div>
                  <div className="col-md-5">
                    <p className="text-start fs-5">Spiced Mint Candleaf®️</p>
                    <br></br>
                    <p className="text-start text-success ">Remove</p>
                  </div>
                </div>
              </th>
              <td className="pt-5">$9.99</td>
              <td className="pt-5">
                <div
                  className="d-flex border border-success"
                  style={{ width: "4rem", height: "2rem" }}
                >
                  <p className="mx-2 text-success">+</p>
                  <p className="">1</p>
                  <p className="mx-2 text-success ">-</p>
                </div>
              </td>
              <td className="pt-5">$9.99</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="container text-end">
          <div className="row justify-content-end">
            <div className="col col-md-2">Sub-total</div>
            <div className="col-md-auto">$9.99 
            <p><br></br>Tax and shipping cost will be calculated later</p>
            </div>
            <div className="col col-md-2 border bg-success text-light text-center pt-3" style={{width: "8rem", height:"3rem"}}>
              Check Out
            </div>
          </div>
        </div> */}

        <div className="container text-end">
          <div className="row justify-content-end">
            <div className="col col-md-3 d-flex">
              <p className="text-end">Sub-total</p>
              <div className="col-md-3 text-end">
                $9.99
              </div>
            </div>
            <div
              className="col col-md-2 border bg-success text-light text-center pt-3"
              style={{ width: "8rem", height: "3rem" }}>
              Check Out
            </div>
            <p className="text-end">shipping would be calculate </p>
          </div>
        </div>
      </div>

      <br></br>
      <Footer />
    </div>
  );
};

export default Cart;
