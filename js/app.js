axios.request({
    url:'http://127.0.0.1:5000/api/candy'
}).then(response =>{
    let candy_var = response['data'];
    let container = document.querySelector('#candy_container');
    for(let i=0; i<candy_var.length; i++){

        container.insertAdjacentHTML(`beforeend`,`

        <article>
        <h3>${candy_var[i]['name']}</h3>
        <img src="${candy_var[i]['image_url']}">
        <h5>${candy_var[i]['description']}</h5>
        </article>
        `)
    }

}).catch(error =>{
    error;
    console.log('something went wrong')
})