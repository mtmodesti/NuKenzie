import './style.css'



const OutBtn = ({outfilter}) => {


return (
    <>
        <button className='btn'
         onClick={() => {
            
            outfilter()
        }}
        >Outputs</button>

    </>
)

}

export default OutBtn