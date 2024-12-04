import servicios from "../../../../assets/credit/servicios-hogar.png"
import success2 from "../../../../assets/options-credits/success.png"
import select2 from "../../../../assets/credit/select2.png"

const CardForm = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[385px] h-[624px] border border-[#DCE9FF] bg-[#DCE9FF] mt-10 rounded-lg">
        <div className="w-full h-[134px] border-[#FFFFFF] border rounded-lg relative shadow-lg shadow-gray-500/50 bg-[#FFFFFF]">
          {/* Línea azul superior */}
          <div className="h-3 bg-[#0072CE] rounded-t-xl"></div>

          {/* Contenido interno */}
          <div className="mt-4 flex items-center justify-between px-3">
            {/* Imagen */}
            <div>
              <img
                src={servicios}
                alt=""
                className="w-[60px] h-[60px]" // Ajusta el tamaño de la imagen
              />
            </div>
            <div className="flex flex-col justify-center pl-4 -ml-10 mt-2">
              {/* Título */}
              <h1 className="text-sm font-normal text-[#595959] -mt-3">
                Financiación para
              </h1>
              <p className="font-bold text-2xl">Tus Proyectos</p>
              <p className="text-xs w-44 text-[#595959]">
                A largo plazo para la construcción de proyectos de hogar.
              </p>
            </div>
            <div>
              {/* Select */}
              <img
                src={select2}
                alt=""
                width={35}
                height={35}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start flex-row">
          <img
            className="mt-7 ml-4 h-6 w-6"
            src={success2}
            alt=""
          />
          <p className=" mt-7 ml-2 text-[#333333]">
            Financiación a largo plazo
          </p>
        </div>
        <div className="flex items-center justify-start flex-row mt-2">
          <img
            className="ml-4 h-6 w-6 -mt-11"
            src={success2}
            alt=""
          />
          <p className="ml-2 text-[#333333]">
            Tasa de interés vigente al momento de desembolso establecida por
            cada participante financiero
          </p>
        </div>
        <div className="flex items-center justify-start flex-row mt-2">
          <img
            className="ml-4 h-6 w-6"
            src={success2}
            alt=""
          />
          <p className="ml-2 text-[#333333]">Sin cuota de manejo</p>
        </div>
        <div className="flex items-center justify-start flex-row mt-2">
          <img
            className="ml-4 h-6 w-6 -mt-[60px]"
            src={success2}
            alt=""
          />
          <p className="-ml-2 text-[#333333] p-4 -mt-3">
            Montos de desembolso de acuerdo al perfil y capacidad de
            endeudamiento definido por cada participante financiero
          </p>
        </div>
        <div className="flex items-center justify-start flex-row mt-2">
          <img
            className="ml-4 h-6 w-6"
            src={success2}
            alt=""
          />
          <p className="ml-2 text-[#333333]">Proceso 100% digital</p>
        </div>
        <div className="flex items-center justify-start flex-row mt-2">
          <img
            className="ml-4 h-6 w-6"
            src={success2}
            alt=""
          />
          <p className="ml-2 text-[#333333]">Utilización inmediata*</p>
        </div>
        <div>
          <p className="text-[#333333] p-6 text-sm">
            *Sujeta a la aprobación del crédito por parte del participante
            financiero.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-[#FFFFFF] w-[312px] h-12 bg-[#DD0021] rounded-md">Solicitar</button>
        </div>
      </div>
    </div>
  )
}

export default CardForm
