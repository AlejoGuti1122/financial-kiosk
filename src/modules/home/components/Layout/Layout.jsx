import React from "react"
import Navbar from "../../../common/components/Navbar/Navbar.jsx"
import Landing from "../Landing/Landing.jsx"

const LayoutComponent = () => {
  return (
    <div className="flex justify-center flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Landing />
      </div>
    </div>
  )
}

export default LayoutComponent
