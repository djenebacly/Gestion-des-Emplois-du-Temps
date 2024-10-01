<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Liste des Salles</h1>
            <section class="recent-orders">
                <router-link to="AddSalle" class="add">Ajouter</router-link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Libellé</th>
                            <th>Bâtiment</th>
                            <th>Capacité</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in salle" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.libelle }}</td>
                            <td>{{ item.batiment }}</td>
                            <td>{{ item.capacite }}</td>
                            <td>{{ item.description }}</td>
                            <td>
                                <button> <router-link :to="'modifsalle/' + item.id"><span
                                            class="material-icons-sharp green">
                                            edit
                                        </span></router-link>
                                </button>
                                <button v-on:click="supSalle(item.id)"><span class="material-icons-sharp red">
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
            salle: [],
        }
    },
    methods: {
        async supSalle(id) {
            let result = await axios.delete("http://localhost:3000/salle/" + id);
            if (result == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/salle");
            this.salle = result.data;
        }
    },

    async mounted() {
        this.loadData();
    }
}

</script>