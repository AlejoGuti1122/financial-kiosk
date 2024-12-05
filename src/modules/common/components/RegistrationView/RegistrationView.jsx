import button from "../../../../assets/registration/Bottom Sheet.png"

const RegistrationView = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] h-[939px] relative">
        <img
          className="w-full h-full"
          src={button}
          alt=""
        />
        <div className="flex items-center justify-center border border-blue-600 ">
          <button className="border border-blue-800 bg-[#000000] w-[300px] h-16 -mt-36 rounded-md text-white">
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationView
