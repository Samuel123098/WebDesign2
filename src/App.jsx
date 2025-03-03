import { BrowserRouter,Routes ,Route, HashRouter } from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Computlan from './pages/ComputLan/ComputLan.jsx'
import Animal from './pages/Animal/Animal.jsx'
import Credit from './pages/Credit/Credit.jsx'
import { Gettheme } from './components/ThemeChanger.jsx'

export default function App(){
    return(
        <div>
       
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/CodingLan" element={<Computlan />} />
                    <Route path="/Animal" element={<Animal />} />
                    <Route path="/Credit" element={<Credit />} />
                </Routes>
            </BrowserRouter>
            {Gettheme()}
        </div>
    )

}