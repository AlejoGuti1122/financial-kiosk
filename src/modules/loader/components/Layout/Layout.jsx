import React from "react"
import Navbar from "../../../common/components/Navbar/Navbar"
import Credicrea from "../../../common/components/Credicrea/Credicrea"
import Loading from "../../../common/components/Loading/Loading"

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Credicrea />
      </div>
      <div>
        <Loading />
      </div>
    </div>
  )
}

export default Layout
