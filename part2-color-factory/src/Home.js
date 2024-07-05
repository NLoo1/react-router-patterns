import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import './Home.css'
import { ColorPicker } from "./routesList";


function Home() {
  const location = useLocation();
  return (
    <div>
        {location.pathname === '/colors' &&
            <h1 classname="choose-color">Choose a color</h1>}
      <Routes>
        <Route exact path='/colors/:color' element={<ColorPicker />} />
        <Route path="*" element={<Navigate to="/colors" />} /> 
      </Routes>

    {location.pathname == '/colors' && 
    <div>
    <ul className="colors">
        <li><Link to='/colors/blue' >Blue</Link></li>
        <li><Link to='/colors/red' >Red</Link></li>
        <li><Link to='/colors/green' >Green</Link></li>
    </ul>

    <Link to='/colors/new'><button>Add a new color</button></Link>
    </div>
    }

    </div>
  );
}

export default Home