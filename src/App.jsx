import { BrowserRouter,Routes ,Route, HashRouter } from "react-router-dom"
import Home from './pages/Home.jsx'
import Computlan from './pages/ComputLan.jsx'
import Animal from './pages/Animal.jsx'
import Credit from './pages/Credit.jsx'


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
        </div>
    )

}