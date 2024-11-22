import servicios from "../../../../assets/credit/servicios-hogar.png"
import select2 from "../../../../assets/credit/select2.png"

const YourProjects = () => {
  return (
    <div className="flex mt-8 ml-8">
      <div className="w-[365px] h-[134px] border-[#FFFFFF] border rounded-lg relative shadow-lg shadow-gray-500/50">
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
          <div className="flex flex-col justify-center pl-4 -ml-16">
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
    </div>
  )
}

export default YourProjects
