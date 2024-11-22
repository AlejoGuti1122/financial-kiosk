import credicreatwo from "../../../../assets/credit/credicrea.png"
import informaciontwo from "../../../../assets/credit/Informacion.png"

const CredicreaTwo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-[80px] bg-[#FBD600] rounded-b-lg flex items-center justify-between px-4">
        <img
          src={credicreatwo}
          alt=""
          width={150}
          height={20}
        />
        <img className="mr-1"
          src={informaciontwo}
          alt=""
        />
      </div>
    </div>
  )
}

export default CredicreaTwo
