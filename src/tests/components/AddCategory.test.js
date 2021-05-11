import React from 'react';
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en el componente <AddCategory/>', () => {

  const setCategories = jest.fn()//Jest crea la  funcion para pruebas y saber si fue llamada, cuantas veces fue llamada esa funcion, etc
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> )

  beforeEach(() => {
    //Se llama para que se limpie todo cuando usamos la ismulación
    jest.clearAllMocks()
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> )

  })

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('no debe de postear la información con submit', () => {

    wrapper.find('form').simulate( 'submit', { preventDefault(){} } )
    
    //Comprobar que esa funcion no se haya llamado
    expect( setCategories ).not.toHaveBeenCalled()
  })
  
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Hola mundo'
    //1. Simular el inputCHange
    wrapper.find('input').simulate('change', {target: { value }})
    //2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    
    //3. Comprobar que el setCategories se haya llamado al menos una vez
    expect( setCategories ).toHaveBeenCalled()
    //4. Limpiar la caja de texto
    expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' )
    //5. Comprobar que setCategories se haya ejecutado como una funcion
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )



  })
  
  
  
})
