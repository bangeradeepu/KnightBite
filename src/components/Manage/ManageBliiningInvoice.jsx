import React from 'react'
import './ManageBliiningInvoice.css'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
const ManageBliiningInvoice = () => {
      //   Open Pay now
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='ManageBliiningInvoice r-f-12'>
        <div className="MBI-desktop r-f-12">
            <div className="MBI-layer">
            <div>
              <div className="r-f-18 f-w-600">Billing / Invoices</div>
              <div className='r-f-10 txt-dark-grey'>Note: You have 2 bills nearing due date, pay soon to avoid interruptions.</div>
            </div>
            <table className="MBI-borderless-table mt-4">
                <tr className='f-w-700'>
                    <th>Date</th>
                    <th>Invoice#</th>
                    <th>Amount</th>
                    <th>Details</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td>28/01/2021</td>
                    <td>MIZ-45234</td>
                    <td>500 (incl .Tax)</td>
                    <td>
                        <div>2 Outlets (5 brands)</div>
                        <div>Month: January 2023</div>
                    </td>
                    <td>
                        <div className='txt-red f-w-700'>Renew</div>
                        <div>Due in 3 days</div>
                    </td>
                    <td>
                        <div className="MBI-order-history-btn c-pointer" onClick={handleClickOpen}>Pay Now</div>
                    </td>
                </tr>
                {Array.from({ length: 5 }, (_, index) => (
                <tr>
                    <td>28/01/2021</td>
                    <td>MIZ-45234</td>
                    <td>500 (incl .Tax)</td>
                    <td>
                        <div>2 Outlets (5 brands)</div>
                        <div>Month: January 2023</div>
                    </td>
                    <td>
                        <div className='txt-green f-w-700'>Paid</div>
                    </td>
                    <td>
                        <div className="txt-orange-1 f-w-700 c-pointer">Invoice Copy</div>
                    </td>
                </tr>
                ))}
            </table>
            </div>
        </div>
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className='d-flex space-evenly'>
            <div className='d-flex g-10 align-item-center'>
                <div>Select Plan</div>
                <div>
                    <select name="" id="" className='MBI-plan-dd'>
                        <option value="">Monhtly</option>
                        <option value="">Annual</option>
                    </select>
                </div>
            </div>
          </div>
          <div className='d-flex space-evenly mt-1'>
          <div>
                <ul>
                    <li>Upcoming Billing Period: March 2023</li>
                    <li>2 Outlets (5 Brands), 2 Add-Ons</li>
                    <li className='MBI-underline-text c-pointer'>Click here for details</li>
                </ul>
            </div>
          </div>
          <div className="d-flex space-evenly mt-3">
                    <div>Amount: Rs. 500 (incl. of GST)</div>
          </div>
          <div className="d-flex space-evenly mt-4">
            <div className='MBI-order-history-btn c-pointer'>Pay Now</div>
          </div>
        </DialogContent>


    
      </Dialog>
      <div className="MBI-mobile r-f-12">
      <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Billing / Invoices</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
          <div className="r-f-10 txt-grey">Note: You have 2 bills nearing due date, pay soon to avoid interruptions.</div>
          <div className="MBI-mobile-card mt-2">
            <div className="d-flex">
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Date</div>
                    <div className='r-f-10'>28/10/2023</div>
                </div>
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Invoice#</div>
                    <div className='r-f-10'>MIZ-45234</div>
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Amount</div>
                    <div className='r-f-10'>500 (incl .Tax)</div>
                </div>
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Details</div>
                    <div className='r-f-10'>
                        <div>2 Outlets (5 brands)</div>
                        <div>Month: January 2023</div>
                    </div>
                </div>
            </div>
            <div className="d-flex mt-2 align-item-center">
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Status</div>
                    <div className='r-f-10'>
                        <div className='txt-red f-w-700'>Renew</div>
                        <div>Due in 3 days</div>
                    </div>
                </div>
                <div className="flex-1">
                  <button className='MBI-order-history-btn c-pointer' onClick={handleClickOpen}>Pay Now</button>
                </div>
            </div>
          </div>
          {Array.from({ length: 5 }, (_, index) => (
          <div className="MBI-mobile-card mt-2">
            <div className="d-flex">
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Date</div>
                    <div className='r-f-10'>28/10/2023</div>
                </div>
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Invoice#</div>
                    <div className='r-f-10'>MIZ-45234</div>
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Amount</div>
                    <div className='r-f-10'>500 (incl .Tax)</div>
                </div>
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Details</div>
                    <div className='r-f-10'>
                        <div>2 Outlets (5 brands)</div>
                        <div>Month: January 2023</div>
                    </div>
                </div>
            </div>
            <div className="d-flex mt-2 align-item-center">
                <div className="flex-1">
                    <div className='r-f-8 txt-grey'>Status</div>
                    <div className='r-f-10'>
                        <div className='txt-green f-w-700'>Paid</div>
                    </div>
                </div>
                <div className="flex-1">
                  <div className='txt-orange-1 r-f-10'>Invoice Copy</div>
                </div>
            </div>
          </div>
          ))}
          </div>
          </div>
      </div>
    </div>
  )
}

export default ManageBliiningInvoice