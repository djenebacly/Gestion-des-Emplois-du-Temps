<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Liste des Cours</h1>
            <section class="recent-orders">
                <router-link to="AddCours" class="add">Ajouter</router-link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Matière</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cours" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.matiere }}</td>
                            <td>{{ item.description }}</td>
                            <td>
                                <button> <router-link :to="'modifcours/' + item.id"><span
                                            class="material-icons-sharp green">
                                            edit
                                        </span></router-link>
                                </button>
                                <button v-on:click="supCours(item.id)"><span class="material-icons-sharp red">
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
            cours: [],
        }
    },

    methods: {
        async supCours(id) {
            let result = await axios.delete("http://localhost:3000/cours/" + id);
            if (result == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/cours");
            this.cours = result.data;
        }
    },

    async mounted() {
        this.loadData();
    }
}

</script>