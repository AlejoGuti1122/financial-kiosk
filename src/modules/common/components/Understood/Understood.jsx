import React from "react"
import { NavLink } from "react-router-dom"

const Understood = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <NavLink to="/general">
          <button className="w-[400px] h-[54px] mt-64 bg-[#000000] text-white rounded-md">
            Entendido
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Understood
