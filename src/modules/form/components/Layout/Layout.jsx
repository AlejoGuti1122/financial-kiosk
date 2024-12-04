import CardForm from '../../../common/components/CardForm/CardForm'
import Credicrea from '../../../common/components/Credicrea/Credicrea'
import Navbar from '../../../common/components/Navbar/Navbar'
import TextForm from '../../../common/components/TextForm/TextForm'

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Credicrea/>
      </div>
      <div>
        <TextForm/>
      </div>
      <div>
        <CardForm/>
      </div>
    </div>
  )
}

export default Layout
