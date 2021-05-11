import GiftGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types';


const GifGrid = ({ category }) => {

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
