import { BrowserRouter,Routes ,Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Computlan from './pages/ComputLan.jsx'

export default function App(){
    return(
        <div>
          
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/CodingLan" element={<Computlan />} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}