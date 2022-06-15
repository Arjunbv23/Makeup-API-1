/*
MAKEUP API: Problem statement.

//Implement the Makeup API using async/await with fetch.

All your HTML elements should be created with DOM.
Use the async/await.
Use try-catch to handle errors.
Use fetch() to get the data from Makeup API
All JavaScript codes should be in a script file named script.js which has to be imported in your HTML page.
The project should contain either a search filter(which should highlight the text) or pagination(shouldn't use any library)

//API data : Requirements

Display the brand and the name of the product.
Display the price of the product.
Also display the image and product link.
Display the description of the product.

*/

//  Using CRUD operation - for fetching the data through getData() function.
async function getData() {
    let products;
    try {
        const data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json",
            {
                method: "GET",
                // headers: {
                //     "Content-Type": "application/json",
                // }, (Displayed Error)
            }
        );
        products = await data.json();
        console.log(products);
    }
    catch (error) {
        console.log(error); // array elements to be displayed in console.
    }
    return products;
}

getData();

// write a functionality to diaplay the data of the products.

async function displayData() {

    let data = await getData();
    //console.log(data);
    const productList = document.querySelector(".product_list");
    productList.innerHTML = "";

    data.forEach(item => {
        productList.innerHTML += `
        <div class="product-container">
        <h3>${item.brand}</h3>
        <h4>${item.name}</h4>
        <span>${item.price_sign} <b>${item.price}</b></span>
        <br>
        <img class="product-image" src="${item.image_link}" alt="${item.name}">
        <br>
        <span><a href="${item.product_link}" target="_blank">Product link</a></span>
        <br>
        <span><p><b>${item.description}</b><p/></span>
        </div>
        <hr>
        `
    });
}

displayData()


