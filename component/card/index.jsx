import './style.css'
import trash from './trash.jpg'



const Card = ({description, type, value, callbackRemove}) => {
  
  /* CARD DE CADA TRANSAÇÃO */

    return (
        <div className={type === 'entrada' ? 'Input' : 'Output'} >

        <div className='topdivcard'>
        <div className='leftsidecard'>
            <p className='bolder'> {description}</p>
            <p className='type'>{type}</p>
            
            </div>
            
            <div className='rightsidecard'>
            <p className='price'>R$: {value}</p>
            
            <img 
            onClick={() => callbackRemove(description)}
            id={description}
          
             className='thrash' alt='lixo' src={trash} ></img>
            </div>
        </div>
        </div>
    )
}

export default Card