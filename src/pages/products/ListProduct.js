import {useDispatch, useSelector} from "react-redux";
import {getAll, remove} from "../../redux/services/ProductService";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export function ListProduct() {
    const dispatch = useDispatch();
    const listProduct = useSelector(({products}) => {
        return products.list;
    });

    useEffect(() => {
        dispatch(getAll());
    }, [])

    const kickOut = (id) => {
        dispatch(remove(id))
    }
    return (
        <>
            <h1>List Product</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    listProduct.map((product) => (
                        <>

                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td> <Link to={`/products/${product.id}`}>{product.title}</Link> </td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>

                                <td>
                                    <Link to={'/products/edit/' + product.id}> <button>Sửa</button></Link>
                                    <button onClick={() => kickOut(product.id)}>Xóa</button>
                                </td>
                            </tr>
                        </>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}