

const getImagen = async () => {

    try{
        const apiKey = '2dUAZvEQbxj7HK3UfYr8Y1nLQ2NJAYcq';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
    
        img.src = url;
    
        document.body.append(img);

    }catch(error) {
        // manejo del error
        console.error(error)

    }

   
};


getImagen();







// peticion
//  .then(resp => resp.json())
//  .then(({data}) => {
//     const {url} = data.images.original;

//     const img = document.createElement('img');
//  })

// .catch(console.warn);