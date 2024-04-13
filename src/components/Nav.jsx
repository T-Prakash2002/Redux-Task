import React from 'react'
import { useSelector,useDispatch } from 'react-redux'


function Nav() {

const dispatch=useDispatch();

const {ProductList,ProductAmount,ProductTotalAmount}=useSelector((state)=>state.Products)


  return (
    
    <nav className="navbar navbar-expand-lg bg-warning-subtle fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Products</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                </a>
                <ul className="dropdown-menu">

                    <li><a className="dropdown-item" href="#">List</a></li>

                    <li><a className="dropdown-item" href="#">Cart</a></li>

                </ul>
                </li>

                <button type="button" className="btn btn-outline-danger ms-4" onClick={()=>{
                    alert("Your ordered confirmed!!")
                }}>Proceed Pay</button>
            </ul>
            
            <div className="displayTotal">
                {ProductTotalAmount}
            </div>
            </div>
        </div>
        </nav>

    
  )
}

export default Nav