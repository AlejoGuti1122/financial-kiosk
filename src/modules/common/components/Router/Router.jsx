import { Routes, Route, BrowserRouter } from "react-router-dom"
import NoMatch from "../NoMatch/NoMatch.jsx"
import HomePage from "../../../../pages/home.jsx"
import RegisterFormPage from "../../../../pages/register-form.jsx"
import TerminosCondiciones from "../../../../pages/terminos-condiciones.jsx"
import Treatment from "../../../../pages/treatment.jsx"
import Loader from "../../../../pages/loader.jsx"
import Credit from "../../../../pages/credit.jsx"
import Filters from "../../../../pages/filters.jsx"
import Redirection from "../../../../pages/redirection.jsx"
import Confirmation from "../../../../pages/confirmation.jsx"
import General from "../../../../pages/general.jsx"
import FiltersRm from "../../../../pages/filters-rm.jsx"
import RedirectionHome from "../../../../pages/redirection-home.jsx"
import ConfirmationGeneral from "../../../../pages/confirmation-general.jsx"

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
          path="/credit"
          element={<Credit />}
        />
        <Route
          path="/filters"
          element={<Filters />}
        />
        <Route
          path="/redirection"
          element={<Redirection />}
        />
        <Route
          path="/confirmation"
          element={<Confirmation />}
        />
        <Route
          path="/general"
          element={<General />}
        />
        <Route
          path="/rm"
          element={<FiltersRm />}
        />
        <Route
          path="/rhome"
          element={<RedirectionHome />}
        />
        <Route
          path="/hc"
          element={<ConfirmationGeneral />}
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
