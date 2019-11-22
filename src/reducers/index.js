import { combineReducers } from "redux";
import data from "./data";
import detailTestimonial from "./detail-testimonial";
import MbStoreDetail from "./MbStoreDetail";

export default combineReducers({
  data,
  detailTestimonial,
  MbStoreDetail
});
