import React from 'react'
import './HelpCenter.css'
import { Icon } from '@iconify/react';
import { FaBeer } from 'react-icons/fa';
const HelpCenter = () => {
  return (
    <div className='HelpCenter'>
        <div className="HC-desktop">
            <div className='HC-layer'>
                 <div className='f-20'>
                    Help Center
                </div>
                <br />

                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Mail us at
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                        <Icon icon="material-symbols:mail-outline" style={{marginTop:'0.2vw'}}/>&nbsp;<div>info@mizapos.com</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Call us on
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                        <Icon icon="mi:call" />&nbsp;<div>+91 8456712546</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Chat with us
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                        <Icon icon="fluent:chat-24-regular" /><div>Text</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='HC-faqs d-flex justify-content-center r-f-10 txt-grey'>
                  FAQ's and Documentation
                </div>
            </div>
        </div>
        <div className="HC-mobile">
        <div className="p-top-container">
        <div className='mt-1 mb-1 f-w-600'>Help Center</div>
        
      </div>
      <div className='ADD-p-position'>
        <div className="ADD-p-container">
        <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Mail us at
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                        <Icon icon="material-symbols:mail-outline" style={{marginTop:'0.2vw'}}/>&nbsp;<div>info@mizapos.com</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Call us on
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                        <Icon icon="mi:call" />&nbsp;<div>+91 8456712546</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='d-flex'>
                    <div className='flex-1'>
                        <div className='r-f-10 txt-grey'>
                            Chat with us
                        </div>
                        <div className='d-flex align-item-center r-f-12'>
                        <Icon icon="fluent:chat-24-regular" /><div>Text</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='HC-faqs-p d-flex justify-content-center r-f-10 txt-grey'>
                  FAQ's and Documentation
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default HelpCenter