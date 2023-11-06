import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {updateGoods} from "./GoodsSlice";

const EditGoods = () =>{
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [brand, setBrand] = useState(location.state.brand)

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateGoods({id, title, brand}))
        navigate("/show-goods")
    }
    return (
        <div>
            <h1>Edit Goods</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Item Name: </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="brand">Brand: </label>
                    <input
                        type="text"
                        id="brand"
                        name="barnd"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)} required
                    />
                </div>
                <button type="submit">Update Item</button>
            </form>
        </div>
    )
}
export default EditGoods;