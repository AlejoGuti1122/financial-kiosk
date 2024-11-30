import React from 'react'
import Navbar from '../../../common/components/Navbar/Navbar'
import Credicreafilter from '../../../common/components/CredicreaFilter/Credicreafilter'
import TextFilterRm from '../../../common/components/TextFilterRm/TextFilterRm'
import GenericBankCard from '../../../common/components/GenericBankCard/GenericBankCard'

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Credicreafilter/>
      </div>
      <div>
        <TextFilterRm/>
      </div>
      <div>
        <GenericBankCard/>
      </div>
    </div>
  )
}

export default Layout
