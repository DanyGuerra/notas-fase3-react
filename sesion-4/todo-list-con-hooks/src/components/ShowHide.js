import React from "react";
import PropTypes from "prop-types";
import "../css/ShowHide.css";
import { Switch } from "@mui/material";

function ShowHide(props) {
  return (
    <Switch
      // defaultChecked
      onClick={(e) => props.toggleDone(!props.show)}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

ShowHide.propTypes = {
  toggleDone: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ShowHide;
