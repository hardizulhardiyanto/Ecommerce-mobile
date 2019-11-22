const MbStoreDetail = function (state = {}, action) {


    
    switch (action.type) {
        case "LOAD_ITEMDETAIL_SUCCESS":
            return action.productDetail
        default:
            return state
        


    }
}

export default MbStoreDetail