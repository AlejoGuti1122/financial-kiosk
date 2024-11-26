import bancos2 from "../../../../assets/filters/Bancos1.png"
import React, { useState } from "react"

const AmongFriends = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleButtonClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="flex justify-start ml-8 items-center mt-6">
      <div
        className={`flex flex-row items-center w-[365px] h-[95px] bg-[#F5F5F5] rounded-lg transition-colors duration-300 ${
          isClicked ? "border-[#FBD600]" : "border-[#F5F5F5]"
        } border-2`}
      >
        <img
          className="ml-4 h-[70px]"
          src={bancos2}
          alt=""
        />
        <div className="ml-3">
          <p className="text-[#333333] text-[10px]">
            Desde: <span className="font-bold text-sm">$ 100.000</span>
          </p>
          <p className="text-[#333333] text-[10px]">
            Hasta: <span className="font-bold text-sm">$ 7’000.000</span>
          </p>
          <p className="text-sm text-[#333333] mt-2">Hasta 60 días</p>
        </div>
        <div className="flex">
          <button
            className={`relative w-[25px] h-[25px] rounded-full ml-28 border-2 transition-all duration-150 ${
              isClicked
                ? "border-black after:content-[''] after:absolute after:inset-[3px] after:bg-black after:rounded-full"
                : "border-[#BFBFBF] bg-[#FFFFFF]"
            }`}
            onClick={handleButtonClick}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default AmongFriends
