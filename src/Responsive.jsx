import React from 'react'
import { useMediaQuery } from 'react-responsive'
import YourComponent from './YourComponent'
import Mobile from './components/Home/Mobile'
import M_Sidebar from './M_Sidebar'


function Responsive() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1324px)'
        })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1924px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1324px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
        
        return <div>
        {isDesktopOrLaptop && <YourComponent />}
        {isBigScreen && <></>}
        {isTabletOrMobile && <M_Sidebar />}
        </div>
}

export default Responsive