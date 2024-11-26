import credi from "../../../../assets/filters/credicrea3.png"
import atras from "../../../../assets/filters/volver.png"
import logoFilter from "../../../../assets/filters/logo-filter.png"

const Credicrea3 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Cuadro amarillo */}
      <div className="w-full h-11 bg-[#FBD600] flex items-center justify-between px-4">
        <img
          className="h-4"
          src={atras}
          alt="Volver"
        />
        <img
          src={credi}
          alt="Credicrea"
          width={120}
        />
      </div>

      <div className="flex flex-row gap-8 items-center w-full h-40 border-[#FBD600] border-2 rounded-b-lg border-t-0 px-4">
        {/* Imagen */}
        <img
          className="w-[70px] h-[84px]"
          src={logoFilter}
          alt="Logo"
        />

        {/* Título */}
        <div className="">
          <p className="text-[#595959] text-sm">Financiación</p>
          <p className="text-xl font-bold text-[#333333]">
            Mi Cupo Especialista
          </p>
          <p className="mt-2 text-[#595959] text-sm font-normal">
            Exclusiva para socios especialistas que le ayuda en el crecimiento
            de su negocio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Credicrea3
