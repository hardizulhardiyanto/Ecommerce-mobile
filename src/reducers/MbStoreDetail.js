const MbStoreDetail = function (state = {}, action) {


    
    switch (action.type) {
        case "LOAD_ITEMDETAIL_SUCCESS":
            // return action.productDetail.map((item) => {
            //     item.sent = true;
            //     return item
            // })
            console.log('action produc', action.productDetail );
            
            return action.productDetail
        default:
            return state


    }
}

export default MbStoreDetail