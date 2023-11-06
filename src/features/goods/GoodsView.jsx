import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoods } from "./GoodsSlice";
import { Link } from "react-router-dom";

const GoodsView = () =>{
    const goods = useSelector((state)=>state.goodsReducer.goods);
    const dispatch = useDispatch();
    const handleDelete = (id)=> {
        dispatch(deleteGoods(id));
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Item Name</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {goods && goods.map((good)=>{
                        const {id, title, brand} = good;
                        return <tr>
                            {/* <td>{id}</td> */}
                            <td>{title}</td>
                            <td>{brand}</td>
                            <td>
                                <Link to="/edit-goods" state={{id, title, brand}}>
                                <button>Edit</button>
                                </Link>
                                <button onClick={()=>{handleDelete(id)}}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default GoodsView;