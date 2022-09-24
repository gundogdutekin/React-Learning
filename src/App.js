import { useState } from "react";
//import User from "./components/User";
function App() {

  const [name,setName]=useState("Tekin");
  const [age,setAge]=useState(40);

  return (
    <>
    <h1>Merhaba {name}</h1>
    <h1>Yaş {age}</h1>
    <button onClick={()=>setName("Emin Burak")}>Change Name</button>
    <button onClick={()=>setAge(27)}>Change Age</button>
    </>
   /* <div >
       <User adress={{title:'Bağcılar/İstanbul',zip:34495}} name={"Tekin"} surname="Gündoğdu" isloggedIn={true} friends={['Ali','Veli','Deli','Ahmet']}/>
     
    </div>*/

  );
}

export default App;
