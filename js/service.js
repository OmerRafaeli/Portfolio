'use strict'

const projects = [
    {
        id: 1,
        name: "The Book Shop",
        imgRef: "1",
        media: `<img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">`,
        title: "Store Management",
        desc: "Book stor management system",
        url: "https://omerrafaeli.github.io/The-Book-Shop/",
        linkText: "Book Store Example",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },

    {
        id: 2,
        name: "Pacman",
        imgRef: "2",
        media: `<img class="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="">`,
        title: "Retro Games",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "https://omerrafaeli.github.io/Packman/",
        linkText: "Play Packman Game Example Here",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },

    {
        id: 3,
        name: "MineSweeper",
        imgRef: "3",
        media: `<img class="img-fluid d-block mx-auto" src="img/portfolio/03-full.jpg" alt="">`,
        title: "Stylized Gaming",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "https://omerrafaeli.github.io/Sprint-1/",
        linkText: "Play Minesweeper Here",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },

    {
        id: 4,
        name: "3D FutureJet",
        imgRef: "4",
        media: `<img class="img-fluid d-block mx-auto" src="img/portfolio/04-full.jpg" alt="">`,
        title: "Hard Surface Modeling",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "https://www.artstation.com/artwork/48rvd1",
        linkText: "360° Model Example Here",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },

    {
        id: 5,
        name: "Unity Game Engine",
        imgRef: "5",
        media: `<img class="img-fluid d-block mx-auto" src="img/portfolio/05-full.jpg" alt="">`,
        title: "Game Development",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "https://rafaeli3d.itch.io/space-attack-survival-mode",
        linkText: "Space Invaders - Game Example Here",
        publishedAt: 1448693941200,
        labels: ["Matrixes", "keyboard events"]
    },

    {
        id: 6,
        name: "3D animations",
        imgRef: "6",
        media: `"<video width="480" height="640" autoplay><source src="../img/portfolio/06-full.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>`,
        title: "stylized Modeling",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "https://omerrafaeli.github.io/The-Book-Shop/",
        linkText: "Book Store Example Here",
        publishedAt: 1448693942300,
        labels: ["Matrixes", "keyboard events"]
    }
]

function getProjectId(projId) {
    const project = projects.find(proj => proj.id === projId)
    return project
}

function getDateFromTimestemp(ts) {
    const timestamp = ts
    var date = new Date(timestamp);

   return (date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear())
}
