import React from "react";

const Payment = () => {
  return (
    <div className="container d-flex justify-content-center my-auto mx-auto">
      <div className="row  ">
        <div className="col-md-6 mt-5">
          <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666616500/logo.png" />
          <p className="pt-5 ">
            <span> Cart </span>
            <i className="bi bi-chevron-right mx-3 pt-3"></i>
            <span> Details </span>
            <i className="bi bi-chevron-right mx-3 mt-3"></i>
            <span> Shipping </span>
            <i className="bi bi-chevron-right mx-3"></i>
            <span> Payment </span>
          </p>
          <article className="d-flex ">
            <p className="text-bold fs-3 fw-bold">Contact</p>
            <p className="mx-auto">
              Do you have an account?
              <span className="text-success"> Login</span>
            </p>
          </article>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email or mobile phone number"
            aria-describedby="emailHelp"
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className=" form-check-label" for="flexCheckDefault">
              Add me to Candleaf newsletter for a 10% discount
            </label>
          </div>

          <article className="container">
            <p className="my-3 text-bold fw-bold pt-5"> Shipping Address</p>
            <div className="row">
              <div className="mb-md-3 col-md">
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputFirstName"
                  placeholder="Name"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3 col-md">
                <input
                  type="second-name"
                  className="form-control"
                  id="exampleInputSecondName"
                  placeholder="Second Name"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="mb-3 col-md">
              <input
                type="second-name"
                className="form-control"
                id="exampleInputSecondName"
                placeholder="Address and number"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3 col-md">
              <input
                type="second-name"
                className="form-control"
                id="exampleInputSecondName"
                placeholder="Shipping note (optional)"
                aria-describedby="emailHelp"
              />
            </div>

            <div className=" row ">
              <div className="mb-3 w-auto h-auto col-md">
                <input
                  type="second-name"
                  className="form-control p-auto h-100"
                  id="exampleInputSecondName"
                  placeholder="City"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3 w-auto h-auto col-md ">
                <input
                  type="second-name"
                  className="form-control p-auto h-100 mb-3"
                  id="exampleInputSecondName"
                  placeholder="Postal Code"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="form-floating col-md">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Province</option>
                  <option value="1">Nigeria</option>
                  <option value="2">USA</option>
                  <option value="3">Ghana</option>
                </select>
                <label className="align-baseline" for="floatingSelect">
                  Province
                </label>
              </div>
            </div>

            <div className="form-floating col-md">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Italy</option>
                <option value="1">Nigeria</option>
                <option value="2">USA</option>
                <option value="3">Ghana</option>
              </select>
              <label className="fw-extra-small" for="floatingSelect">
                Country/Region
              </label>
              <div className="">
                <a className="" href="">
                  <p className="text-success mt-3">Back to cart</p>
                </a>
                <div className=" gap-2 d-grid justify-content-md-end">
                  <button className="btn btn-success mx-end " type="button">
                    Go to Shipping
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-6 mt-5" style={{ backgroundColor: "#F2F2F2" }}>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-6 my-5">
                <img
                  className="card"
                  src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"
                />
              </div>
              <div className="col-sm-6 px-4">
                <h5 className="card-title my-5">Spiced Mint Candleaf</h5>
                <p className="card-text fs-4 text-success bold-bold ">
                  $9.99
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="mb-3 w-auto h-auto col-md ">
              <input
                type="second-name"
                className="form-control p-auto h-100 mb-3"
                id="exampleInputSecondName"
                placeholder="Coupon code"
                aria-describedby="couponCode"
              />
            </div>
            <div className=" p-auto h-100 col-md">
              <button className="">Add code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
