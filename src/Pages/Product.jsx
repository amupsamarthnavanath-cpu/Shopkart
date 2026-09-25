import React, { useState, useEffect, useMemo } from 'react';


import ProductCard1 from '../Component/ProductCard1';


function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const result = useMemo(() => {
  return products.filter((item) => item.price < 200);
}, [products])

  return (
    <>
      <h1>Product Page</h1>

      {result.map((item) => (
        <ProductCard1
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />
        
      ))}
    </>
  );
}

export default Product;