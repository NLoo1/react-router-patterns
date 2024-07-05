import { useParams, Link, Button } from "react-router-dom";

export function ColorPicker() {
    const params = useParams()
    return <div className="color" style={{backgroundColor: params.color}}>
        <h1>You picked: {params.color}</h1>
      <Link to="/colors" ><button>Back</button></Link>
    </div>
}
