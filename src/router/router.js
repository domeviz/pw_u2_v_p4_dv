import {createRouter,createWebHashHistory} from 'vue-router'

//Forma sin LAZYLOAD
// import BienvenidaPage from '../modules/pokemon/pages/BienvenidaPage'
// import JuegoPage from '../modules/pokemon/pages/JuegoPage'
// import PremiosPage from '../modules/pokemon/pages/PremiosPage'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage'
// import NotFoundPage from '../modules/pokemon/pages/NotFoundPage'
// const routes =[
// {
//     path: "/juego",
//     component: JuegoPage,
// },
// ]

//Forma con LAZYLOAD
const routes =[
    {
        path: "/",
        component: ()=>import('../modules/pokemon/pages/BienvenidaPage'),
    },
    {
        path: "/juego",
        component: ()=>import('../modules/pokemon/pages/JuegoPage'),
    },
    {
        path: "/premios",
        component: ()=>import('../modules/pokemon/pages/PremiosPage'),
    },
    {
        path: "/pokemon",
        component: ()=>import('../modules/pokemon/pages/PokemonPage'),
    },
    {
        path: "/:pathMatch(.*)*",
        component: ()=>import('../modules/pokemon/pages/NotFoundPage'),
    },
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router