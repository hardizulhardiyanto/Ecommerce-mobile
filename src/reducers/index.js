import { combineReducers } from "redux";
import data from "./data";
import detailTestimonial from "./detail-testimonial";
import storeDetail from "./storeDetail"

export default combineReducers({
  data,
  detailTestimonial,
  storeDetail
});
