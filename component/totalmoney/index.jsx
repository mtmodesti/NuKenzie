import './style.css'
const TotalMoney = ({listTransactions}) => {
    return (
        <div className='divpai'>
            <div className='totalvaluee'>
                <span className='total'>Valor Total: </span>
                <span className='total'>$  {
                listTransactions.reduce((acc, item) => acc + item.value, 0)
                }</span>
            </div>
        </div>
    )
}

export default TotalMoney