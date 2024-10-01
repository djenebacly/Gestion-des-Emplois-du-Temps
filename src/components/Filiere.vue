<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Liste des Filières</h1>
            <section class="recent-orders">

                <router-link to="AddFiliere" class="add">Ajouter</router-link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Libellé</th>
                            <th>Nom</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in filiere" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.libelle }}</td>
                            <td>{{ item.nom }}</td>
                            <td>
                                <button> <router-link :to="'modiffiliere/' + item.id"><span
                                            class="material-icons-sharp green">
                                            edit
                                        </span></router-link>
                                </button>
                                <button v-on:click="supFiliere(item.id)"><span class="material-icons-sharp red">
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
            filiere: [],
        }
    },

    methods: {
        async supFiliere(id) {
            let result = await axios.delete("http://localhost:3000/filiere/" + id);
            if (result == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/filiere");
            this.filiere = result.data;
            this.$router.push({path:'/filiere'})

        }
    },

    async mounted() {
        this.loadData();
    }
}

</script>