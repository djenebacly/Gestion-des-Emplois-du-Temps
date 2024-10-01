PO°<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Cours</h1>
            <form action="">
                <div class="haut">
                    <label for="idCours">ID</label>
                    <input type="number" name="idCours" id="idCours" v-model="cours.id" readonly>
                </div>
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="matiere">Matière</label>
                            <input type="text" name="matiere" id="matiere" v-model="cours.matiere">
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="description">Description</label>
                            <textarea name="description" id="description" placeholder="Autres description du cours"
                                v-model="cours.description"></textarea>
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Modifier" class="ajouter" v-on:click="modifCours">
                    <input type="reset" value="Annuler" class="annuler">
                </div>
            </form>
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
            cours: {
                matiere: '',
                description: '',
            }
        }
    },


    methods: {
        async modifCours() {
            let result = await axios.put("http://localhost:3000/cours/" + this.$route.params.id, {
                matiere: this.cours.matiere,
                description: this.cours.description,

            })
            if (result.status == 200) {
                this.$router.push({ name: 'Cours' })
            }
        }
    },

    async mounted() {
        let cours = localStorage.getItem("cours-info");
        if (!cours) {
            this.$router.push({ name: 'Cours' })
        }
        const result = await axios.get('http://localhost:3000/cours/' + this.$route.params.id);
        this.cours = result.data;
    }
}

</script>