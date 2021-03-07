import { getUserDetails, storeToken } from "../../Services/JWTHelper";
import {
    AUTH_RESET,
    SIGN_IN_FAIL,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from "../Types/AUTH_TYPES";

const initialState = {
    isAuthenticated: false,
    role: "USER",
    user: null,
    signInStart: false,
    signInSuccess: false,
    signInFail: false,

    signUpStart: false,
    signUpSuccess: false,
    signUpFail: false,

    error: null


};
const RX_AUTH = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_START:
            return {
                ...state,
                isAuthenticated: false,
                role: "USER",
                signInStart: true,
                signInSuccess: false,
                signInFail: false,
                error: null
            };
        case SIGN_IN_SUCCESS:
            const { token } = payload;
            storeToken(token);
            const { role, user } = getUserDetails(token)
            return {
                ...state,
                isAuthenticated: true,
                role: role,
                user: user,
                signInStart: false,
                signInSuccess: true,
                signInFail: false,
                error: null
            };
        case SIGN_IN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                role: "USER",
                signInStart: false,
                signInSuccess: false,
                signInFail: true,
                error: payload
            };
        case SIGN_UP_START:
            return {
                ...state,
                ...payload
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                ...payload
            };
        case SIGN_UP_FAIL:
            return {
                ...state,
                ...payload
            };

        case AUTH_RESET:
            return {
                isAuthenticated: false,
                role: "USER",

                signInStart: false,
                signInSuccess: false,
                signInFail: false,

                signUpStart: false,
                signUpSuccess: false,
                signUpFail: false,

                error: null
            };



        default:
            return state;
    }
};

export default RX_AUTH;
