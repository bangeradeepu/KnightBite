import React from 'react'
import './SubscriptionPlan.css'
const SubscriptionPlan = () => {
  return (
    <div className='SubscriptionPlan'>
        <div className="SP-dekstop">
            <div className='SP-layer'>
            <div className='f-20'>
                    Subscription Plan
                </div>
                <br />
                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Current Plan
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                         <div>No Current Plan</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='d-flex align-item-center g-20'>
                    <div className="d-flex">
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Upgrade
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                         <div>2000/month</div>
                        </div>
                    </div>
                    </div>
                    <div className='SP-upgrade-btn'>
                        <div className='txt-purple r-f-8 f-w-600'>Upgrade Now</div>
                    </div>
                   
                </div>
                <br />
                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Expiring on
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                         <div>None</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='SP-addcred d-flex justify-content-center txt-grey r-f-10'>
                    Add Credit
                </div>
            </div>
        </div>
        <div className="SP-mobile">
        <div className="p-top-container">
        <div className='mt-1 mb-1 f-w-600'>Subscription plan</div>
        
      </div>
      <div className='ADD-p-position'>
        <div className="ADD-p-container">
        <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Current Plan
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                         <div>No Current Plan</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='d-flex align-item-center g-20'>
                    <div className="d-flex">
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Upgrade
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                         <div>2000/month</div>
                        </div>
                    </div>
                    </div>
                    <div className='SP-upgrade-btn-p'>
                        <div className='txt-purple r-f-8 f-w-600'>Upgrade Now</div>
                    </div>
                   
                </div>
                <br />
                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Expiring on
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                         <div>None</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='SP-addcred-p d-flex justify-content-center txt-grey r-f-10'>
                    Add Credit
                </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default SubscriptionPlan