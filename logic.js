async function getData() {
    const data = await fetch('./entusiasta.json');
    const main = await data.json();

    return main;
}

loadContent();


async function loadContent() {
    const container = document.querySelector('#item-container');

    var data = await getData();
    console.log(data);

    data.items.map(item => {
        console.log(item);
        var card = createCard(item.img, item.info, item.tipo, item.creado, item.fecha);

        container.innerHTML += card;
    })
}


function createCard(url, info, tipo, creado, fecha) {

    if (tipo == 'General') {
        const card = `<div class="col-8 mt-2"><div class="card">
        <img class="card-img-top" src="${url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${tipo}</h5>
          <p class="card-text">${info}</p>
          <p>${fecha} / ${creado}</p>
        </div>
      </div></div>`;

        return card;
    }
    else {
        const card = `<div class="col-4 mt-2"><div class="card">
        <img class="card-img-top" src="${url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${tipo}</h5>
          <p class="card-text">${info}</p>
          <p>${fecha} / ${creado}</p>
        </div>
      </div></div>`;

        return card;
    }


}
