import logoHome from "../../../../assets/navbar/logo-home.jpg"

import React from "react"

const Navbar = () => {
  return (
    <div className="w-full h-[51px] border-[3px] border-[#666666]">
        <img src={logoHome} alt="" />
    </div>
  )
}

export default Navbar
