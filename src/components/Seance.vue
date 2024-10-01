<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Liste des Séances</h1>
            <section class="recent-orders">
                <router-link to="AddSeance" class="add">Programmer</router-link>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Horaire</th>
                        <th>Heure Début</th>
                        <th>Heure Fin</th>
                        <th>Salle</th>
                        <th>Classe</th>
                        <th>Cours</th>
                        <th>Enseignant</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="item in seance" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.type }}</td>
                        <td>{{ item.horaire }}</td>
                        <td>{{ item.heureDebut }}</td>
                        <td>{{ item.heureFin }}</td>
                        <td>{{ item.idSalle }}</td>
                        <td>{{ item.idClasse }}</td>
                        <td>{{ item.idCours }}</td>
                        <td>{{ item.idEnseignant }}</td>
                        <td>
                                <button> <router-link :to="'modifseance/' + item.id"><span
                                            class="material-icons-sharp green">
                                            edit
                                        </span></router-link>
                                </button>
                                <button v-on:click="supSeance(item.id)"><span class="material-icons-sharp red">
                                        delete
                                    </span>
                                </button>
                            </td>
                    </tr>
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
            seance: [],
        }
    },
    methods: {
        async supSeance(id) {
            let result = await axios.delete("http://localhost:3000/seance/" + id);
            if (result == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/seance");
            this.seance = result.data;
        }
    },

    async mounted() {
        this.loadData();
    }
}

</script>