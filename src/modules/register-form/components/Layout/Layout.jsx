import React from "react"
import Credicrea from "../../../common/components/Credicrea/Credicrea"
import Navbar from "../../../common/components/Navbar/Navbar"
import TextRegister from "../../../common/components/Text-register/TextRegister"
import FormRegister from "../../../common/components/FormRegister/FormRegister"

const Layout = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <Navbar />
        <div>
          <Credicrea />
        </div>
        <div>
          <TextRegister />
        </div>
        <div>
          <FormRegister />
        </div>
      </div>
    </div>
  )
}

export default Layout
