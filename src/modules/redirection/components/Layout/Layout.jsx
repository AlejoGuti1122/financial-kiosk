import CredicreaTwo from "../../../common/components/CredicreaTwo/CredicreaTwo"
import Navbar from "../../../common/components/Navbar/Navbar"
import RedirectionView from "../../../common/components/RedirectionView/RedirectionView"


const Layout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <CredicreaTwo/>
      </div>
      <div>
      <RedirectionView/> 
      </div>
    </div>
  )
}

export default Layout
