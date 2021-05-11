import React from 'react';
import { shallow } from "enzyme"
import GiftGrid from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')//Esto finge que llama a ese archivo para traer los datos

describe('Pruebas de <GifGrid/>', () => {

  const category = 'Terror'

  test('debe de mostrarse correctamente', () => {
    //Con esto finge que llama el fetchGifs, pero devuelve este objeto literal que se especifica aqui
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GiftGrid category={ category }/>)

    expect( wrapper ).toMatchSnapshot()
  })

  test('debe de mostrar items cuando se cargan imagenes con useFetchGifs()', () => {

    const gifs = [{
      id: 'ABC',
      title: 'Prueba jeje',
      url: 'https://cualquiercosa.com'
    }]
    
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })


    const wrapper = shallow(<GiftGrid category={ category }/>)
    expect( wrapper ).toMatchSnapshot()
    //Verificar que el parrafo de caragando no exista
    expect( wrapper.find('p').exists()).toBe( false )
    //Veriicar si un GifGridItem existe de acuerdo a los gifs del arreglo
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )

  })

  
  
  
})
