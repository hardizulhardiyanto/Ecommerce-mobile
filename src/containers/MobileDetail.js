import { connect } from "react-redux";
import MobileDetail from "../components/MobileDetail";
import { LoadItemDetail, buyItem, likeItem } from "../actions/detail";
// import { loadTestimonials } from "../actions/testimonial";

const mapStateToProps = (state) => ({
  productDetail: state.MbStoreDetail
})

// const mapDispatchToProps = dispatch => ({
//   LoadItemDetail: _id => {
//     dispatch(LoadItemDetail(_id))
//     dispatch(loadTestimonials(_id))
//   },
  
//   buyItem: (_id, stock) => dispatch(buyItem({ _id, stock })),
//   likeItem: (_id, vote) => dispatch(likeItem({ _id, vote }))
// });

const mapDispatchToProps = (dispatch) => ({
  LoadItemDetail: () => {
    dispatch(LoadItemDetail())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileDetail);
