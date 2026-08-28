let jsData = [];

let currentProducts = [];

let selectedCategory = "all";

let priceFilterActive = false;

let showFiveActive = false;

let currentSort = "";


const apiURL =
    "https://fakestoreapi.com/products";


/* HTML ELEMENTS */

const apicard =
    document.querySelector(".apicard");


const searchInput =
    document.querySelector("#searchInput");


const searchButton =
    document.querySelector("#searchButton");


const lowHigh =
    document.querySelector("#lowHigh");


const highLow =
    document.querySelector("#highLow");


const categoryButtons =
    document.querySelector("#categoryButtons");


const productCount =
    document.querySelector("#productCount");


const showFive =
    document.querySelector("#showFive");


const priceFilter =
    document.querySelector("#priceFilter");


const showAll =
    document.querySelector("#showAll");



/* ==========================================
   FETCH API
   ========================================== */

fetch(apiURL)

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        jsData = data;

        currentProducts =
            [...jsData];


        createCategoryButtons();


        applyFilters();

    })

    .catch(function(_error) {

        apicard.innerText =
            // "Unable to load products.";

        productCount.innerText =
            "Products unavailable.";

    });



/* ==========================================
   DISPLAY PRODUCTS
   ========================================== */

function displayProducts(products) {

    apicard.innerText = "";


    /* PRODUCT COUNT */

    productCount.innerText =
        "Total Products: " +
        products.length;



    /* NO PRODUCTS */

    if (products.length === 0) {

        let message =
            document.createElement("div");


        message.className =
            "no-products";


        message.innerText =
            "No products found.";


        apicard.append(message);


        return;

    }



    /* FOR EACH PRODUCT */

    products.forEach(function(product) {


        /* PRODUCT CARD */

        let card =
            document.createElement("div");


        card.className =
            "product-card";



        /* IMAGE CONTAINER */

        let imageContainer =
            document.createElement("div");


        imageContainer.className =
            "product-image-container";



        /* IMAGE */

        let image =
            document.createElement("img");


        image.className =
            "product-image";


        image.src =
            product.image;


        image.alt =
            product.title;


        imageContainer.append(image);



        /* CONTENT */

        let content =
            document.createElement("div");


        content.className =
            "product-content";



        /* CATEGORY */

        let category =
            document.createElement("div");


        category.className =
            "product-category";


        category.innerText =
            product.category;



        /* TITLE */

        let title =
            document.createElement("div");


        title.className =
            "product-title";


        title.innerText =
            product.title;



        /* DESCRIPTION */

        let description =
            document.createElement("div");


        description.className =
            "product-description";


        description.innerText =
            product.description;



        /* BOTTOM */

        let bottom =
            document.createElement("div");


        bottom.className =
            "product-bottom";



        /* PRICE */

        let price =
            document.createElement("div");


        price.className =
            "product-price";


        price.innerText =
            "$ " + product.price;



        /* VIEW BUTTON */

        let button =
            document.createElement("button");


        button.className =
            "view-button";


        button.innerText =
            "View Product";



        /* BUTTON EVENT */

        button.addEventListener(
            "click",
            function() {

                alert(

                    "Product: " +
                    product.title +

                    "\n\nPrice: $" +
                    product.price +

                    "\n\nCategory: " +
                    product.category +

                    "\n\nDescription: " +
                    product.description

                );

            }
        );



        /* APPEND */

        bottom.append(price);

        bottom.append(button);


        content.append(category);

        content.append(title);

        content.append(description);

        content.append(bottom);


        card.append(imageContainer);

        card.append(content);


        apicard.append(card);

    });

}



/* ==========================================
   APPLY ALL FILTERS
   ========================================== */

function applyFilters() {


    /* START WITH API DATA */

    let filteredProducts =
        [...jsData];



    /* ======================================
       SEARCH FILTER
       ====================================== */

    let searchValue =
        searchInput.value
            .toLowerCase()
            .trim();


    if (searchValue !== "") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return product.title
                        .toLowerCase()
                        .includes(searchValue);

                }
            );

    }



    /* ======================================
       CATEGORY FILTER
       ====================================== */

    if (selectedCategory !== "all") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return product.category ===
                        selectedCategory;

                }
            );

    }



    /* ======================================
       PRICE FILTER
       PRICE GREATER THAN $50
       ====================================== */

    if (priceFilterActive === true) {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return product.price > 50;

                }
            );

    }



    /* ======================================
       SORT
       ====================================== */

    if (currentSort === "lowHigh") {

        filteredProducts =
            [...filteredProducts].sort(
                function(a, b) {

                    return a.price - b.price;

                }
            );

    }


    else if (currentSort === "highLow") {

        filteredProducts =
            [...filteredProducts].sort(
                function(a, b) {

                    return b.price - a.price;

                }
            );

    }



    /* ======================================
       SHOW FIRST 5
       ====================================== */

    if (showFiveActive === true) {

        filteredProducts =
            filteredProducts.slice(0, 5);

    }



    /* SAVE */

    currentProducts =
        filteredProducts;



    /* DISPLAY */

    displayProducts(
        currentProducts
    );

}



