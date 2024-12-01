import send from "../../../../assets/redirectionHome/send.png"
import cap from "../../../../assets/redirection/Capa_1.png"

const Send = () => {
  return (
    <div className="flex justify-center items-center p-7 -mt-28">
      <div className="flex justify-center h-screen items-center flex-col">
        <img
          src={send}
          alt=""
        />

        <h1 className="text-[#333333]">¡Ya casi terminamos!</h1>
        <p className="text-center text-[#333333] mt-8">
          Estás siendo redirigido a la plataforma del participante financiero
          seleccionado.
        </p>
        <div className="w-[350px] h-[48px] bg-[#CFDCF3] mt-10 flex items-center flex-row gap-2">
          <img
            className="ml-2"
            src={cap}
            alt=""
          />
          <p className="text-xs text-[#004175] font-normal ml-2">
            Para continuar por favor, revise en su dispositivo que las <span className="text-[#004175] font-bold">ventanas  emergente</span> 
            se encuentren activas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Send
