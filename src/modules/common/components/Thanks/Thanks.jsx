import thanks from "../../../../assets/general/Gracias 1.png"

const Thanks = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen -mt-32">
      <img
        className="w-[100px] h-[100px]"
        src={thanks}
        alt=""
      />
      <div className="flex items-center justify-center flex-col">
        <p className="text-[#333333] text-xl font-bold">
          ¡Gracias por elegirnos!
        </p>
        <p className="text-center text-[#333333] mt-4">
          El proceso con nuestro participante financiero <br />
          ha finalizado.
        </p>
        <p className="text-center text-[#333333] p-8">
          Recuerde que si ya tiene un cupo aprobado,
          puede usarlo como medio de pago en nuestras <strong>pantallas digitales</strong> en
          tiendas, en el canal de <strong>Whatsapp</strong> o preguntar a un <strong>asesor</strong>.
        </p>
      </div>
    </div>
  )
}

export default Thanks