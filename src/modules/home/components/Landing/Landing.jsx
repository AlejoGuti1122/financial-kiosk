import logoCredicrea from "../../../../assets/navbar/logo-credicrea.jpg"

const Ejemplo = () => {
  return (
    <div className="flex items-center flex-col justify-between h-[94vh]">
      <div>
        <h1 className="text-[#0072CE] font-bold text-2xl font-Lato text-center mt-8">
          ¡Bienvenido!
        </h1>

        <p className="text-[#333333] text-sm font-normal text-center mt-8">
          Sabemos que te encuentras en una de <br />
          <span className="">nuestras tiendas.</span>
        </p>
      </div>
      <div className="">
        <img
          src={logoCredicrea}
          alt=""
          width={300}
        />
        <p className="text-center mt-11">
          Continua para consultar la oferta que <br />
          <span className="">
            nuestros participantes financieros tienen <br />
            para ti.
          </span>
        </p>
      </div>

      <div>
        {" "}
        <button className="w-[400px] h-[54px] bg-[#0072CE] text-[#FFFFFF]  rounded-[4px] mb-5">
          Continuar
        </button>
      </div>
    </div>
  )
}

export default Ejemplo
