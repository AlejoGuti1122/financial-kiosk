import logoCard from "../../../../assets/credit/logoCard.png"
import select from "../../../../assets/credit/select.png"

const SpecialQuota = () => {
  return (
    <div className="flex mt-6 ml-8">
      <div className="w-[365px] h-[134px] border-[#FFFFFF] border rounded-lg relative shadow-lg shadow-gray-500/50">
        {/* Línea amarilla superior */}
        <div className="h-3 bg-[#FBD600] rounded-t-xl"></div>

        {/* Contenido interno */}
        <div className="mt-4 flex items-center justify-between px-3">
          {/* Imagen */}
          <div>
            <img
              src={logoCard}
              alt=""
              className="w-[64px] h-[78px]" // Ajusta el tamaño de la imagen
            />
          </div>
          <div className="flex flex-col justify-center pl-4 -ml-4">
            {/* Título */}
            <h1 className="text-sm font-normal text-[#595959] -mt-3">
              Financiación
            </h1>
            <p className="font-bold text-2xl">Mi Cupo Especialista</p>
            <p className="text-xs w-44 text-[#595959]">
              Exclusiva para socios especialistas que le ayuda en el crecimiento
              de su negocio.
            </p>
          </div>
          <div>
            {/* Select */}
            <img
              src={select}
              alt=""
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialQuota