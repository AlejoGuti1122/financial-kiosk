import React, { useState } from "react"

const FormRegister = () => {
  const [clickedInputs, setClickedInputs] = useState({
    firstName: false,
    secondName: false,
    firstSurname: false,
    secondSurname: false,
    documentType: false,
    documentNumber: false,
    phoneNumber: false,
    email: false,
    selectClicked: false,
  })
  const [isChecked, setIsChecked] = useState(false)
  const [formValues, setFormValues] = useState({
    firstName: "",
    secondName: "",
    firstSurname: "",
    secondSurname: "",
    documentType: "",
    documentNumber: "",
    phoneNumber: "",
    email: "",
  })

  const handleButtonClick = () => {
    setIsChecked((prev) => !prev)
  }

  const handleInputClick = (inputName) => {
    setClickedInputs((prevState) => ({
      ...prevState,
      [inputName]: true,
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-[398px] h-auto p-4">
        <form className="space-y-4">
          {/* Primer Nombre y Segundo Nombre */}
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-sm font-bold">Primer Nombre</label>
              <div className="relative">
                <input
                  type="text"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.firstName
                      ? "border-[#008A00] border-2"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Primer Nombre"
                  onClick={() => handleInputClick("firstName")}
                />
                {clickedInputs.firstName && (
                  <span className="absolute right-2 top-2  text-[#008A00] mt-3">
                    ✔
                  </span>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-bold">Segundo Nombre</label>
              <div className="relative">
                <input
                  type="text"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.secondName
                      ? "border-[#008A00] border-2"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Segundo Nombre"
                  onClick={() => handleInputClick("secondName")}
                />
                {clickedInputs.secondName && (
                  <span className="absolute right-2 top-2 text-[#008A00] mt-3">
                    ✔
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Primer Apellido y Segundo Apellido */}
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-sm font-bold">Primer Apellido</label>
              <div className="relative">
                <input
                  type="text"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.firstSurname
                      ? "border-[#008A00] border-2"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Primer Apellido"
                  onClick={() => handleInputClick("firstSurname")}
                />
                {clickedInputs.firstSurname && (
                  <span className="absolute right-2 top-2 text-[#008A00] mt-3">
                    ✔
                  </span>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-bold">
                Segundo Apellido
              </label>
              <div className="relative">
                <input
                  type="text"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.secondSurname
                      ? "border-[#008A00] border-2"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Segundo Apellido"
                  onClick={() => handleInputClick("secondSurname")}
                />
                {clickedInputs.secondSurname && (
                  <span className="absolute right-2 top-2 text-[#008A00] mt-3">
                    ✔
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Tipo de Documento */}
          <div>
            <label className="block text-sm font-bold">Tipo de documento</label>
            <div className="relative">
              <input
                type="text"
                className={`w-full h-[54px] border ${
                  clickedInputs.documentType
                    ? "border-[#008A00] border-2"
                    : "border-gray-300"
                } p-2 rounded-md mt-2`}
                placeholder="Tipo de documento"
                onClick={() => handleInputClick("documentType")}
              />
              {clickedInputs.documentType && (
                <span className="absolute right-2 top-2 text-[#008A00] mt-3">
                  ✔
                </span>
              )}
            </div>
          </div>

          {/* Número de Documento */}
          <div>
            <label className="block text-sm font-bold">Nº de documento</label>
            <div className="relative">
              <input
                type="text"
                className={`w-full h-[54px] border ${
                  clickedInputs.documentNumber
                    ? "border-[#008A00] border-2"
                    : "border-gray-300"
                } p-2 rounded-md mt-2`}
                placeholder="Nº de documento"
                onClick={() => handleInputClick("documentNumber")}
              />
              {clickedInputs.documentNumber && (
                <span className="absolute right-2 top-2 text-[#008A00] mt-3">
                  ✔
                </span>
              )}
            </div>
          </div>

          {/* Teléfono con indicador de país */}
          <div>
            <label className="block text-sm font-bold">Teléfono</label>
            <div className="flex items-center">
              <select
                className={`border p-2 rounded-l-md h-[54px] mt-2 w-[100px] ${
                  clickedInputs.selectClicked
                    ? "border-[#008A00] border-2"
                    : "border-gray-300"
                }`}
                onClick={() => handleInputClick("selectClicked")}
              >
                <option value="+57">+57 (Colombia)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+52">+52 (México)</option>
                <option value="+34">+34 (España)</option>
                {/* Agrega más opciones según los países que necesites */}
              </select>
              <div className="relative w-full">
                <input
                  type="tel"
                  className={`w-full h-[54px] border ${
                    clickedInputs.phoneNumber
                      ? "border-[#008A00] border-2"
                      : "border-gray-300"
                  } p-2 rounded-md mt-2`}
                  placeholder="Número de teléfono"
                  onClick={() => handleInputClick("phoneNumber")}
                />
                {clickedInputs.phoneNumber && (
                  <span className="absolute right-2 top-2 text-[#008A00] mt-3">
                    ✔
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-bold">Correo</label>
            <div className="relative">
              <input
                type="email"
                className={`w-full border ${
                  clickedInputs.email
                    ? "border-[#008A00] border-2"
                    : "border-gray-300"
                } p-2 rounded-md h-[54px] mt-2`}
                placeholder="Correo"
                onClick={() => handleInputClick("email")}
              />
              {clickedInputs.email && (
                <span className="absolute right-2 top-2 text-[#008A00] mt-3">
                  ✔
                </span>
              )}
            </div>
          </div>

          {/* Botón */}
          <div className="flex flex-row items-center">
            <button
              type="button"
              className={`w-10 h-5 border rounded-md flex items-center justify-center ${
                isChecked ? "bg-[#0072CE]" : "border-[#BFBFBF]"
              }`}
              onClick={handleButtonClick}
            >
              {isChecked && <span className="text-white">✔</span>}
            </button>
            <p
              className={`ml-2 mt-4 text-xs font-normal ${
                isChecked ? "text-black" : "text-[#8C8C8C]"
              }`}
            >
              Acepto{" "}
              <span className={`${isChecked ? "text-blue-500 underline" : ""}`}>
                Términos y Condiciones
              </span>{" "}
              y autorizo el uso, validación y{" "}
              <span className={`${isChecked ? "text-blue-500 underline" : ""}`}>
                Tratamiento de mis datos personales
              </span>{" "}
              a SODIMAC Colombia S.A.
            </p>
          </div>
          <button
            className={`w-full h-[54px] border rounded-md ${
              isChecked
                ? "bg-[#0072CE] text-white"
                : " text-[#8C8C8C] border-[#8C8C8C]"
            }`}
          >
            Consultar
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormRegister
