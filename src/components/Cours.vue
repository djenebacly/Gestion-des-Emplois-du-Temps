<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Cours</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idCours">ID</label>
                    <input type="number" name="idCours" id="idCours">
                </div>-->
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="nom">Nom</label>
                            <input type="text" name="nom" id="nom" v-model="cours.nom">
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="description">Description</label>
                            <textarea name="description" id="description" placeholder="Autres description du cours" v-model="cours.description"></textarea>
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Ajouter" class="ajouter" v-on:click="addCours">
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
import Extrabar from './Extrabar.vue';
import Sidebar from './Sidebar.vue';
export default{
    components:{
        Extrabar,
        Sidebar,
    },

    data(){
        return{
            cours:{
                nom:'',
                description:'',
            }
        }
    },

    methods:{
        addCours(){
            console.warn(this.cours)
        }
    }
}

</script>