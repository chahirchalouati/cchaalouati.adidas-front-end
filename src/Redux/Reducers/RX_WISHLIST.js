const initialState = {

}
const RX_WISHLIST = (state = initialState, { type, payload }) => {
    switch (type) {

        case "typeName":
            return { ...state, ...payload }

        default:
            return state
    }
}

export default RX_WISHLIST