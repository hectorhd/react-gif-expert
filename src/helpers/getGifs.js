export const getGifs = async(category) =>{
    //Almacenamos los datos a usar
    const key = 'OhiWlo0y6cTgFVRPDFqPz4yNIAkVJoxg';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OhiWlo0y6cTgFVRPDFqPz4yNIAkVJoxg&q=${category}&limit=10`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map(img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }))

    return gifs;
}