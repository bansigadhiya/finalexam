import api from "../../api/api"
import { GET_CARTDATA, GET_PRODUCT } from "../Constant/Action.type"

export const getProducts = (data) => {

    return{
        type : GET_PRODUCT,
        payload : data
    }
}

export const getCartdata = (data) => {

    return{
        type : GET_CARTDATA,
        payload : data
    }
}

export const getProductAsync = () => {

    return async dispatch => {
        await api.get("/products").then((res) => {
            dispatch(getProducts(res.data))
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}

export const getCartdataAsync = (id) => {

    return async dispatch => {
        await api.get(`products/${id}`).then((res) => {
            dispatch(getCartdata(res.data))
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}