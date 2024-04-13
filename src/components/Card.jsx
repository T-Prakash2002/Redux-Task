import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { UpdateAmount } from "../Slice/PriceSlice";


function Card({data,index}) {

  const [Quantity, setQuantity] = useState(0);


const dispatch = useDispatch()

    const ProductList=useSelector((state)=>state.Products.ProductList)


const handleAmount=(quan)=>{

  // console.log(ProductList[index].price);

  setQuantity(quan);
    
  dispatch(UpdateAmount({Quantity:quan,Amount:ProductList[index].price,Index:index}))
    
    
}

return (
    <div className="col-12 col-md-6 m-3">
      <div className="card px-5 bg-success-subtle rounded-4">
        <img src={data.img} className="card-img-top pt-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <br />

          <p className="card-text">
            <strong className="pe-3">Description:</strong>
            {data.description}
          </p>

          <p className="card-text list-group-item text-dark">
            <strong className="pe-3 ">Rating:</strong>
            <span>{data.rating}</span>
          </p>

          <div className="list-group list-group-flush">
            <p className="card-text text-danger">
              <strong className="pe-3 ">Stock:</strong>
              {data.stock}
            </p>

            <div className="row">
              <p className="col-6 ">
                <strong className="pe-3">Discount:</strong>
                {data.discountPercentage}%
              </p>
            </div>

            <div className="row">
              <p className="col-6 ">
                <strong>Quantity:</strong>
              </p>

              <div className="col-6 d-flex justify-content-end text-success">
                <input
                  type="number"
                  className="btn btn-outline-danger"
                  defaultValue={0}
                  min={0}
                  max={data.stock}
                  onChange={(e) => {

                    handleAmount(e.target.value)
                            
                  }}
                  
                />
              </div>
            </div>
            <hr />
            <div className="row text-success">
              <p className="col-6 ">
                <strong>Product Price:</strong>
              </p>

              <div className="col-6 d-flex justify-content-end text-success">
                <p>
                  <strong>${data.price}</strong>
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className="row text-danger">
            <p className="col-6 ">
              <strong>Total Price:</strong>
            </p>

            <div className="col-6 list-group-item  d-flex justify-content-end ">
              <h5>
                <strong className="text-danger bg-warning-subtle">
                  ${Quantity*data.price}
                </strong>
              </h5>
            </div>
            <div className="col-6 list-group-item  d-flex justify-content-end ">
              <h5>
                <strong className="text-danger bg-warning-subtle">
                  {/* {ProductTotalAmount} */}
                </strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
