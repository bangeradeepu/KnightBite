import React from 'react'
import './ManageOrderPause.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashCan,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
const ManageOrderPause = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div className='ManageOrderPause'>
        <div className="MOP-desktop r-f-12">
            <div className="MOP-layer">
            <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Order Pause Message</div>
              <div className='r-f-10 txt-dark-grey'>List of message you would like to set as preset, which would be used when any outlet is temporarily paused for taking new orders in between operations.</div>
            </div>
            <div>
                <button className='p-button bg-purple' onClick={handleClickOpen}>New Preset <FontAwesomeIcon icon={faPlus} /></button>
               
     
            </div>
          </div>
          <br />
          <br />
          <table className='MOP-borderless-table'>
            <tr className='f-w-700'>
                <th>SL.No</th>
                <th>Preset</th>
                <th>Delete</th>
            </tr>
            {Array.from({ length: 20 }, (_, index) => (
            <tr>
                <td>{index}</td>
                <td>We have temporarily paused taking new orders due to rain, please try agin after sometime.</td>
                <td><FontAwesomeIcon icon={faTrashCan} className='c-pointer txt-dark-grey' /></td>
            </tr>
            ))}
          </table>
            </div>
        </div>
        <Dialog open={open} onClose={handleClose}  maxWidth="sm" fullWidth>
        <DialogTitle>Add Preset</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Preset"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
        <div className="MOP-mobile r-f-12">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Order Pause Message</div>
          <div>
            <button className="p-button bg-purple"  onClick={handleClickOpen}>New Preset</button>
          </div>
        </div>
        <div className="ADD-p-position" style={{marginTop:'32vh'}}>
            <div className="ADD-p-container">
            <div className="r-f-10 txt-grey">List of message you would like to set as preset, which would be used when any outlet is temporarily paused for taking new orders in between operations.</div>
            <div className='mt-2'>
           {Array.from({ length: 20 }, (_, index) => (
                 <div className='MOP-presetlist-p'>
                    <div className="d-flex align-item-center">
                        <div className="flex-1">
                            <div className='r-f-8 txt-grey'>SL.No</div>
                            <div className='r-f-10'>{index}</div>
                        </div>
                        <div className="flex-end">
                        <div><FontAwesomeIcon icon={faTrashCan} className='c-pointer txt-dark-grey' /></div>
                    </div>
                    </div>
                    <div className="d-flex mt-2 align-item-center">
                    <div className="flex-1">
                        <div className='r-f-8 txt-grey'>Preset</div>
                        <div className='r-f-10'>We have temporarily paused taking new orders due to rain, please try agin after sometime.</div>
                    </div>
                    </div>
                    
                </div>
           ))}
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default ManageOrderPause