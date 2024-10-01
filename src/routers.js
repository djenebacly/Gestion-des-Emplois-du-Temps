import { createRouter, createWebHistory } from 'vue-router'
import Connexion from './components/Connexion.vue'
import Inscription from './components/Inscription.vue'
import Acceuil from './components/Acceuil.vue'
import Filiere from './components/Filiere.vue'
import AddFiliere from './components/AddFiliere.vue'
import ModifFiliere from './components/ModifFiliere.vue'
import Classe from './components/Classe.vue'
import AddClasse from './components/AddClasse.vue'
import ModifClasse from './components/ModifClasse.vue'
import Cours from './components/Cours.vue'
import AddCours from './components/AddCours.vue'
import ModifCours from './components/ModifCours.vue'
import Niveaux from './components/Niveaux.vue'
import AddNiveaux from './components/AddNiveaux.vue'
import ModifNiveaux from './components/ModifNiveaux.vue'
import Salle from './components/Salle.vue'
import AddSalle from './components/AddSalle.vue'
import ModifSalle from './components/ModifSalle.vue'
import Seance from './components/Seance.vue'
import AddSeance from './components/AddSeance.vue'
import ModifSeance from './components/ModifSeance.vue'
import Utilisateur from './components/Utilisateur.vue'
import AddUtilisateur from './components/AddUtilisateur.vue'
import ModifUtilisateur from './components/ModifUtilisateur.vue'
import AddUtiEns from './components/AddUtiEns.vue'
import ModifUtiEns from './components/ModifUtiEns.vue'
import AddUtiPer from './components/AddUtiPer.vue'
import ModifUtiPer from './components/ModifUtiPer.vue'






const routes=[
    {
        name: "Connexion",
        component: Connexion,
        path: "/"
    },
    {
        name: "Inscription",
        component: Inscription,
        path: "/inscription"
    },
    {
        name: "Acceuil",
        component: Acceuil,
        path: "/acceuil"
    },
    {
        name: "Filiere",
        component: Filiere,
        path: "/filiere"
    },
    {
        name: "AddFiliere",
        component: AddFiliere,
        path: "/addfiliere"
    },
    {
        name: "ModifFiliere",
        component: ModifFiliere,
        path: "/modiffiliere/:id"
    },

    {
        name: "Classe",
        component: Classe,
        path: "/classe"
    },
    {
        name: "AddClasse",
        component: AddClasse,
        path: "/addclasse"
    },
    {
        name: "ModifClasse",
        component: ModifClasse,
        path: "/modifclasse/:id"
    },

    {
        name: "Cours",
        component: Cours,
        path: "/cours"
    },
    {
        name: "AddCours",
        component: AddCours,
        path: "/addcours"
    },
    {
        name: "ModifCours",
        component: ModifCours,
        path: "/modifcours/:id"
    },

    {
        name: "Niveaux",
        component: Niveaux,
        path: "/niveaux"
    },
    {
        name: "AddNiveaux",
        component: AddNiveaux,
        path: "/addniveaux"
    },
    {
        name: "ModifNiveaux",
        component: ModifNiveaux,
        path: "/modifniveaux/:id"
    },

    {
        name: "Salle",
        component: Salle,
        path: "/salle"
    },
    {
        name: "AddSalle",
        component: AddSalle,
        path: "/addsalle"
    },
    {
        name: "ModifSalle",
        component: ModifSalle,
        path: "/modifsalle/:id"
    },

    {
        name: "Seance",
        component: Seance,
        path: "/seance"
    },
    {
        name: "AddSeance",
        component: AddSeance,
        path: "/addseance"
    },
    {
        name: "ModifSeance",
        component: ModifSeance,
        path: "/modifseance/:id"
    },

    {
        name: "Utilisateur",
        component: Utilisateur,
        path: "/utilisateur"
    },
    {
        name: "AddUtilisateur",
        component: AddUtilisateur,
        path: "/addutilisateur"
    },
    {
        name: "ModifUtilisateur",
        component: ModifUtilisateur,
        path: "/modifutilisateur/:id"
    },
    {
        name: "AddUtiEns",
        component: AddUtiEns,
        path: "/addutiens"
    },
    {
        name: "ModifUtiEns",
        component: ModifUtiEns,
        path: "/modifutiens/:id"
    },
    {
        name: "AddUtiPer",
        component: AddUtiPer,
        path: "/addutiper"
    },
    {
        name: "ModifUtiPer",
        component: ModifUtiPer,
        path: "/modifutiper/:id"
    }
    
]

const router=createRouter({
    history: createWebHistory(),
    routes,
});

export default router;