import React from "react"

const Ejemplo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-col flex items-center justify-center  w-[379px] mt-16">
        <h1 className="text-[#0072CE] font-bold text-2xl font-Lato">
          ¡Bienvenido!
        </h1>
        <p className="text-[#333333] mt-7 text-sm font-normal">
          Sabemos que te encuentras en una de <br />
          <span className="ml-[65px]">nuestras tiendas.</span>
        </p>
        <p className="text-[#0072CE] mt-80 text-center px-4 w-[440px] font-semibold">
          Facilitamos en un solo espacio financiación a la medida <br />
          para hacer realidad proyectos de hogar y construcción.
        </p>
        <p className="mt-10 text-center">
          Continua para consultar la oferta que <br />
          <span className="">
            nuestros participantes financieros tienen <br />
            para ti.
          </span>
        </p>
        <button className="w-[400px] h-[54px] bg-[#0072CE] text-[#FFFFFF] mt-36 rounded-[4px]">
          Continuar
        </button>
      </div>
    </div>
  )
}

export default Ejemplo
