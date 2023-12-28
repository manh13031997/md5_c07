import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {ListProduct} from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";
import {EditProduct} from "./pages/products/EditProduct";
import DetailProduct from "./pages/products/DetailProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path={'products'} element={<Home/>}>
                    <Route path={"home"} element={<ListProduct/>}/>
                    <Route path={"add"} element={<AddProduct/>}/>
                    <Route path={":id"} element={<DetailProduct/>}/>
                    <Route path={"edit/:id"} element={<EditProduct/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;