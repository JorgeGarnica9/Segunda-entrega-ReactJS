const products = [
    {
        id: 1,
        name: "FINAL FANTASY XVI",
        image: "/ff16.webp",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi vitae laudantium voluptatem incidunt, deserunt tempora magnam eum ab rem?',
        price:'100',
        category: 'Games',
    },
    {
        id: 2,
        name: "HOGWARTS LEGACY",
        image: "/hlegacy.png",
        desc: "lorem ipsum harry potter",
        price:'100',
        category: 'Games',
    },
    {
        id: 3,
        name: "PLAYSTATION 5",
        image: "/playstation5.webp",
        desc: "lorem ipsum ps5 consola",
        price:'100',
        category: 'Consoles',
    },
    {
        id: 4,
        name: "PLAYSTATION 4",
        image: "/ps4.jpg",
        desc: "lorem ipsum ps4 consola",
        price:'100',
        category: 'Consoles',
    },
    {
        id: 5,
        name: "AURICULAR SONY",
        image: "/auricular.jpg",
        desc: "lorem ipsum auricular",
        price:'100',
        category: 'Accesories',
    },
    {
        id: 6,
        name: "REMERA ZORO",
        image: "/zoro.webp",
        desc: "lorem ipsum auricular",
        price:'100',
        category: 'Shirts',
    },
    {
        id: 7,
        name: "REMERA FINAL FANTASY 7 CORPS",
        image: "/finalfantasy7.webp",
        desc: "lorem ipsum auricular",
        price:'100',
        category: 'Shirts',
    }
]

export const getProducts = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(products);
    },2000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (id) => {
    return products.filter((prod) => prod.category === id);
};

console.log(getCategory('Games'))