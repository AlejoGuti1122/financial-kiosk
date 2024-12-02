import icon from "../.././../../assets/successful/icon.png"

const SuccessfulView = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-64 p-2">
      <div className="flex flex-col  items-center">
        <img
          src={icon}
          alt=""
        />
        <div>
          <h1 className="text-[#333333] text-2xl font-bold mt-4 text-center">
            Solicitud no exitosa
          </h1>
          <p className="text-center text-[#333333] text-base mt-4">
            Nuestro participante financiero no aprobó su solicitud de
            financiación.
          </p>
        </div>
        <div className="w-[395px] mt-[270px]">
            <button className="w-full h-14 bg-[#000000] rounded-md text-white">
                Entendido
            </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessfulView
