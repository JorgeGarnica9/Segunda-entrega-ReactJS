import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCategory } from "../../data";
import CardComponent from "../../assets/components/CardComponent/CardComponent";

export default function JuegosView(){
    const [products, setProducts]=useState({});

    const {id} = useParams();

    useEffect(()=>{
        setProducts(getCategory(id))
    })

    return (<>
        <h2>Juegos View del proyecto PATATA</h2>
        <p>Acá voy a tener pintadas las cards solamente de los juegos en venta</p>
        <section className="ListContainer">
            {products.map(product=><CardComponent key={product.id} product={product}/>)}
        </section>
    </>)
}