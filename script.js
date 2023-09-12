import { prodCollections } from "./productCollections.js";

$(document).ready(() => {
    function dispProducts(category, min, max) {
        $('#product-list').empty();
        prodCollections.forEach((prod) => {
            if ((category === 'All' || prod.category === category)
                && (!min || prod.price >= min)
                && (!max || prod.price <= max)) {
                const listItem = $('<li class="list-group-item itemLists">').html(`
                    <div class="card cardImg" style="width: 18rem;">
                        <img class="card-img-top rounded-4 imgContent" src="${prod.image}" alt="${prod.name}">
                        <div class="card-body cardBody">
                            <p class="card-text itemName">${prod.name}</p>
                            <p class="card-text itemPrice">Price: &#8377 ${prod.price}</p>
                            <a href="${prod.source}" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                `);
                $('#product-list').append(listItem);
            }
        });
    }

    dispProducts('All', 0, 0);

    $('#btnFilter').click(() => {
        const categry = $('#selCategory').val();
        const minPrice = $('#minPrice').val();
        const maxPrice = $('#maxPrice').val();
        dispProducts(categry, minPrice, maxPrice);
    })
});