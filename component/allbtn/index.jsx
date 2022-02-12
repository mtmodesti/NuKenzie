import './style.css'

const Allbtn = ({allFilter}) => {

return (
    <>
        <button className='allbtn'
        onClick={() => {
            allFilter()

        }}
        >All</button>
    </>
)

}

export default Allbtn