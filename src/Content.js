import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { useDialog } from "./DialogProvider";

export default function Content() {
  const { onClose, showConfirmation, showCustomDialog } = useDialog();

  const onOK = () => {
    console.log('OKed!');
    onClose();
  }

  const onDelete = () => {
    console.log('deleted');
    onClose();
  }

  const onCancel = () => {
    console.log('Canceled');
    onClose();
  }

  const onShowCustomDialog = () => {
    showCustomDialog({
      children: (
        <>
          <DialogTitle>This dialog is opened</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            totam accusamus corporis, aliquid optio accusantium expedita nihil
            illo qui, commodi voluptatibus? Ducimus nesciunt animi, nulla rem at
            obcaecati aperiam eos!
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => onCancel()}>
              Close
            </Button>
            <Button color="primary" onClick={() => onOK()}>
              OK
            </Button>
            <Button color="primary" onClick={() => onDelete()}>
              Delete
            </Button>
          </DialogActions>
        </>
      )
    });
  };

  const onShowConfirmation = () => {
    showConfirmation({ title: "This is title", context: "This is content", onOK: onOK, onCancel: onCancel })
  }

  return (
    <div>
      <Button variant="contained" onClick={onShowConfirmation}>
        Show Confirmation dialog
      </Button>
      <Button variant="contained" onClick={onShowCustomDialog}>
        Show Custom dialog
      </Button>
    </div>
  );
}
