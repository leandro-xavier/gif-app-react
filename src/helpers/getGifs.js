export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PANiSKCdIPU6S5kqAHu52Oto7t5SVAfn&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
return gifs;
}