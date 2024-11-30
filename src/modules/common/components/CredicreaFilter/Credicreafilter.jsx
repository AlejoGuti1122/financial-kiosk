import atras from "../../../../assets/filters-rm/atras.png"
import credifilter from "../../../../assets/filters-rm/credifilter.png"
import servicios from "../../../../assets/filters-rm/servicios-hogar.png"

const CredicreaFilter = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Cuadro amarillo */}
      <div className="w-full h-11 bg-[#0072CE] flex items-center justify-between px-4">
        <img
          className="h-4"
          src={atras}
          alt="Volver"
        />
        <img
          src={credifilter}
          alt="Credicrea"
          width={120}
        />
      </div>

      <div className="flex flex-row gap-8 items-center w-full h-40 border-[#0072CE] border-2 rounded-b-xl border-t-0 px-4">
        {/* Imagen */}
        <img
          className="w-[60px] h-[64px]"
          src={servicios}
          alt="Logo"
        />

        {/* Título */}
        <div className="">
          <p className="text-[#595959] text-sm">Financiación para</p>
          <p className="text-xl font-bold text-[#333333]">Tus Proyectos</p>
          <p className="mt-2 text-[#595959] text-sm font-normal">
            A largo plazo para la construcción de proyectos de hogar.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CredicreaFilter
