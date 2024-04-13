import React from 'react'

import { useSelector } from 'react-redux'


const Footer = () => {


    const ProductTotalAmount = useSelector((state) => state.Products.ProductTotalAmount);

  return (
    
    <nav className="navbar d-flex justify-content-center navbar-expand-lg bg-warning-subtle ">
              <a className="navbar-brand 
              bg-danger fw-bolder rounded px-4" href="#">Total Amount: {ProductTotalAmount}</a>
        </nav>

  )
}

export default Footer