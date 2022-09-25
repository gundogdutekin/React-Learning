import { useState ,useEffect } from "react";

function EffectExample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Tekin');
    useEffect(() => { 
     console.log("Component  mounted");
 }, []);
    useEffect(() => { 
        console.log("Counter state mounted");
    }, [count]);
    useEffect(() => { 
        console.log("Name state mounted");
    }, [name]);
  return (
    <div className="container">
         <div>
            <h1>{count}</h1> 
            <div>
                 <button className="btn" onClick={()=>setCount(count+1)}>Increase</button> 
            </div>
            <hr/>
            <h1>{name}</h1> 
            <div>
                 <button className="btn" onClick={()=>setName("Emin Burak")}>Change Name</button> 
            </div>

            
         </div>
    </div>
   
   
  )
}

export default EffectExample