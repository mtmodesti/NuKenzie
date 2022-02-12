import './style.css'
import { useState } from "react"



const Form = ({listTransactions, setListTransactions, base, setBase }) => {


    const [value, setValue]     = useState('')
    const [desc,   setDesc]     = useState('')
    const [type,   setType]     = useState('') 

    const setTransaction = () =>{        
        if (type === 'entrada'){
           setBase([...base, {description: desc, type: type, value: Number(value.toFixed(0)) }])
            return  setListTransactions([...listTransactions, {description: desc, type: type, value: Number(value.toFixed(0)) }] )
              
        } else {
            setBase([...base, {description: desc, type: type, value: -(Number(value).toFixed(0)) }])
            
            return setListTransactions([...listTransactions, {description: desc, type: type, value: -(Number(value).toFixed(0)) }])
             
        }
    }

    return (
        <div className="form">
             <form >
        <label className='desc' >Description</label>
        <input 
        className="descriptionInput" placeholder="Your description"
        type='text' value={desc} onChange={(e) => setDesc(e.target.value)}>
        </input> 
        
        <label className='desc' >Value</label>
        <input 
        className='descriptionInput'
        value={value} type='number' placeholder="Your value"
        onChange={(e) =>setValue(Number(e.target.value))}
        >
        </input>

        <label>Type</label>
         <select  
         onChange={(e) => {
            
            setType(e.target.value)
            

         } }
         >
             <option>Chose one</option>
             <option value="saída" >Saida</option>
             <option value="entrada"  >Entrada</option>             
         </select>

        <button className='sendValue' type="button" 
        onClick={() =>{ 
            if( desc !== "" && (type === "saída" || type === "entrada") && value !== "" ){
                
                setListTransactions(setTransaction);
                
            } else {
                alert('Preencha todos campos')
            }
        }
        }
        >Send Transation</button>
      </form>   
    </div>
    )
}

export default Form
