import React from 'react'
import Nav from './Nav'
import Card from './Card'
import { useSelector,useDispatch } from 'react-redux'



function Home() {

      const dispatch = useDispatch()

    const ProductList=useSelector((state)=>state.Products.ProductList)


  return (
    <div className='container-fluid border rounded-2'>
            
            <div className="row">
                <Nav />
            </div>
            <div className="row rod d-flex  justify-content-center ">

                
                {
                    ProductList.map((item,index)=>{

                    
                        return (
                        
                        <Card key={item.id} data={item} index={index}/>
                        
                        )
                    })
                }


                
            </div>
        </div>
  )
}

export default Home