import CardOptions from "../../../common/components/CardOptions/CardOptions"
import CredicreaTwo from "../../../common/components/CredicreaTwo/CredicreaTwo"
import Navbar from "../../../common/components/Navbar/Navbar"
import TextOptions from "../../../common/components/TextOptions/TextOptions"
import YourProjects from "../../../common/components/YourProjects/YourProjects"

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
        <TextOptions />
      </div>
      <div>
        <YourProjects />
      </div>
      <div>
        <CardOptions />
      </div>
    </div>
  )
}

export default Layout
