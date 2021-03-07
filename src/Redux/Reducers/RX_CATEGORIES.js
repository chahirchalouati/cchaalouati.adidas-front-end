import {
    GET_CATEGORIES_FAILD,
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
} from "../Types/CATEGORIES_TYPES";

const initialState = {
    categories: [],
    get_start: false,
    get_success: false,
    get_failed: false,
    error: null,
};
const RX_CATEGORIES = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CATEGORIES_START:
            return {
                ...state,
                categories: [],
                get_start: true,
                get_success: false,
                get_failed: false,
                error: null,
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                get_start: false,
                get_success: true,
                get_failed: false,
                error: null,
            };
        case GET_CATEGORIES_FAILD:
            return {
                ...state,
                categories: [],
                get_start: false,
                get_success: false,
                get_failed: true,
                error: payload,
            };
        default:
            return state;
    }
};

export default RX_CATEGORIES;
