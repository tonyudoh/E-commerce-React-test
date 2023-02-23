import React from 'react'

const Product = (props) => {
  return (
        <div>
            <div className='container'>
                <div className='row ms-md-auto pt-4 d-sm-center text-light'>
                    <div className='col-md-6 col-lg-3'>
                        <div className="card shadow border-0" style={{width: "20rem", backgroundColor: "#efefef"}}>
                             <img src={props.itemUrl} alt="..." />
                                 <div className="card-body" style={{backgroundColor: "white"}}>
                                 <h5 className="card-title text-start">{props.itemName}</h5>
                                 <p className="card-text text-end text-success fw-bold">{props.itemPrice}</p>
                            </div>
                         </div>
                     </div>
                </div>
             </div> 
        </div>
  )
}

export default Product