/* ==========================================
   SHOW FIRST 5
   ========================================== */

showFive.addEventListener(
    "click",
    function() {


        showFiveActive = true;


        applyFilters();

    }
);



/* ==========================================
   PRICE > $50
   ========================================== */

priceFilter.addEventListener(
    "click",
    function() {


        priceFilterActive = true;


        applyFilters();

    }
);



/* ==========================================
   SEARCH
   ========================================== */

searchButton.addEventListener(
    "click",
    function() {


        applyFilters();

    }
);



/* ==========================================
   SEARCH WITH ENTER
   ========================================== */

searchInput.addEventListener(
    "keyup",
    function(event) {


        if (event.key === "Enter") {

            applyFilters();

        }

    }
);



/* ==========================================
   LOW → HIGH
   ========================================== */

lowHigh.addEventListener(
    "click",
    function() {


        currentSort =
            "lowHigh";


        applyFilters();

    }
);



/* ==========================================
   HIGH → LOW
   ========================================== */

highLow.addEventListener(
    "click",
    function() {


        currentSort =
            "highLow";


        applyFilters();

    }
);



/* ==========================================
   SHOW ALL / RESET
   ========================================== */

showAll.addEventListener(
    "click",
    function() {


        selectedCategory =
            "all";


        priceFilterActive =
            false;


        showFiveActive =
            false;


        currentSort =
            "";


        searchInput.value =
            "";


        currentProducts =
            [...jsData];


        setActiveCategory();


        applyFilters();

    }
);



/* ==========================================
   CREATE CATEGORY BUTTONS
   ========================================== */

function createCategoryButtons() {


    categoryButtons.innerText =
        "";



    /* ALL */

    let allButton =
        document.createElement("button");


    allButton.className =
        "category-button active";


    allButton.innerText =
        "All";


    allButton.addEventListener(
        "click",
        function() {


            selectedCategory =
                "all";


            setActiveButton(
                allButton
            );


            applyFilters();

        }
    );


    categoryButtons.append(
        allButton
    );



    /* GET UNIQUE CATEGORIES */

    let categories =
        [];


    jsData.forEach(
        function(product) {


            if (
                !categories.includes(
                    product.category
                )
            ) {

                categories.push(
                    product.category
                );

            }

        }
    );



    /* CREATE CATEGORY BUTTONS */

    categories.forEach(
        function(categoryName) {


            let button =
                document.createElement("button");


            button.className =
                "category-button";



            /* BUTTON TEXT */

            if (
                categoryName ===
                "men's clothing"
            ) {

                button.innerText =
                    "Men's Clothing";

            }

            else if (
                categoryName ===
                "women's clothing"
            ) {

                button.innerText =
                    "Women's Clothing";

            }

            else if (
                categoryName ===
                "jewelery"
            ) {

                button.innerText =
                    "Jewelery";

            }

            else if (
                categoryName ===
                "electronics"
            ) {

                button.innerText =
                    "Electronics";

            }

            else {

                button.innerText =
                    categoryName;

            }



            /* CATEGORY CLICK */

            button.addEventListener(
                "click",
                function() {


                    selectedCategory =
                        categoryName;


                    setActiveButton(
                        button
                    );


                    applyFilters();

                }
            );


            categoryButtons.append(
                button
            );

        }
    );

}



/* ==========================================
   ACTIVE CATEGORY BUTTON
   ========================================== */

function setActiveButton(
    activeButton
) {


    let buttons =
        categoryButtons.querySelectorAll(
            ".category-button"
        );


    buttons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );

        }
    );


    activeButton.classList.add(
        "active"
    );

}



/* ==========================================
   RESET ACTIVE CATEGORY
   ========================================== */

function setActiveCategory() {


    let buttons =
        categoryButtons.querySelectorAll(
            ".category-button"
        );


    buttons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );

        }
    );


    if (buttons.length > 0) {

        buttons[0].classList.add(
            "active"
        );

    }

}