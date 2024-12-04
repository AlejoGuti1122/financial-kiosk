import CardBanks from "../../../common/components/CardBanks/CardBanks"
import Credicrea3 from "../../../common/components/Credicrea3/Credicrea3"
import Navbar from "../../../common/components/Navbar/Navbar"
import TextFilter from "../../../common/components/TextFilter/TextFilter"

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Credicrea3 />
      </div>
      <div>
        <TextFilter />
      </div>
      <div>
        <CardBanks/>
      </div>
    </div>
  )
}

export default Layout
