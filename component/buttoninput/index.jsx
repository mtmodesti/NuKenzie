import './style.css'

const InputBtn = ({inputFilter}) => {

return (
    <>
        <button className='btn'
        onClick={() => {
            
            inputFilter()
        }}
        >Inputs</button>
    </>
)

}

export default InputBtn