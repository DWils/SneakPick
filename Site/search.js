const sneackers = [
    {
        id: 1,
        name: "New Balance ML725",
        brand: "New Balance",
        link: "/Dossier page produit/New Balance ML725.html"
    },
    {
        id: 2,
        name: "Adidas Originals FORUM BOLD",
        brand: "Adidas Originals",
        link: "/Dossier page produit/Adidas Originals FORUM BOLD.html"
    },
    {
        id: 3,
        name: "Skechers MICROSPEC MAX",
        brand: "Skechers",
        link: "/Dossier page produit/Skechers MICROSPEC MAX.html"
    },
    {
        id: 4,
        name: "Adidas Originals RETROPY P9",
        brand: "Adidas Originals",
        link: "/Dossier page produit/Adidas Originals RETROPY P9.html"
    },
    {
        id: 5,
        name: "Adidas Originals ZX 22 BOOST",
        brand: "Adidas Originals",
        link: "/Dossier page produit/Adidas Originals ZX 22 BOOST.html"
    },
    {
        id: 6,
        name: "Converse RUN STAR HIKE SEASONAL COLOR",
        brand: "Converse",
        link: "/Dossier page produit/Converse RUN STAR HIKE SEASONAL COLOR"
    },
    {
        id: 7,
        name: "New Balance GS327 UNISEX",
        brand: "New Balance",
        link: "/Dossier page produit/New Balance GS327 UNISEX.html"
    },
    {
        id: 8,
        name: "Nike Sportswear AIR FORCE 1",
        brand: "Nike Sportswear",
        link: "/Dossier page produit/Nike Sportswear AIR FORCE 1.html"
    },
    {
        id: 9,
        name: "Nike Sportswear DUNK",
        brand: "Nike Sportswear",
        link: "/Dossier page produit/Nike Sportswear DUNK.html"
    },
    {
        id: 10,
        name: "Nike Sportswear W AF1 SHADOW",
        brand: "Nike Sportswear",
        link: "/Dossier page produit/Nike Sportswear W AF1 SHADOW.html"
    },
    {
        id: 11,
        name: "Timberland SPRINT TREKKER SUPER",
        brand: "Timberland",
        link: "/Dossier page produit/Timberland SPRINT TREKKER SUPER.html"
    },
]

let searchbar = document.getElementById("searchbar");

function search() {
    var filter, ul, li, a;
    filter = searchbar.value.toUpperCase();
    ul = document.getElementById("search-list");
    ul.innerHTML = "";
    for (let sneacker of sneackers) {

        if (sneacker.name.toUpperCase().includes(filter) && filter.value !== "") {
            console.log(sneacker);
            li = document.createElement("li");
            a = document.createElement("a");
            a.href = sneacker.link;
            a.textContent = sneacker.name;
            ul.appendChild(li);
            li.appendChild(a);
        }

    }
}

searchbar.addEventListener("change", search)




