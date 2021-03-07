import { combineReducers } from "redux";
import RX_PRODUCTS from "./RX_PRODUCTS";
import RX_WISHLIST from "./RX_WISHLIST";
import RX_SIZES from "./RX_SIZES";
import RX_CATEGORIES from "./RX_CATEGORIES";
import RX_COLORS from "./RX_COLORS";
import RX_AUTH from "./RX_AUTH";

export default combineReducers({
    RX_PRODUCTS,
    RX_WISHLIST,
    RX_SIZES,
    RX_CATEGORIES,
    RX_COLORS,
    RX_AUTH
});
