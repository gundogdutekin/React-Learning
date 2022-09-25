import { useState  } from "react";

function Counter() {
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

  return (
    
    <div>
      <h3 className={color}>{title}</h3>
      <h1>{count}</h1>
    <button className="btn" onClick={decrease}>Decrease</button>
    <button className="btn" onClick={increase}>Increase</button>
    
    </div>
  )
}

export default Counter
