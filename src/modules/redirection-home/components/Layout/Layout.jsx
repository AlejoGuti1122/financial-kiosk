import React from 'react'
import Navbar from '../../../common/components/Navbar/Navbar'
import Credicrea from '../../../common/components/Credicrea/Credicrea'
import Send from '../../../common/components/Send/Send'

const Layout = () => {
  return (
    <div>
     <div>
        <Navbar/>
     </div>
     <div>
        <Credicrea/>
     </div>
     <div>
        <Send/>
     </div>
    </div>
  )
}

export default Layout
