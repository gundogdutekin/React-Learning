import {useState} from 'react'

function InputExample() {
    const [form, setForm] = useState({name:"",surname:""});
    const OnInputValue=(e)=>{   
        if(e.target.id==="name"){
            setForm({...form,name:e.target.value})
        }else{
            setForm({...form,surname:e.target.value})
        }
    }
  return (
    <div>
          
        <div>
            <label htmlFor="name">İsim :</label>
            <input type="text" id="name" value={form.name} onChange={OnInputValue} placeholder="Lütfen bir değer giriniz"/>
            <div className='display'>{form.name}</div>
        </div>
        <div>
            <label htmlFor="surname">Soyisim :</label>
            <input type="text" id="surname" value={form.surname} onChange={OnInputValue} placeholder="Lütfen bir değer giriniz"/>
            <div className='display'>{form.surname}</div>
        </div>
       
      
    </div>
  )
}

export default InputExample