import logoCard from "../../../../assets/credit/logoCard.png"
import icon2 from "../../../../assets/options-credits/icon2.png"
import successful from "../../../../assets/options-credits/success.png"

const CardOptions = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[365px] h-[627px] mt-12">
        {/* Fondo de color */}
        <div className="absolute inset-0 bg-[#F5F5F5] z-0 h-[750px]"></div>

        {/* Contenido */}
        <div className="w-[365px] h-[750px] border-[8px] border-[#FBD600] p-5 relative z-10 rounded-lg">
          <p className="text-start text-[#333333]">
            Además, si lo que busca es financiar proyectos de construcción y
            obra gruesa puede acceder a la financiación exclusiva para nuestros
            Socios del Círculo de Especialistas{" "}
            <strong>¡Solo debe registrarse!</strong>
          </p>
          <div className="bg-[#FCF5CB] h-[320px] absolute top-0 left-0 ml-4 z-20 rounded-md mt-[285px] w-[315px] flex flex-col">
            <div className="flex flex-row justify-start ml-3 items-center">
              <img
                className="h-5 w-5 mt-10"
                src={successful}
                alt=""
              />
              <p className="mt-10 ml-2 text-sm text-[#333333]">
                Financiación a corto plazo (hasta 60 días)
              </p>
            </div>
            <div className="flex flex-row justify-start ml-3 items-center">
              <img
                className="h-5 w-5 mt-3"
                src={successful}
                alt=""
              />
              <p className="ml-2 text-sm text-[#333333] mt-3">Sin intereses</p>
            </div>
            <div className="flex flex-row justify-start ml-3 items-center">
              <img
                className="h-5 w-5 mt-3"
                src={successful}
                alt=""
              />
              <p className="mt-3 ml-2 text-sm text-[#333333]">
                Sin cuota de manejo
              </p>
            </div>
            <div className="flex flex-row justify-start ml-3 items-center">
              <img
                className="h-5 w-5 mt-3"
                src={successful}
                alt=""
              />
              <p className="ml-2 text-sm text-[#333333] mt-3">
                Uso exclusivo para socios del programa CES
              </p>
            </div>
            <div className="flex flex-row justify-start ml-3 items-center">
              <img
                className="h-5 w-5 mt-3"
                src={successful}
                alt=""
              />
              <p className="ml-2 text-sm text-[#333333] mt-3">
                Proceso 100% digital
              </p>
            </div>
            <div className="flex flex-row justify-start ml-3 items-center">
              <img
                className="h-5 w-5 mt-3"
                src={successful}
                alt=""
              />
              <p className="ml-2 text-sm text-[#333333] mt-3">
                Utilización inmediata*
              </p>
            </div>
            <div>
              <p className="text-xs text-[#333333] p-4">
                *Sujeta a la aprobación del crédito por parte del participante
                financiero.
              </p>
            </div>
            <div className="mt-7">
              <p className="text-xs ml- w-96 mt-9">
                *El proceso de registro puede durar hasta 1 día en validarse.
              </p>
            </div>
            <div className="">
              <button className="text-[#FBD600] bg-[#000000] w-[315px] h-[55px] rounded-md mt-4">
                Registrarme en el Circulo de Especialistas
              </button>
            </div>
          </div>
          <div className="card w-[315px] h-[134px] border-[#FFFFFF] border rounded-lg relative shadow-lg shadow-gray-500/50 mt-4 -ml-1 z-20">
            {/* Línea amarilla superior */}
            <div className="h-3 bg-[#FBD600] rounded-t-xl"></div>

            {/* Contenido interno */}
            <div className="mt-4 flex items-center justify-between px-3 z-10">
              {/* Imagen */}
              <div>
                <img
                  src={logoCard}
                  alt=""
                  className="w-[50px] h-[60px]" // Ajusta el tamaño de la imagen
                />
              </div>
              <div className="flex flex-col justify-center pl-4 -ml-4">
                {/* Título */}
                <h1 className="text-xs font-normal text-[#595959] -mt-3">
                  Financiación
                </h1>
                <p className="font-bold text-base">Mi Cupo Especialista</p>
                <p className="text-xs w-44 text-[#595959]">
                  Exclusiva para socios especialistas que le ayuda en el
                  crecimiento de su negocio.
                </p>
              </div>
              <div>
                {/* Select */}
                <img
                  src={icon2}
                  alt=""
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card::after {
          content: "";
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-top: 20px solid #ffffff;
        }
      `}</style>
    </div>
  )
}

export default CardOptions
