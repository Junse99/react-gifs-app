
export const getGifs = async ( category ) => {
  const apiKey = '0fQjKa8USEXUW3rsU1QJ5Rxv7Pgq3ULT'
  const limit = 10
  
  //encodeURI es para que los espacios de las frases en el link se les ponga _ y en fin, se acomode para añadirlo a una url
  const url = `https://api.giphy.com/v1/gifs/search?limit=${limit}&api_key=${apiKey}&q=${encodeURI(category)}`

  const resp = await fetch( url )
  const { data } = await resp.json()

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs
}