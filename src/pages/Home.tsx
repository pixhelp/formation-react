import { useContext } from "react";
import { CounterContext } from "../contexts/counter-context";

const Home = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Home;
