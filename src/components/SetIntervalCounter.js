import { useState,useEffect  } from "react";

function SetIntervalCounter() {
    const [color, setColor] = useState("blue");
    const [count, setCount] = useState(0);
    const [title,setTitle]=useState("Lütfen counter'u artırınız veya azaltınız");
    const increase=()=>{    
        setCount(count+1); setTitle ('Lütfen counter\'u artırınız veya azaltınız');setColor("blue");      
    }
    const decrease=function(){ 
        if(count<1){
            setTitle ('Counter en az 0 değerini alabilir!');
            setColor("red");
        }else{
            setCount(count-1);
        }
    }
    useEffect(()=>{ 
        
        const interval=setInterval(()=>{
            setCount(c=>c+1);
        },1000);
        console.log("Component mounted");  
        return ()=>clearInterval(interval);
       
    },[]);
    useEffect(()=>{ 
       
        console.log("Count state mounted");  
       
       
    },[count]);
  return (
    
    <div>
      <h3 className={color}>{title}</h3>
      <h1>{count}</h1>
    <button className="btn" onClick={decrease}>Decrease</button>
    <button className="btn" onClick={increase}>Increase</button>
    
    </div>
  )
}

export default SetIntervalCounter