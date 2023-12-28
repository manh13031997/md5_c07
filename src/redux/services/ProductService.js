import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await axios.get("http://localhost:3000/products");
        console.log(3)
        return res.data;

    }
)

export const add = createAsyncThunk(
    'products/add',
    async (newProduct) => {
        let newProductRes = await axios.post("http://localhost:3000/products", newProduct);
        return newProductRes.data;
    }
)

export const remove = createAsyncThunk(
    'products/remove',
    async (id) => {
        let res = await axios.delete("http://localhost:3000/products/" + id);
        console.log(res.data)
        return res.data;
    }
)

export const getById = createAsyncThunk(
    'products/findById',
    async (id) => {
        let res = await axios.get("http://localhost:3000/products/" + id);
        return res.data;
    }
)

export const edit = createAsyncThunk (
    'products/edit',
    async (productEdit) => {
        let res = await axios.put('http://localhost:3000/products/' + productEdit.id, productEdit);
        return res.data;
    }
)
