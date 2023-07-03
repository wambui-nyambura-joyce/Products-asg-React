import React,{useState,useEffect} from "react";
import './style.css';
import{Link,} from "react-router-dom"
const Products = ()=>{
    const [products,setProducts] = useState ([]);
    const [loading,setLoading ] =useState(false)
    useEffect (()=>{
        (async()=>{
            await getProducts()
        })();
    },[]);
    const getProducts = async ()=>{
       try{
        setLoading (true)
        const response = await fetch ('https://dummyjson.com/products');
        const result = await response.json()
        setProducts(result.products);
        setLoading(false);
       }catch (error){
        console.log(error.mesage);
       }
    };
    console.log({products});
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="displayProducts">
        {products.map(item =>(
          <div  key={item.id}>
          <img  alt="" src ={item.images[1]} className="images" />
          <h3>{item.title}</h3>
          <h3>{item.price}</h3>
          <h3>{item.discountPercentage}</h3>
          <Link to={`/product/${item.id}` }className="btn">
            <button type="submit" className="view">View</button >
          </Link>
          </div>
        ))}
      </div>
    )  ;
    };
export default Products;






