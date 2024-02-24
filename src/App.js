import RatingCard from "./RatingCard";
import "./app.css";
import Thankyou from "./Thankyou";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RatingCard />} />
        <Route path="/thankyou" element={<Thankyou />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
