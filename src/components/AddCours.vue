
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
                            <label for="matiere">Matière</label>
                            <input type="text" name="matiere" id="matiere" v-model="cours.matiere">
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
import axios from 'axios';
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
                matiere:'',
                description:'',
            }
        }
    },

    methods:{
       async addCours(){
            //console.warn(this.cours)
            let result=await axios.post("http://localhost:3000/cours",{
                matiere:this.cours.matiere,
                description:this.cours.description,
            })
            //console.warn("result",result)
            if (result.status==201) {
                localStorage.setItem("cours-info", JSON.stringify(result.data))
                this.$router.push({name:'Cours'})
            }
        }
    }
}

</script>