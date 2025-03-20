const table_body = document.querySelectorAll("#hero>table")[0];
const sortPercentage = document.getElementById("sortByPercentage");
const sortMktcap = document.getElementById("sortByCap");
const search_btn = document.getElementById("search");
let data;

function create(data) {
    table_body.innerHTML = ``;
    for (let el of data) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td class="row1"><img src=${el.image} alt=${el.name}>${el.name}</td>
                <td class="row2">${el.symbol.toUpperCase()}</td>
                <td class="common-row">$${el.current_price}</td>
                <td class="common-row">$${el.total_volume}</td>
                <td class="common-row negative-change">${el.market_cap_change_percentage_24h}%</td>
                <td class="common-row last-row">Mkt Cap : $${el.market_cap}</td>`;
    }
    table_body.appendChild(tr);
}

async function fetchData() {

    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
}
fetchData();