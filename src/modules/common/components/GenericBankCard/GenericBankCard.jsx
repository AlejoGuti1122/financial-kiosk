import React, { useState } from "react"

const GenericBankCard = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const bankCardList = [
    {
      id: 1,
      name: "Falabella",
      logo: "https://images.contentstack.io/v3/assets/blt2f8082df109cfbfb/bltd7c7ada9ae62dd95/66bb832d9d2cb04f763c2431/Falabella.png",
      tittle: "Consulta tu cupo",
      subtitle: "pre-aprobado",
    },
    {
      id: 2,
      name: "Vanti",
      logo: "https://images.contentstack.io/v3/assets/blt2f8082df109cfbfb/blt5e50a8f61dc31a2a/66e05d1e1bfb50fcfb250123/Vanti-listo-logo.png",
      tittle: "Consulta tu cupo",
      subtitle: "aprobado",
    },
    {
      id: 3,
      name: "Banco de Bogotá",
      logo: "https://images.contentstack.io/v3/assets/blt2f8082df109cfbfb/blted6cdd60abd212b2/65e8cfbb89f1df72220e7733/Cero-pay.png",
      tittle: "Consulta tu cupo ",
      subtitle: "pre-aprobado   ",
    },
  ]

  const handleButtonClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id)
  }

  const renderBanksCards = bankCardList.map((bankCard) => {
    const isSelected = selectedCard === bankCard.id
    return (
      <div
        key={bankCard.id}
        className={`flex justify-center m-4 ${
          isSelected ? "border-2 border-blue-500 rounded-lg" : ""
        }`} // Añadido margen y borde condicional
      >
        <div className="flex flex-row items-center w-[360px] h-[80px] bg-[#F5F5F5] rounded-lg">
          <img
            className="w-[60px] h-[60px] border-[#0072CE] border rounded-lg ml-3"
            src={bankCard.logo}
            alt={bankCard.name}
          />
          <div>
            <h3 className="ml-6 text-[#333333] font-bold">{bankCard.tittle}</h3>
            <h3 className="ml-6 text-[#333333] font-bold">
              {bankCard.subtitle}
            </h3>
          </div>
          <div>
            <button
              className={`relative w-[25px] h-[25px] rounded-full ml-24 border-2 transition-all duration-150 ${
                isSelected
                  ? "border-blue-500 after:content-[''] after:absolute after:inset-[3px] after:bg-blue-500 after:rounded-full"
                  : "border-[#BFBFBF] bg-[#FFFFFF]"
              }`}
              onClick={() => handleButtonClick(bankCard.id)}
            ></button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-wrap justify-center">{renderBanksCards}</div>
      <div className="flex justify-center items-center mt-32">
        <button
          className={`w-[400px] h-14 rounded-lg ${
            selectedCard
              ? "bg-blue-500 text-white"
              : "bg-[#F5F5F5] text-[#8C8C8C]"
          }`}
        >
          Solicitar crédito
        </button>
      </div>
    </div>
  )
}

export default GenericBankCard
