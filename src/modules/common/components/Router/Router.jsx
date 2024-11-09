import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import NoMatch from "../NoMatch/NoMatch.jsx"
import HomePage from "../../../../pages/home.jsx"
import RegisterFormPage from "../../../../pages/register-form.jsx"

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
          path="*"
          element={<NoMatch />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default RouterComponent
