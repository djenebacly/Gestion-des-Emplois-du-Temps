<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Liste des Niveaux</h1>
            <section class="recent-orders">
                <router-link to="AddNiveaux" class="add">Ajouter</router-link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Licence</th>
                            <th>Semestre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in niveaux" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.licence }}</td>
                            <td>{{ item.semestre }}</td>
                            <td>
                                <button> <router-link :to="'modifniveaux/' + item.id"><span
                                            class="material-icons-sharp green">
                                            edit
                                        </span></router-link>
                                </button>
                                <button v-on:click="supNiveaux(item.id)"><span class="material-icons-sharp red">
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
            niveaux: [],
        }
    },

    methods: {
        async supNiveaux(id) {
            let result = await axios.delete("http://localhost:3000/niveaux/" + id);
            if (result == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/niveaux");
            this.niveaux = result.data;
        }
    },

    async mounted() {
        this.loadData();
    }
}

</script>