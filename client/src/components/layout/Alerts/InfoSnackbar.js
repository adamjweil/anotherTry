import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { clearSnackbar } from "../../../actions/alert";
import MySnackbarContentWrapper from "./MySnackbarContentWrapper";

export default function InfoSnackbar() {
  const dispatch = useDispatch();

  const { infoSnackbarMessage, infoSnackbarOpen } = useSelector(
    state => state.alert
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={infoSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <Icon key="info"></Icon>
          {infoSnackbarMessage}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <i className="close icon">close</i>
        </IconButton>
      ]}
    >
      <MySnackbarContentWrapper
        className=""
        onClose={handleClose}
        variant="warning"
        message={infoSnackbarMessage}
      />
    </Snackbar>
  );
}
