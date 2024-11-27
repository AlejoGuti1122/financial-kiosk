import credicrea from "../../../../assets/form/credicrea.png"
import informacion from "../../../../assets/form/Información.png"

const Credicrea = () => {
  return (
    <div className="justify-between w-full h-[68px] bg-[#0072CE] rounded-b-lg items-center flex">
      <div>
        {" "}
        <img
          className="ml-5 h-5 w-[150px]"
          src={credicrea}
          alt=""
        />
      </div>
      <div>
        <img
          className="mr-5 w-10 h-5"
          src={informacion}
          alt=""
        />
      </div>
    </div>
  )
}

export default Credicrea
