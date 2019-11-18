import {
    LOAD_DETAIL,
    ADD_DATA_FAILURE,
    LIKE_ITEM,
    LIKE_ITEM_SUCCESS,
    LIKE_ITEM_FAILURE,
    BUY_ITEM,
    BUY_ITEM_SUCCESS,
    BUY_ITEM_FAILURE,
    LOAD_TESTIMONIALS,
    ADD_TESTIMONIALS,
    ADD_TESTIMONIALS_SUCCESS,
    ADD_TESTIMONIALS_FAILURE,
    LOAD_ITEMDETAIL_SUCCESS,
    LOAD_ITEMDETAIL_FAILURE
} from "../constants/actionTypes";


const storeDetail = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ITEMDETAIL_SUCCESS':
        return action.MbDetail_Loaded.map((item) => {
            item.sent = true
            return item
            
        })
    }
}

export default storeDetail