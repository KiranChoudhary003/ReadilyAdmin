import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import ContentOption from "./components/ContentOption/index "
import SocialLogin from "./components/SocialLogin/index "
import UserManagement from "./components/UserManagement/index "

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/userManagement" element={<UserManagement />} />
          <Route path="/socialLogin" element={<SocialLogin />} />
          <Route path="/contentOption" element={<ContentOption />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
