import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import './Home.css'
import { ColorPicker, NewColorForm } from "./routesList";
import { useState } from "react";

function Home({allColors}) {
  const [colors, setColors] = useState(
    allColors.map(color => ({ ...color}))
  );

  function addColor(newColor) {
    const color = { ...newColor};
    setColors(colors => [...colors, color]);
  }

  const location = useLocation();
  return (
    <div>
      {location.pathname === '/colors' &&
        <h1 className="choose-color">Choose a color</h1>}
      <Routes>
        <Route exact path='/colors/:color' element={<ColorPicker colors={colors} />} />
        <Route exact path='/colors/new' element={<NewColorForm addColor={addColor} />} />
        <Route path="*" element={<Navigate to="/colors" />} /> 
      </Routes>

      {location.pathname === '/colors' && 
        <div>
          <ul className="colors">
            {colors.map((color, index) => (
              <li key={index}><Link to={"/colors/" + color.color}>{color.color}</Link></li>
            ))}
          </ul>
          <Link to='/colors/new'><button>Add a new color</button></Link>
        </div>
      }
    </div>
  );
}

Home.defaultProps = {
  allColors: [
    { color: "Red" },
    { color: "Green" },
    { color: "Blue" },
  ]
};

export default Home;
