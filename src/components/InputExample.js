import {useState} from 'react'

function InputExample() {
    const [form, setForm] = useState({name:"",surname:""});
    const OnInputValue=(e)=>{   
        //kısa yol
        setForm({...form,[e.target.id]:e.target.value});
        //uzun yol
        /*if(e.target.id==="name"){
            setForm({...form,name:e.target.value})
        }else{
            setForm({...form,surname:e.target.value})
        }*/
    }
  return (
    <div>
          
        <div>
            <label htmlFor="name">İsim :</label>
            <input type="text" id="name" value={form.name} onChange={OnInputValue} placeholder="Lütfen bir değer giriniz"/>
        </div>
        <div>
            <label htmlFor="surname">Soyisim :</label>
            <input type="text" id="surname" value={form.surname} onChange={OnInputValue} placeholder="Lütfen bir değer giriniz"/>
        </div>
        <div className='display'>{form.name} {form.surname}</div>
      
    </div>
  )
}

export default InputExample