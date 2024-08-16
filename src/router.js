import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from './components/Acceuil.vue'
import Filiere from './components/Filiere.vue'
import Classe from './components/Classe.vue'
import Cours from './components/Cours.vue'
import Niveaux from './components/Niveaux.vue'
import Salle from './components/Salle.vue'
import Seance from './components/Seance.vue'





const routes=[
    {
        name: "Acceuil",
        component: Acceuil,
        path: "/"
    },
    {
        name: "Filiere",
        component: Filiere,
        path: "/filiere"
    },
    {
        name: "Classe",
        component: Classe,
        path: "/classe"
    },
    {
        name: "Cours",
        component: Cours,
        path: "/cours"
    },
    {
        name: "Niveaux",
        component: Niveaux,
        path: "/niveaux"
    },
    {
        name: "Salle",
        component: Salle,
        path: "/salle"
    },
    {
        name: "Seance",
        component: Seance,
        path: "/seance"
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes,
});

export default router;