import send from "../../../../assets/redirection/send.png"
import cap from "../../../../assets/redirection/Capa_1.png"

const RedirectionView = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center -mt-40">
        <img
          className="w-28 h-28"
          src={send}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#333333]">¡Ya casi terminamos!</p>
        <p className="text-center text-[#333333] mt-5">
          Está siendo redirigido a la plataforma del <br />
          participante financiero seleccionado.
        </p>
        <div className="w-[330px] h-[48px] bg-[#CFDCF3] mt-10 flex items-center flex-row gap-2">
          <img
            className="ml-2"
            src={cap}
            alt=""
          />
          <p className="text-xs text-[#004175] font-normal">
            Para continuar por favor, revise en su dispositivo que las <span className="text-[#004175] font-bold">ventanas  emergente</span> 
            se encuentren activas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RedirectionView
