
//Dialog component to show recipe on mobile

import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import parse from 'html-react-parser'
import Slide from '@material-ui/core/Slide';
import './Dialog.css'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Recipe_Dialog({open,setopen,data}) {
    return (
        <div>
            <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setopen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={{margin:"10px 0 0 10px",padding:0,}}><div className='Dialog_heading'>Recipe</div></DialogTitle>
        <DialogContent style={{marginTop:"-5px"}}>
          <DialogContentText id="alert-dialog-slide-description">
              <div className='Recipe_data'>{parse(data)}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{margin:"0 10px 10px 0"}} onClick={()=>setopen(false)} variant='contained' color='secondary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}
