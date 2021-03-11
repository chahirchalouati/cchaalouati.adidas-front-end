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
} from "../Types/PRODUCT_TYPES";

const initialState = {
    products: [],

    create_products_start: false,
    create_products_success: false,
    create_products_fail: false,



    get_products_start: false,
    get_products_success: false,
    get_products_fail: false,


    get_find_any_products_start: false,
    get_find_any_products_success: false,
    get_find_any_products_fail: false,


    get_one_products_start: false,
    get_one_products_success: false,
    get_one_products_fail: false,

    one_product: null,

    data: null,
    error: null,
};
const RX_PRODUCTS = (state = initialState, { type, payload }) => {
    switch (type) {


        case CREATE_PRODUCT_START:
            return {
                ...state,
                products: [],
                create_products_start: true,
                create_products_success: false,
                create_products_fail: false,

                error: null,
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, payload],
                create_products_start: false,
                create_products_success: true,
                create_products_fail: false,
                error: null,
            };
        case CREATE_PRODUCT_FAIL:
            return {
                ...state,
                create_products_start: false,
                create_products_success: false,
                create_products_fail: true,
                error: payload,
            };


        case GET_PAGEABLE_PRODUCT_START:
            return {
                ...state,
                products: [],
                get_products_start: true,
                get_products_success: false,
                get_products_fail: false,
                data: null,
                error: null,
            };
        case GET_PAGEABLE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload.content,
                data: payload,
                get_products_start: false,
                get_products_success: true,
                get_products_fail: false,
                error: null,
            };
        case GET_PAGEABLE_PRODUCT_FAIL:
            return {
                ...state,
                products: [],
                get_products_start: false,
                get_products_success: false,
                get_products_fail: true,
                data: null,
                error: payload,
            };
        /**Get ANY Products */
        case GET_FIND_ANY_PRODUCT_START:
            return {
                ...state,
                get_find_any_products_start: true,
                get_find_any_products_success: false,
                get_find_any_products_fail: false,
                error: null,
            };

        case GET_FIND_ANY_PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload.content,
                get_find_any_products_start: false,
                get_find_any_products_success: true,
                get_find_any_products_fail: false,
                data: payload,
                error: null,
            };

        case GET_FIND_ANY_PRODUCT_FAIL:
            return {
                ...state,
                get_find_any_products_start: false,
                get_find_any_products_success: false,
                get_find_any_products_fail: true,
                error: payload,
            };

        /**Get One Product */
        case GET_ONE_PRODUCT_START:
            return {
                ...state,
                get_one_products_start: true,
                get_one_products_success: false,
                get_one_products_fail: false,
                one_product: null,
            };
        case GET_ONE_PRODUCT_SUCCESS:
            return {
                ...state,
                get_one_products_start: false,
                get_one_products_success: true,
                get_one_products_fail: false,
                one_product: payload,
            };


        case GET_ONE_PRODUCT_FAIL:
            return {
                ...state,
                get_one_products_start: false,
                get_one_products_success: false,
                get_one_products_fail: true,
                one_product: null,
            };






















        default:
            return state;
    }
};

export default RX_PRODUCTS;
