import React from "react"
import Navbar from "../../../common/components/Navbar/Navbar"
import CredicreaTwo from "../../../common/components/CredicreaTwo/CredicreaTwo"
import Thanks from "../../../common/components/Thanks/Thanks"
import ButtonEnd from "../../../common/components/ButtonEnd/ButtonEnd"

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <CredicreaTwo />
      </div>
      <div>
        <Thanks />
      </div>
      <div>
        <ButtonEnd />
      </div>
    </div>
  )
}

export default Layout
