import React from "react";
import Nav from "./Nav";
import Card from "./Card";
import { useSelector  } from "react-redux";
import Footer from "./Footer";

function Home() {

  const ProductList = useSelector((state) => state.Products.ProductList);

  return (
    <div className="container-fluid border rounded-2">
      <div className="row">
        <Nav />
      </div>
      <div className="row rod d-flex  justify-content-center ">
        {ProductList.map((item, index) => {
          return <Card key={item.id} data={item} index={index} />;
        })}
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
