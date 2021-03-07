import httpClient from "../Api/index";
import { GET_SIZES_FAILD, GET_SIZES_START, GET_SIZES_SUCCESS } from "../Redux/Types/SIZES_TYPES";

/*"`${url}/`"*/
export const getSizes = () => async (dispatch) => {
    dispatch({ type: GET_SIZES_START });
    try {
        const { data } = await httpClient.get("/sizes");

        dispatch({ type: GET_SIZES_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: GET_SIZES_FAILD, payload: error.response });


    }
}
