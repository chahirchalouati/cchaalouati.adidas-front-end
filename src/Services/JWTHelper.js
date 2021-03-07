import { AUTH_RESET } from "../Redux/Types/AUTH_TYPES"
import jwt_decode from 'jwt-decode';

export const getUserDetails = (token) => {
    const { user } = jwt_decode(token);
    const currentRole = user.roles.map(role => role.role == "ADMIN" ? "ADMIN" : "USER");

    console.log({ role: currentRole[0], user: user });
    return { role: currentRole[0], user: user };
}

export const storeToken = (token) => {
    localStorage.setItem("token", token);

}

export const removeToken = () => dispatch => {
    localStorage.removeItem("token");
    dispatch({ type: AUTH_RESET });
}