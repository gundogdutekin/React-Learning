import './App.css';
import User from "./components/User";

function App() {
  return (
    <div >
       <User adress={{title:'Bağcılar/İstanbul',zip:34495}} name={"Tekin"} surname="Gündoğdu" isloggedIn={true} friends={['Ali','Veli','Deli','Ahmet']}/>
     
    </div>
  );
}

export default App;
