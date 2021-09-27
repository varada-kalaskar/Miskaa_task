import Country from "./Country";
import "./Country.css";

const FinalPage = () => {
    return ( 
        <div className="finalpage">
            <h1 style={{'margin':'10vh'}}>Asian Countries</h1>
            <Country/>
            <button className="show" onClick={() => window.location.reload(false)}>Show</button>
        </div>
     );
}
 
export default FinalPage;