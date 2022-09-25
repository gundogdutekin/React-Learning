import { useState} from "react";
//import User from "./components/User";
function App() {

  const [name,setName]=useState("Tekin");
  const [age,setAge]=useState(40);
  const oldFriends=["Ali","Veli","Ayşe"];
  const [friends,setFriends]=useState(oldFriends);
  const newFriends=[ "Ahmet","Mehmet","Fatma"];
  const [count,setCount]=useState(0);
  const setFriendsArray=()=>{
    if(count<newFriends.length){
      setFriends([...friends,newFriends[count]])
    }
    setCount(count+1);
  }
  const [adress,setAdress]=useState({title:"İstanbul",zip:34000});
 

  return (
    <>
    <h1>Merhaba {name}</h1>
    <h1>Yaş {age}</h1>
    <button onClick={()=>setName("Emin Burak")}>Change Name</button>
    <button onClick={()=>setAge(27)}>Change Age</button>
    <br/><hr></hr>
    <h1>Friends</h1>
    <ul>
      {friends.map((friend,index)=><li key={index}>{friend}</li>)}
    </ul>
    
    <button onClick={setFriendsArray}>Add Friend</button>
    <br/><hr></hr>
    <h1>Adress</h1>
    <div>{adress.title} {adress.zip}</div>
    <button onClick={()=>setAdress({...adress,title:'Ankara'})}>Change Adress</button>
    </>
   /* <div >
       <User adress={{title:'Bağcılar/İstanbul',zip:34495}} name={"Tekin"} surname="Gündoğdu" isloggedIn={true} friends={['Ali','Veli','Deli','Ahmet']}/>
     
    </div>*/

  );
}

export default App;
