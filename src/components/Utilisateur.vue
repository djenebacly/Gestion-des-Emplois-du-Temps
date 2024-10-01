<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Liste des Utilisateurs</h1>
            <section class="recent-orders">
                <router-link to="AddUtilisateur" class="add">Ajouter</router-link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre d'etudiant</th>
                            <th>Niveau</th>
                            <th>Filière</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in classe" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.nbrEtudiant }}</td>
                            <td>{{ item.idNiveaux }}</td>
                            <td>{{ item.idFiliere }}</td>
                            <td>
                                <button> <router-link :to="'modifclasse/' + item.id"><span
                                            class="material-icons-sharp green">
                                            edit
                                        </span></router-link>
                                </button>
                                <button v-on:click="supClasse(item.id)"><span class="material-icons-sharp red">
                                        delete
                                    </span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>


        <div class="extrabar">
            <Extrabar />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Extrabar from './Extrabar.vue';
import Sidebar from './Sidebar.vue';
export default {
    components: {
        Extrabar,
        Sidebar,
    },

    data() {
        return {
            classe: [],
        }
    },
    methods: {
        async supClasse(id) {
            let result = await axios.delete("http://localhost:3000/classe/" + id);
            if (result == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/classe");
            this.classe = result.data;
        }
    },

    async mounted() {
        this.loadData();
    }
}

</script>