import httpClient from "../Api";
import { GET_CATEGORIES_FAILD, GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS } from "../Redux/Types/CATEGORIES_TYPES";

export const getCategories = () => async (dispatch) => {
    dispatch({ type: GET_CATEGORIES_START });
    try {
        const { data } = await httpClient.get("/categories");
        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CATEGORIES_FAILD, payload: error.response });


    }
}
