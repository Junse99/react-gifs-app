import GiftGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


const GiftGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs( category )

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

      { loading && <p className='animate__animated animate__flash'>Cargando</p>}

      <div className='card-grid animate__animated animate__fadeIn'>
        {
          images.map( ( img ) => 
             <GiftGridItem 
              key={ img.id }
              { ...img }
             />
          )
        }
      </div>
    </>
  )
}

export default GiftGrid
