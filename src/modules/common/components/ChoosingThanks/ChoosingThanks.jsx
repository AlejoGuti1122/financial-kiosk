import thanks from "../../../../assets/confirmationGeneral/Thanks.png"

const ChoosingThanks = () => {
  return (
    <div className="flex justify-center flex-col h-screen items-center  text-center p-6">
      <img
        src={thanks}
        alt=""
      />
      <h1 className="text-[#333333] text-xl font-bold">
        ¡Gracias por elegirnos!
      </h1>
      <p className="text-[#333333] mt-4 font-normal">
        El proceso con nuestro participante financiero ha finalizado.
      </p>
      <p className="mt-8 font-normal">
        Recuerda que si tienes un cupo aprobado, puedes usarlo como medio de
        pago en nuestras <strong>pantallas digitales</strong> en tiendas, en el
        canal de <strong>Whatsapp</strong> o pregúntale a un{" "}
        <strong>asesor.</strong>
      </p>
      <div className="mt-64">
        <button className="bg-[#0072CE] text-[#FFFFFF] h-[55px] w-96 rounded-md">Finalizar</button>
      </div>
    </div>
  )
}

export default ChoosingThanks
