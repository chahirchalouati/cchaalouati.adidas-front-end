import httpClient from "../Api";
import { FIND_BY_NAME_START_WITH_COLOR_FAILD, FIND_BY_NAME_START_WITH_COLOR_START, FIND_BY_NAME_START_WITH_COLOR_SUCCESS, GET_COLOR_FAILD, GET_COLOR_START, GET_COLOR_SUCCESS } from "../Redux/Types/COLOR_TYPES";

export const getColors = () => async (dispatch) => {
    dispatch({ type: GET_COLOR_START });
    try {
        const { data } = await httpClient.get("/colors");
        dispatch({ type: GET_COLOR_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_COLOR_FAILD, payload: error.response });


    }
}
export const findColorByNameStartsWith = (name) => async (dispatch) => {
    dispatch({ type: FIND_BY_NAME_START_WITH_COLOR_START });
    try {
        const { data } = await httpClient.get(`/colors/${name}`);
        dispatch({ type: FIND_BY_NAME_START_WITH_COLOR_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_BY_NAME_START_WITH_COLOR_FAILD, payload: error.response });


    }
}
