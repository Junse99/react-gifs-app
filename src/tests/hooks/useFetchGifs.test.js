import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas del hook useFetchGifs()', () => {

  test('debe de retornar el estado inicial', async () => {
    //Se instaló esa libreria para hacer pruebas sobre hooks personalizados
    const { result , waitForNextUpdate} = renderHook( () => useFetchGifs( 'Fantasia' ) )
    const { data, loading } = result.current

    await waitForNextUpdate()
    expect( data ).toEqual([])
    expect( loading ).toBe( true )
  })

  test('debe de retornar un arreglo de imagenes y loading en false', async () => {
    //Con el segundo parametro retorna una promesa que idnica cuando cambia el estado del custo hook, es edcir cuando trae la data del API de loos gifs
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Fantasia' ) )
    await waitForNextUpdate()
    const { data, loading } = result.current

    expect( data.length ).toBe( 10 )
    expect( loading ).toBe( false )

  })
  
  
})
