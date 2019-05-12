import React from "react";
import { connect } from "react-redux";
import { doSetFilter } from "../actions";

const Filter = ({ onSetFilter }) => {
  return (
    <div>
      Show
      <button type="button" onClick={() => onSetFilter("SHOW_ALL")}>
        All
      </button>
      <button type="button" onClick={() => onSetFilter("SHOW_COMPLETED")}>
        Completed
      </button>
      <button type="button" onClick={() => onSetFilter("SHOW_INCOMPLETED")}>
        Incompleted
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: filterType => dispatch(doSetFilter(filterType))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);
