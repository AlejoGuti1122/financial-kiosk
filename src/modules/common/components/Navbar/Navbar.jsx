import logoHome from "../../../../assets/navbar/logo-home.jpg"
import menu from "../../../../assets/navbar/Menu.jpg"
import search from "../../../../assets/navbar/search.jpg"
import shopping from "../../../../assets/navbar/shopping.jpg"
import user from "../../../../assets/navbar/user.jpg"

import React from "react"

const Navbar = () => {
  return (
    <div className="w-full h-[51px] border-[3px] border-[#666666] flex">
      <img
        className="h-5 mt-4 ml-4"
        src={menu}
        alt=""
        width={20}
      />
      <img
        className="ml-3 h-6 mt-3"
        src={logoHome}
        alt=""
        width={29}
      />
      <div className="ml-auto mr-4 flex gap-1">
        <img className="h-7 mt-2" src={search} alt="" />
        <img className="h-8 mt-2" src={shopping} alt="" />
        <img className="h-7 mt-2" src={user} alt="" />
      </div>
    </div>
  )
}

export default Navbar
