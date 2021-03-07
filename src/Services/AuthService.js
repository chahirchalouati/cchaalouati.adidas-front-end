import httpClient from "../Api";
import {
    AUTH_RESET,
    SIGN_IN_FAIL,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from "../Redux/Types/AUTH_TYPES";

export const SignIn = (request) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGN_IN_START });
            const { data } = await httpClient.post("/signin", { ...request });

            dispatch({ type: SIGN_IN_SUCCESS, payload: data });
        } catch (error) {
              setTimeout(() => {
                   dispatch({ type: SIGN_IN_FAIL, payload: error.response });  
              }, 3000);
         
        }
    }
};
export const SignUp = async (request) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGN_UP_START });
            const { data } = await httpClient.post("/signup", request);
            dispatch({ type: SIGN_UP_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: SIGN_UP_FAIL, payload: error.response });
        }
    }
};
export const LogOut = (request) => (dispatch) => {
    dispatch({ type: AUTH_RESET });


};
