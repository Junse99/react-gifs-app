import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GifGrid';

const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Fantasia'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr />

      <ol>
        {
          categories.map(category => 
            <GiftGrid key={ category } category={ category }/>
          )
        }
      </ol>
    </>
  )
}

export default GiftExpertApp