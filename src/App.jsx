import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Error from "./pages/Error"
import Success from "./pages/Success"
import ProtectedRoutes from "./components/ProtectedRoutes"
import LoginPage from "./components/LoginPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/success" element={ <ProtectedRoutes  element={<Success />}/> } />
          <Route path="/*" element={ <Error /> } />
        </Routes>

      </BrowserRouter>





    </>

  )
}

export default App

