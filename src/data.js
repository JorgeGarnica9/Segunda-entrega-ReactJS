const products = [
    {
        id: 1,
        name: "FINAL FANTASY XVI",
        image: "/ff16.webp",
        title:'Juego para la consola PlayStation 5 de la franquicia Final Fantasy',
        desc: 'Durante siglos, las gentes se han congregado en torno a los Cristales Madre para gozar de su bendición: la magia. El abundante éter con el que riegan sus alrededores les permite aprovechar tal recurso indispensable en sus vidas. Sin embargo, las tierras estigias se extienden sin cesar, consumiendo el éter y haciendo inhabitables los dominios que reclaman; es entonces cuando se desatan cruentas batallas por el control de los Cristales Madre. Aun en este mundo sumido en el caos y entregado a la búsqueda de una bendición menguante, hay quienes luchan por retomar las riendas de su destino. Quienes creen que el legado de los cristales ha conformado la historia de la humanidad durante demasiado tiempo.',
        price:'90.000',
        category: 'Games',
    },
    {
        id: 2,
        name: "HOGWARTS LEGACY",
        image: "/hlegacy.png",
        title:'Juego para la consola PlayStation 5 del universo de Harry Potter',
        desc: 'Hogwarts Legacy es un juego de rol inmersivo en mundo abierto que se inspira de los libros de la saga Harry Potter. Disfruta del Hogwarts del siglo XIX. Tu personaje es un alumno o alumna del famoso colegio que tiene la clave de un antiguo secreto que amenaza con destruir el mundo mágico. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico. El legado está en tus manos',
        price:'76.000',
        category: 'Games',
    },
    {
        id: 3,
        name: "PLAYSTATION 5",
        image: "/playstation5.webp",
        title:'Consola de juegos Sony PlayStation 5 con unidad lectora de discos',
        desc: "Experimenta una velocidad impresionante de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retroalimentación háptica, gatillos adaptables y audio 3D, y una generación de increíbles juegos de PlayStation®. Velocidad: Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefinen lo que una consola PlayStation® puede hacer. Inmersión: Siente una experiencia de juego más envolvente con soporte para retroalimentación háptica, gatillos adaptables y tecnología de audio en 3D. Juegos: Maravíllate con gráficos impresionantes y explora las nuevas funciones de PS5™",
        price:'1.300.000',
        category: 'Consoles',
    },
    {
        id: 4,
        name: "PLAYSTATION 4",
        image: "/ps4.jpg",
        title:'Consola de juegos Sony PLayStation 4 edición PRO',
        desc: 'Gracias a sus pequeñas dimensiones, su consumo energético es reducido, lo que la convierte en un producto económico y accesible. Además, el control DualShock combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud sin precedentes con cada movimiento. Al contar con un procesador de 8 núcleos y un procesador gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugas.',
        price:'750.000',
        category: 'Consoles',
    },
    {
        id: 5,
        name: "AURICULAR SONY",
        image: "/auricular.jpg",
        title:'Auricular inalámbrico compatible con las consolas PlayStation',
        desc: 'Audio para juegos de próxima generación: experimenta un sonido realista extraordinario en tus juegos favoritos. Conectividad multidispositivo: ve a donde la aventura te lleve con la capacidad de conectarte de forma inalámbrica a una amplia gama de dispositivos. Comando y control: lleva a tu escuadrón a la victoria con captura de voz nítida y controles de fácil acceso. Siempre prepárate para un gran juego: disfruta de sesiones de juego épicas con hasta 30 horas de duración de la batería y carga rápida.',
        price:'130.000',
        category: 'Accesories',
    },
    {
        id: 6,
        name: "REMERA ZORO",
        image: "/zoro.webp",
        title:'Remera con estampado serigráfrico de excelente calidad',
        desc: 'Remera 100% algodón en color negro con un estampado de Roronoa Zoro, personaje de One Piece. Comprá remeras de tus personajes anime favoritos de One Piece con envío a todo el país!',
        price:'19.900',
        category: 'Shirts',
    },
    {
        id: 7,
        name: "REMERA FINAL FANTASY 7 CORPS",
        image: "/finalfantasy7.webp",
        title:'Remera con estampado serigráfrico de excelente calidad',
        desc: 'Remera 100% algodón en color negro con un estampado de Final Fantasy 7 con Cloud Strife y Sephirot. Comprá remeras de tus juegos rpg favoritos de Final Fantasy con envío a todo el país!',
        price:'19.900',
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

