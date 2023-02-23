import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row my-5 p-5">
          <div className="col-sm-6 d-flex">
            <div className="">
              <img
                src="https://res.cloudinary.com/oluwaloni/image/upload/v1669905803/pdetails.png"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title text-center">All hand-made with natural soy wax, Candleaf is <br/> made for your pleasure</h4>
                <p className="card-text text-center pt-3">🚚FREE SHIPPING</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
