import React from "react";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { clearSnackbar } from "../../../actions/alert";
import MySnackbarContentWrapper from "./MySnackbarContentWrapper";

export default function SuccessSnackbar() {
  const { successSnackbarMessage, successSnackbarOpen } = useSelector(
    state => state.alert
  );

  const handleClose = id => async dispatch => {
    clearSnackbar(id);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      variant="success"
      stackable="true"
      open={successSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={<span id="client-snackbar">{successSnackbarMessage}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Icon>close</Icon>
        </IconButton>
      ]}
    >
      <MySnackbarContentWrapper
        className=""
        onClose={handleClose}
        variant="success"
        message={successSnackbarMessage}
      />
    </Snackbar>
  );
}
