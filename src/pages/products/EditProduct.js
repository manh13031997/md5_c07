import {Field, Form, Formik} from "formik";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {edit, getById} from "../../redux/services/ProductService";
import {useDispatch, useSelector} from "react-redux";

export function EditProduct() {
    const productEdit = useSelector(({products}) => {
        return products.productEdit;
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getById(id))
    }, []);


    return (
        <>
            <h1>Edit Product</h1>
            <Formik
                initialValues={productEdit}

                onSubmit={(values) => {
                    dispatch(edit(values)).then(() =>{
                        navigate('/products/home');
                    })
                }}
                enableReinitialize={true}
            >
                <Form>
                    <Field name={"id"} placeholder={"Id"}/>
                    <Field name={"title"} placeholder={"title"}/>
                    <Field name={"price"} placeholder={"Price"}/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <button>Edit</button>
                </Form>
            </Formik>
        </>
    )
}