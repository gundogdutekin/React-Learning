import './App.css';
import User from "./components/User";

function App() {
  return (
    <div >
       <User name={"Tekin"} surname="Gündoğdu" isloggedIn={true} friends={['Ali','Veli','Deli','Ahmet']}/>
     
    </div>
  );
}

export default App;
