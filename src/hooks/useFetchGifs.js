import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  //Para que el getGifts se ejecute una sola vez al inicio, es necesario el [] al final que son las dependencias
  useEffect(() => {

    getGifs( category )
      .then(imgs => setState({
        data: imgs,
        loading: false
      }))

  }, [ category ])//Si la category cambia, se ejecute otra vez el useEffect */

  return state

}