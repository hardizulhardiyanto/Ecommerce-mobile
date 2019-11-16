import { connect } from "react-redux";
import MobileItem from "../components/MobileItem";
import { loadDetail } from "../actions/detail";

const mapDispatchToProps = dispatch => ({
  showDetail: itemId => dispatch(loadDetail(itemId))
});

export default connect(
  null,
  mapDispatchToProps
)(MobileItem);
