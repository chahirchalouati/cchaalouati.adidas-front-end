import httpClient from "../Api";
import {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    GET_FIND_ANY_PRODUCT_FAIL,
    GET_FIND_ANY_PRODUCT_START,
    GET_FIND_ANY_PRODUCT_SUCCESS,
    GET_ONE_PRODUCT_FAIL,
    GET_ONE_PRODUCT_START,
    GET_ONE_PRODUCT_SUCCESS,
    GET_PAGEABLE_PRODUCT_FAIL,
    GET_PAGEABLE_PRODUCT_START,
    GET_PAGEABLE_PRODUCT_SUCCESS,
} from "../Redux/Types/PRODUCT_TYPES";

const ProductService = {
    create: (request) => {
        /**** =========== NOTE  ===========****/
        /**** =========== Validate form in component [important] =========== ****/
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: localStorage.getItem("token"),
            },
        };
        return async (dispatch) => {
            dispatch({ type: CREATE_PRODUCT_START });
            try {
                const { data } = await httpClient.post("/products", request, config);
                dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
            } catch (error) {
                dispatch({ type: CREATE_PRODUCT_FAIL, payload: error.response });
            }
        };
    },
    getProductsByPage: (page, size, orderBy) => {
        return async (dispatch) => {
            dispatch({ type: GET_PAGEABLE_PRODUCT_START });

            try {
                const { data } = await httpClient.get("/products", {
                    params: { page: page, size: size, sort: orderBy },
                });
                dispatch({ type: GET_PAGEABLE_PRODUCT_SUCCESS, payload: data });
            } catch (error) {
                dispatch({ type: GET_PAGEABLE_PRODUCT_FAIL, payload: error.response });
            }
        };
    },
    findByAny: (value, orderBy, page, size) => {
        return async (dispatch) => {
            dispatch({ type: GET_FIND_ANY_PRODUCT_START });

            try {
                const { data } = await httpClient.get("/products/any", {
                    params: { sort: orderBy, param: value, page: page, size: size },
                });
                dispatch({ type: GET_FIND_ANY_PRODUCT_SUCCESS, payload: data });
            } catch (error) {
                dispatch({ type: GET_FIND_ANY_PRODUCT_FAIL, payload: error.response });
            }
        };
    },

    getOneById: (id) => {
        return async (dispatch) => {
            dispatch({ type: GET_ONE_PRODUCT_START });
            try {
                const { data } = await httpClient.get("/products/" + id);
                dispatch({ type: GET_ONE_PRODUCT_SUCCESS, payload: data });
            } catch (error) {
                dispatch({ type: GET_ONE_PRODUCT_FAIL, payload: error.response });
            }
        };
    },
};
export default ProductService;
