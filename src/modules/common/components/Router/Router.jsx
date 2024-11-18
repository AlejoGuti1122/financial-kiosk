import { Routes, Route, BrowserRouter } from "react-router-dom"
import NoMatch from "../NoMatch/NoMatch.jsx"
import HomePage from "../../../../pages/home.jsx"
import RegisterFormPage from "../../../../pages/register-form.jsx"
import TerminosCondiciones from "../../../../pages/terminos-condiciones.jsx"
import Treatment from "../../../../pages/treatment.jsx"
import Loader from "../../../../pages/loader.jsx"

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/register-form"
          element={<RegisterFormPage />}
        />
        <Route
          path="/terminos-condiciones"
          element={<TerminosCondiciones />}
        />
        <Route
          path="/treatment"
          element={<Treatment />}
        />
        <Route
          path="/loader"
          element={<Loader />}
        />
        <Route
          path="*"
          element={<NoMatch />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default RouterComponent
