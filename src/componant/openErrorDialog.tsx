import * as React from "react";
import { create } from "zustand";
import Dialog from "@mui/material/Dialog";
import "../App.css"
import {
  Button,
  Container,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import IconButton from "@mui/material/IconButton";
// import CancelIcon from "@mui/icons-material/Cancel";
// import {Button, Container, Grid} from "@mui/material";

type ErrorDialogStore = {
  title: String;
  message: String;
  close: Boolean;
};

const useErrorDialogStore = create<ErrorDialogStore>((set) => ({
  title: "",
  message: "",
  close: false,
}));

export const openErrorDialog = (title: string, message: string) => {
  useErrorDialogStore.setState({
    title: title,
    message: message,
    close: true,
  });
};
export const closeErrorDialog = () => {
  useErrorDialogStore.setState({
    close: false,
  });
};

const ErrorDialog: React.FC = () => {
  const { title, message, close } = useErrorDialogStore();

  const handleClose = () => {
    useErrorDialogStore.setState({
      close: false,
    });
  };

  return (
    <div>
      <Dialog
        open={Boolean(close)}
        onClose={handleClose}
        className="scf-modal"
        fullWidth={true}
        PaperProps={{
          style: { borderRadius: 15 },
        }}
      >
        <IconButton
          color="error"
          className="scf-btn-modal-close"
          onClick={handleClose}
          
        >
          <CancelIcon />
        </IconButton>
        <Container>
          <Grid
            container
            style={{ marginTop: "40px", justifyContent: "center" }}
            direction="row"
          >
            <Grid item className="scf-modal-row">
              <i className="fas fa-circle-xmark scf-status-syb scf-status-syb--failure" />
            </Grid>
          </Grid>
        </Container>
        <DialogTitle className="scf-page-title scf-page-title--failure">
        
          {title}
        </DialogTitle>
        <DialogContent style={{ textAlign: "center" }}>
          <DialogContentText className="scf-page-message">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            variant="contained"
            color="error"
            style={{ fontWeight: "bold" }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ErrorDialog;
