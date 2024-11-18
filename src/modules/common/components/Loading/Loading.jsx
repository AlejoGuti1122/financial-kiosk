import React from "react"

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen transform -translate-y-32">
      <div className="text-center">
        <p className="text-[#0072CE] font-bold text-lg">¡Muy bien!</p>
        <p className="text-[#0072CE] font-bold text-lg">
          Estamos analizando tus datos,
        </p>
        <p className="text-[#0072CE] mt-6 text-sm font-normal">
          Espera un momento por favor.
        </p>
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-t-[#0072CE] border-gray-300 rounded-full animate-spin mt-10"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
