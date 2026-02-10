import { StrictMode } from "react";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Padre Gino's Pizza</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

export default App;
