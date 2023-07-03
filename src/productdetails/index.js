import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link,use } from 'react-router-dom';
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className='prod'>
      <h1>Product Details</h1>
      <div>
        <img src={product.thumbnail} alt={product.title} className='images'/>
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <h4>{product.rating}</h4>
      </div>
    </div>
  );
};
export default ProductDetailsPage;







