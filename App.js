import './App.css';
import{useState} from 'react'
import Form from './component/form';
import List from './component/list';
import TotalMoney from './component/totalmoney';
import InputBtn from './component/buttoninput';
import OutBtn from './component/buttoninput/outputbtn';
import Allbtn from './component/allbtn';
import logo from "../src/imgs/nukenzie.jpg"

function App() {

  const [ArrayBase, setArrayBase] = useState ([ { description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }])

  const [listTransactions, setListTransactions ] = useState([
  { description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }
  ])

   function teste (item){
  const removerItem = ArrayBase.filter(e => e.description !== item)
    setListTransactions(removerItem)
    setArrayBase(removerItem)
  }
  
  const allFilter = () => { 
   const todos = ArrayBase.filter(i => i !== null)
   setListTransactions(todos)
  }
  const outputFilter = () => {
  const output = ArrayBase.filter(i => i.type === 'saída')
  setListTransactions(output)
  }
  const inputFilter = () => {
  const input = ArrayBase.filter(i => i.type === 'entrada')
  setListTransactions(input)
  }
 
  return (
    <div>  
      <div className='header'>
        <img src={logo} alt='logo'></img>
        <button className='grayBtn'>Start</button>
    </div>
         <div className='body'>
            <div>   
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions} base={ArrayBase} setBase={setArrayBase}/> 
              <TotalMoney listTransactions={listTransactions}/>
            </div>
            <div> 
                <div className='Resumo'>
                  <div className='title'>Financial Summary</div>
                  <div className='btns' >

                    <Allbtn allFilter={allFilter} />

                    <InputBtn inputFilter={inputFilter} />

                    <OutBtn outfilter={outputFilter}   />
                   
                  </div>
                </div>
            <List callbackRemove={teste} listTransactions={listTransactions}  />
            </div>
          </div> 
    </div> 
  );       
} 

export default App;


