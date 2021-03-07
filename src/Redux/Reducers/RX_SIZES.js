import {
    GET_SIZES_FAILD,
    GET_SIZES_START,
    GET_SIZES_SUCCESS,
} from "../Types/SIZES_TYPES";

const initialState = {
    sizes: [],
    get_start: false,
    get_success: false,
    get_failed: false,
    error: null,
};
const RX_SIZES = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SIZES_START:
            return {
                ...state,
                sizes: [],
                get_start: true,
                get_success: false,
                get_failed: false,
                error: null,
            };
        case GET_SIZES_SUCCESS:
            return {
                ...state,
                sizes: payload,
                get_start: false,
                get_success: true,
                get_failed: false,
                error: null,
            };
        case GET_SIZES_FAILD:
            return {
                ...state,
                sizes: [],
                get_start: false,
                get_success: false,
                get_failed: true,
                error: payload,
            };
        default:
            return state;
    }
};

export default RX_SIZES;
