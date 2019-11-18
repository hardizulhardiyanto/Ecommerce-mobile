import { connect } from "react-redux";
import MobileItem from "../components/MobileItem";
import { LoadItemDetail } from "../actions/detail";

const mapDispatchToProps = dispatch => ({
  showDetail: _id => dispatch(LoadItemDetail(_id))
});

export default connect(
  null,
  mapDispatchToProps
)(MobileItem);
