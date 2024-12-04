import { useState } from "react"

const CardBanks = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleButtonClick = (id) => {
    setSelectedCard((prevSelectedCard) => (prevSelectedCard === id ? null : id))
  }

  const GenericCard = () => {
    const Cardlist = [
      {
        id: 1,
        name: "CeroPay",
        logo: "https://images.contentstack.io/v3/assets/blt2f8082df109cfbfb/blted6cdd60abd212b2/65e8cfbb89f1df72220e7733/Cero-pay.png",
        tittle: "desde: $100.000",
        subtittle: "hasta $7.000.000",
        text: "Hasta 60 días",
      },
      {
        id: 2,
        name: "Amigos",
        logo: "https://images.contentstack.io/v3/assets/blt2f8082df109cfbfb/blta894d3ecf9ff7939/66e05bc27e13e92c6d570fb5/Entre-amigos-logo.png",
        tittle: "desde: $1.000.000",
        subtittle: "hasta $8.000.000",
        text: "Hasta 60 días",
      },
    ]

    const renderCard = Cardlist.map((card) => {
      const isSelected = selectedCard === card.id

      return (
        <div
          key={card.id}
          className={`mb-6 ${isSelected ? "border-[#FBD600]" : ""}`}
        >
          <div
            className={`flex flex-row items-center w-[360px] h-[85px] bg-[#F5F5F5] rounded-lg ${
              isSelected ? "border-2 border-yellow-500" : ""
            }`}
          >
            <img
              className="w-[60px] h-[60px] border-[#0072CE] border rounded-lg ml-3"
              src={card.logo}
              alt={card.name}
            />
            <div className="flex flex-col flex-grow ml-6">
              <h3 className="text-[#333333] font-bold text-xs">
                {card.tittle}
              </h3>
              <h3 className="text-[#333333] font-bold text-xs">
                {card.subtittle}
              </h3>
              <h3 className="text-[#333333] font-bold">{card.text}</h3>
            </div>
            <div className="flex justify-end items-center">
              <button
                className={`relative w-[25px] mr-5 h-[25px] rounded-full ml-24 border-2 transition-all duration-150 ${
                  isSelected
                    ? "border-black after:content-[''] after:absolute after:inset-[3px] after:bg-black after:rounded-full"
                    : "border-[#BFBFBF] bg-[#FFFFFF]"
                }`}
                onClick={() => handleButtonClick(card.id)}
              ></button>
            </div>
          </div>
        </div>
      )
    })

    return <>{renderCard}</>
  }

  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-wrap justify-center mt-6">
        <GenericCard />
      </div>
      <div className="flex justify-center items-center mt-52 border border-[#595959] h-[86px]">
        <button
          className={`w-[370px] h-[55px] rounded-md ${
            selectedCard
              ? "bg-black text-white"
              : "bg-[#F5F5F5] text-[#8C8C8C] border"
          }`}
        >
          Solicitar crédito
        </button>
      </div>
    </div>
  )
}

export default CardBanks
