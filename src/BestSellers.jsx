import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const BestSellers = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const promise = axios.get('https://masterclass.kimitsu.it-incubator.io/api/products')
        promise.then((res) => {
            setProducts(res.data)
        });
    }, [])

    return (
        <div className="bestSeller">
            <h2>Bestsellers</h2>

            <div className="cards">
                {products.map((product) => {
                    return (
                        <div className="card">
                            <img src={product.image} alt="img" />
                            <h4>{product.title}</h4>
                            <p className="price">$ {product.price}</p>
                            <Link to={'/product/${product.id}'}>Show more</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}