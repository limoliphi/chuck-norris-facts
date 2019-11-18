//la fonction qui suit charge les données de Chuck Norris depuis l'API
//elle fait référence au button

function fetchChuckJSON() {

    //l'adresse de l'API suit

    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .then(function (chuck) {
            console.log('data decoded from JSON:', chuck);
            // On construit le bloc HTML apres avoir la reponse de l'API
            // +  le query selector l'appelle apres avoir defini les objets entre crochets
            const chuckHtml = `
        <p><strong>${chuck.value}</strong></p>
        <img src="${chuck.icon_url}" />
      `;
            document.querySelector('#chuck-norris').innerHTML = chuckHtml;
        });
}

fetchChuckJSON();