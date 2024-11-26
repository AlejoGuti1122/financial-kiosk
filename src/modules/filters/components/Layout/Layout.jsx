import AmongFriends from "../../../common/components/AmongFriends/AmongFriends"
import ApplyCredit from "../../../common/components/ApplyCredit/ApplyCredit"
import CeroPay from "../../../common/components/CeroPay/CeroPay"
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
       <Credicrea3/>
      </div>
      <div>
        <TextFilter/>
      </div>
      <div>
        <CeroPay/>
      </div>
      <div>
        <AmongFriends/>
      </div>
      <div>
        <ApplyCredit/>
      </div>
    </div>
  )
}

export default Layout
