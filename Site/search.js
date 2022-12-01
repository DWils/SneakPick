const sneackers = [
    {
        id: 1,
        name: "New Balance ML725",
        brand: "New Balance",
        link: "New Balance ML725.html"
    },
    {
        id: 2,
        name: "Adidas Originals FORUM BOLD",
        brand: "Adidas Originals",
        link: "Adidas Originals FORUM BOLD.html"
    },
    {
        id: 3,
        name: "Skechers MICROSPEC MAX",
        brand: "Skechers",
        link: "Skechers MICROSPEC MAX.html"
    },
    {
        id: 4,
        name: "Adidas Originals RETROPY P9",
        brand: "Adidas Originals",
        link: "Adidas Originals RETROPY P9.html"
    },
    {
        id: 5,
        name: "Adidas Originals ZX 22 BOOST",
        brand: "Adidas Originals",
        link: "Adidas Originals ZX 22 BOOST.html"
    },
    {
        id: 6,
        name: "Converse RUN STAR HIKE SEASONAL COLOR",
        brand: "Converse",
        link: "Converse RUN STAR HIKE SEASONAL COLOR.html"
    },
    {
        id: 7,
        name: "New Balance GS327 UNISEX",
        brand: "New Balance",
        link: "New Balance GS327 UNISEX.html"
    },
    {
        id: 8,
        name: "Nike Sportswear AIR FORCE 1",
        brand: "Nike Sportswear",
        link: "Nike Sportswear AIR FORCE 1.html"
    },
    {
        id: 9,
        name: "Nike Sportswear DUNK",
        brand: "Nike Sportswear",
        link: "Nike Sportswear DUNK.html"
    },
    {
        id: 10,
        name: "Nike Sportswear W AF1 SHADOW",
        brand: "Nike Sportswear",
        link: "Nike Sportswear W AF1 SHADOW.html"
    },
    {
        id: 11,
        name: "Timberland SPRINT TREKKER SUPER",
        brand: "Timberland",
        link: "Timberland SPRINT TREKKER SUPER.html"
    },
]

let searchbar = document.getElementById("searchbar");
let searchbtn = document.getElementById("searchbtn");



searchbtn.addEventListener("click", (e) => {
    e.preventDefault()
    var filter, ul, li, a;
    filter = searchbar.value.toUpperCase();
    ul = document.getElementById("search-list");
    if (filter.value == "") {
        console.log("filtre vide");
    }
    else {
        ul.innerHTML = "";
        for (let sneacker of sneackers) {

            if (sneacker.name.toUpperCase().includes(filter)) {
                console.log(sneacker);
                li = document.createElement("li");
                a = document.createElement("a");
                a.href = "Dossier page produit/" + sneacker.link;
                a.textContent = sneacker.name;
                ul.appendChild(li);
                li.appendChild(a);
            }

        }
    }

})




