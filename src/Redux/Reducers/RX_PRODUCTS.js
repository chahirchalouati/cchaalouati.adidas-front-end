const initialState = {

}
const RX_PRODUCTS = (state = initialState, { type, payload }) => {
    switch (type) {

        case "":
            return { ...state, ...payload }

        default:
            return state
    }
}

export default RX_PRODUCTS