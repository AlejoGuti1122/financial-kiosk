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
  const [errors, setErrors] = useState({
    firstName: "",
    secondName: "",
    firstSurname: "",
    secondSurname: "",
    documentNumber: "",
    phoneNumber: "",
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
    validateInput(name, value)
  }

  const validateInput = (name, value) => {
    if (name === "documentNumber" || name === "phoneNumber") {
      const regex = /^[0-9]*$/
      if (!regex.test(value)) {
        setErrors((prevState) => ({
          ...prevState,
          [name]: `Por favor escribe un número ${name === "phoneNumber" ? "de teléfono" : ""} válido.`,
        }))
      } else {
        setErrors((prevState) => ({
          ...prevState,
          [name]: "",
        }))
      }
    } else {
      const regex = /^[a-zA-Z\s]*$/
      if (!regex.test(value)) {
        setErrors((prevState) => ({
          ...prevState,
          [name]: "No debe contener números, ni caracteres especiales",
        }))
      } else {
        setErrors((prevState) => ({
          ...prevState,
          [name]: "",
        }))
      }
    }
  }

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-[398px] h-auto  p-4">
        <form className="space-y-4">
          {/* Primer Nombre y Segundo Nombre */}
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-sm font-bold">Primer Nombre</label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.firstName
                      ? errors.firstName
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Primer Nombre"
                  onClick={() => handleInputClick("firstName")}
                  onChange={handleInputChange}
                />
                {clickedInputs.firstName && errors.firstName && (
                  <span className="absolute right-2 top-2 text-red-500 mt-3">
                    ⚠
                  </span>
                )}
                {clickedInputs.firstName && errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
                {clickedInputs.firstName && !errors.firstName && (
                  <span className="absolute right-2 top-2 text-green-500 mt-3">
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
                  name="secondName"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.secondName
                      ? errors.secondName
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Segundo Nombre"
                  onClick={() => handleInputClick("secondName")}
                  onChange={handleInputChange}
                />
                {clickedInputs.secondName && errors.secondName && (
                  <span className="absolute right-2 top-2 text-red-500 mt-3">
                    ⚠
                  </span>
                )}
                {clickedInputs.secondName && errors.secondName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.secondName}
                  </p>
                )}
                {clickedInputs.secondName && !errors.secondName && (
                  <span className="absolute right-2 top-2 text-green-500 mt-3">
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
                  name="firstSurname"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.firstSurname
                      ? errors.firstSurname
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Primer Apellido"
                  onClick={() => handleInputClick("firstSurname")}
                  onChange={handleInputChange}
                />
                {clickedInputs.firstSurname && errors.firstSurname && (
                  <span className="absolute right-2 top-2 text-red-500 mt-3">
                    ⚠
                  </span>
                )}
                {clickedInputs.firstSurname && errors.firstSurname && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstSurname}
                  </p>
                )}
                {clickedInputs.firstSurname && !errors.firstSurname && (
                  <span className="absolute right-2 top-2 text-green-500 mt-3">
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
                  name="secondSurname"
                  className={`w-[178px] h-[54px] border ${
                    clickedInputs.secondSurname
                      ? errors.secondSurname
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-[#BFBFBF]"
                  } p-2 rounded-md mt-2`}
                  placeholder="Segundo Apellido"
                  onClick={() => handleInputClick("secondSurname")}
                  onChange={handleInputChange}
                />
                {clickedInputs.secondSurname && errors.secondSurname && (
                  <span className="absolute right-2 top-2 text-red-500 mt-3">
                    ⚠
                  </span>
                )}
                {clickedInputs.secondSurname && errors.secondSurname && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.secondSurname}
                  </p>
                )}
                {clickedInputs.secondSurname && !errors.secondSurname && (
                  <span className="absolute right-2 top-2 text-green-500 mt-3">
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
              <select
                name="documentType"
                className={`w-full h-[54px] border bg-[#F5F5F5] ${
                  clickedInputs.documentType ? "" : "border-gray-300"
                } p-2 rounded-md mt-2`}
                onClick={() => handleInputClick("documentType")}
                onChange={handleInputChange}
              >
                <option value="">Seleccione un tipo de documento</option>
                <option value="cedula_ciudadania">Cédula de ciudadanía</option>
                <option value="cedula_extranjera">Cédula extranjera</option>
              </select>
            </div>
          </div>

          {/* Número de Documento */}
          <div>
            <label className="block text-sm font-bold">Nº de documento</label>
            <div className="relative">
              <input
                type="text"
                name="documentNumber"
                className={`w-full h-[54px] border ${
                  clickedInputs.documentNumber
                    ? errors.documentNumber
                      ? "border-red-500"
                      : "border-green-500"
                    : "border-gray-300"
                } p-2 rounded-md mt-2`}
                placeholder="Nº de documento"
                onClick={() => handleInputClick("documentNumber")}
                onChange={handleInputChange}
              />
              {clickedInputs.documentNumber && errors.documentNumber && (
                <span className="absolute right-2 top-2 text-red-500 mt-3">
                  ⚠
                </span>
              )}
              {clickedInputs.documentNumber && errors.documentNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.documentNumber}
                </p>
              )}
              {clickedInputs.documentNumber && !errors.documentNumber && (
                <span className="absolute right-2 top-2 text-green-500 mt-3">
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
                    ? "border-green-500"
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
                  name="phoneNumber"
                  className={`w-full h-[54px] border ${
                    clickedInputs.phoneNumber
                      ? errors.phoneNumber
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-gray-300"
                  } p-2 rounded-md mt-2`}
                  placeholder="Número de teléfono"
                  onClick={() => handleInputClick("phoneNumber")}
                  onChange={handleInputChange}
                />
                {clickedInputs.phoneNumber && errors.phoneNumber && (
                  <span className="absolute right-2 top-2 text-red-500 mt-3">
                    ⚠
                  </span>
                )}
                {clickedInputs.phoneNumber && errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
                {clickedInputs.phoneNumber && !errors.phoneNumber && (
                  <span className="absolute right-2 top-2 text-green-500 mt-3">
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
                name="email"
                className={`w-full border ${
                  clickedInputs.email ? "border-green-500" : "border-gray-300"
                } p-2 rounded-md h-[54px] mt-2`}
                placeholder="Correo"
                onClick={() => handleInputClick("email")}
                onChange={handleInputChange}
              />
              {clickedInputs.email && (
                <span className="absolute right-2 top-2 text-green-500">✔</span>
              )}
            </div>
          </div>

          {/* Botón de aceptación */}
          <div className="flex flex-row items-center">
            <button
              type="button"
              className={`w-10 h-5 border rounded-md flex items-center justify-center ${
                isChecked ? "bg-blue-500" : "border-[#BFBFBF]"
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

          {/* Botón Consultar */}
          <button
            className={`w-full h-[54px] border rounded-md ${
              isChecked ? "bg-blue-500 text-white" : "border-[#BFBFBF]"
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
