import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getById} from "../../redux/services/ProductService";

const DetailProduct = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getById(id))
    }, []);

    const product = useSelector(({products}) =>{
        return products.productEdit
    })

    return (
        <>
            <h2>Product Detail</h2>
            <div>
                <h3>Name : {product.title}</h3>
                <h3>Description : {product.description}</h3>
                <h3>Price : {product.price}</h3>
                <button onClick={() => {navigate('/products/home')}}>Return Home</button>
            </div>
        </>
    )
}
export default DetailProduct;