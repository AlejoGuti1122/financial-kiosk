import Navbar from "../../../common/components/Navbar/Navbar"
import CredicreaTwo from "../../../common/components/CredicreaTwo/CredicreaTwo"
import SuccessfulView from "../../../common/components/SuccessfulView/SuccessfulView"

//import Navbar from "../../../common/components/Navbar/Navbar"

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <CredicreaTwo />
      </div>
      <div>
        <SuccessfulView/>
      </div>
    </div>
  )
}

export default Layout
