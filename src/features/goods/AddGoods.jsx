import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoods } from "./GoodsSlice";
import {useNavigate} from "react-router-dom";

const AddGoods = () => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberofGoods = useSelector((state) => state.goodsReducer.goods.length);
  
  const handleSubmit =(e) =>{
    e.preventDefault();
    const good ={id: numberofGoods+1, title, brand};
    dispatch(addGoods(good));
    navigate("/show-goods", {replace:true});
  }
  return (
    <div>
      <h1>Add Goods</h1>
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
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};
export default AddGoods;
