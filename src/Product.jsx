import { useEffect, useState } from "react"
import axios from 'axios'
import rating from './assets/img/rating.svg'
import arrowBack from './assets/img/arrowBack.svg'
import cartWhite from './assets/img/cartWhite.svg'
import { useParams, useNavigate } from "react-router-dom"

export const Product = () => {

    const [product, setProduct] = useState(null);

    let { productId } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.io/api/${productId}`)
            .then((res) => {
                const product = res.data
                setProduct(product)
            })
    }, [])


    const toPreviousPageHandler = () => {
        navigate('/')
    }

    return (
        <div>
            <div className="arrowBack">
                <button onClick={toPreviousPageHandler} >
                    <img src={arrowBack} alt="" />
                    Back to Best Seller
                </button>
            </div>

            {product === null ? (
                <h2>Продукт еще грузится ...</h2>
            ) : <>Разметка продукта</>(
            <div className="product">
                <img src={product.image} alt="" />
                <div className="info">
                    <p className="title">{product.title}</p>
                    <p className="price">$ {product.price}</p>
                    <div className="rating">
                        <p>Rating: {product.rating.rate}</p>
                        <img src={rating} alt="" />
                    </div>
                    <div className="category">
                        <span>Category:</span>
                        <p>{product.category}</p>
                    </div>
                    <p className="description">{product.description}</p>
                    <button>
                        <img src={cartWhite} alt="" />
                        Add to cart
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}