import './ItemDetailsContainer.css';
import { getProduct } from '../../../data.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailsContainer() {
    const [product, setProduct]=useState({});

    const {id} = useParams();

    useEffect(()=>{
        setProduct(getProduct(id))
    },[]);

    return (
    <>
        <article className='DetailsContainer'>
            <img src={product.image} alt="" />
            <div className="DetailsText">
                <h2>{product.name}</h2>
                <p>{product.desc}
                </p>
            </div>
        </article>
      
    </>
  );
}