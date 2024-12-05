import React from 'react'
import Navbar from '../../../common/components/Navbar/Navbar'
import CredicreaTwo from '../../../common/components/CredicreaTwo/CredicreaTwo'
import Successful from '../../../common/components/Successful/Successful'
import Understood from '../../../common/components/Understood/Understood'

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <CredicreaTwo/>
      </div>
      <div>
        <Successful/>
      </div>
      <div>
        <Understood/>
      </div>
    </div>
  )
}

export default Layout
