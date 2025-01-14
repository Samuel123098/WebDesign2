import { BrowserRouter,Routes ,Route, HashRouter } from "react-router-dom"
import Home from './pages/Home.jsx'
import Computlan from './pages/ComputLan.jsx'

export default function App(){
    return(
        <div>
            <HashRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/CodingLan" element={<Computlan />} />
                </Routes>
            </HashRouter>
        </div>
    )

}