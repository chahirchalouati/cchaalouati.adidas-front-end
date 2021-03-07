import {
    FIND_BY_NAME_START_WITH_COLOR_FAILD,
    FIND_BY_NAME_START_WITH_COLOR_START,
    FIND_BY_NAME_START_WITH_COLOR_SUCCESS,
    GET_COLOR_FAILD,
    GET_COLOR_START,
    GET_COLOR_SUCCESS,
} from "../Types/COLOR_TYPES";

const initialState = {
    colors: [],
    get_start: false,
    get_success: false,
    get_failed: false,
    find_by_name_starts_with_start: false,
    find_by_name_starts_with_success: false,
    find_by_name_starts_with_failed: false,
    error: null,
};
const RX_COLORS = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COLOR_START:
            return {
                ...state,
                colors: [],
                get_start: true,
                get_success: false,
                get_failed: false,
                error: null,
            };
        case GET_COLOR_SUCCESS:
            return {
                ...state,
                colors: payload.content,
                get_start: false,
                get_success: true,
                get_failed: false,
                error: null,
            };
        case GET_COLOR_FAILD:
            return {
                ...state,
                colors: [],
                find_by_name_starts_with_start: false,
                find_by_name_starts_with_success: false,
                find_by_name_starts_with_failed: true,
                error: payload,
            }; case FIND_BY_NAME_START_WITH_COLOR_START:
            return {
                ...state,

                find_by_name_starts_with_start: true,
                find_by_name_starts_with_success: false,
                find_by_name_starts_with_failed: false,
                error: null,
            };
        case FIND_BY_NAME_START_WITH_COLOR_SUCCESS:
            return {
                ...state,
                colors: payload.content,
                find_by_name_starts_with_start: false,
                find_by_name_starts_with_success: true,
                find_by_name_starts_with_failed: false,
                error: null,
            };
        case FIND_BY_NAME_START_WITH_COLOR_FAILD:
            return {
                ...state,
                find_by_name_starts_with_start: false,
                find_by_name_starts_with_success: false,
                find_by_name_starts_with_failed: true,
                error: payload,
            };
        default:
            return state;
    }
};

export default RX_COLORS;
