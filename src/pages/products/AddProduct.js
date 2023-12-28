import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {add} from "../../redux/services/ProductService";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";
function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <>
            <h1> ADD </h1>
            <Formik initialValues={{
                title: '',
                price: '',
                description: '',

            }}
                    onSubmit={(values) => {
                        dispatch(add(values)).then(() =>{
                            navigate('/products/home')
                        });
                    }}
            >
                <Form>
                    <Field name={"title"} placeholder={"title"}/>
                    <Field name={"price"} placeholder={"Price"}/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <button>Them moi</button>
                </Form>
            </Formik>
        </>
    )
}

export default AddProduct;