import './ItemListContainer.css';
import { getProducts, getCategory } from '../../../data.js';
import { useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';

export default function ItemListContainer() {
    const [products, setProducts]=useState([]);
    
    useEffect(()=>{
      getProducts.then(info => setProducts(info))
    },[]);
    
    return (
    <>
      <section className='ListContainer'>
         {products.map(product=> <CardComponent key={product.id} product={product}/>)}
      </section>
    </>
  );
}