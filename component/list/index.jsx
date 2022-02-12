import './style.css'
import Card from "../card"

/* LISTA DOS CARDS DENTRO DAS TRANSAÇÕES */
const List = ({listTransactions, callbackRemove }) => {
   

    return (
        <div className='listCard'>
         {
        listTransactions.map((transation, index) => 
        <li key={index}>
        <Card   
        callbackRemove = {callbackRemove}
        description={transation.description}
        type={transation.type}
         value={transation.value}
        /> 
        </li>)
        }
        </div>
    
    )

}

export default List
