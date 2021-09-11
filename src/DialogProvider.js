import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";

const DialogContext = React.createContext();
export const useDialog = () => React.useContext(DialogContext);

function DialogContainer(props) {
  const { children, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
}

function Confirmation(props){
  const {title, content, open, onOK, onCancel, onClose} = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
            <Button color="primary" onClick={() => {if(onCancel) onCancel(); onClose()}}>
              Close
            </Button>
            <Button color="primary" onClick={() => {onOK(); onClose()}}>
              OK
            </Button>
      </DialogActions>
    </Dialog>
  )
}

export default function DialogProvider({ children }) {
  const [dialogOption, setDialogOption] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const showConfirmation = (props) => {
    setDialogOption({...props, type: 'CONFIRMATION'});
    setOpen(true);
  }

  const showCustomDialog = (props) => {
    setDialogOption({...props, type: 'CUSTOM'})
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <DialogContext.Provider value={{showConfirmation, showCustomDialog, onClose}}>
      {children}
      {
        open &&  (
          dialogOption.type === 'CONFIRMATION' ? <Confirmation open={open} onClose={onClose} {...dialogOption} /> : <DialogContainer open={open} onClose={onClose} {...dialogOption}></DialogContainer>
        )
      }
    </DialogContext.Provider>
  );
}
