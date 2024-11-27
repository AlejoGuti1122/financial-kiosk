import check from "../../../../assets/confirmation/Vector (1).png"

const Successful = () => {
  return (
    <div className="flex items-center justify-center mt-52">
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-[90px] w-[90px] mb-4"
          src={check}
          alt=""
        />
        <p className="text-[#333333] text-xl font-bold">¡Solicitud exitosa!</p>
        <p className="text-center text-base mt-4 text-[#333333]">
          Socio su financiación ha sido aprobada por el <br />
          participante financiero.
        </p>
        <p className="text-center text-base mt-4 text-[#333333]">
          Use su cupo para comprar en nuestras pantallas <br />
          digitales o a través de un asesor en tienda.
        </p>
      </div>
    </div>
  )
}

export default Successful
