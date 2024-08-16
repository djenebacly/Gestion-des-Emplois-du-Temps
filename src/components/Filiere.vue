<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Filière</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idFilier">ID</label>
                    <input type="number" name="idFilier" id="idFilier">
                </div>-->
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="libelle">Libellé</label>
                            <input type="text" name="libelle" id="libelle" v-model="filiere.libelle">
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="nom">Nom</label>
                            <input type="text" name="nom" id="nom" v-model="filiere.nom">
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Ajouter" class="ajouter" v-on:click="addFiliere">
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
            filiere:{
                libelle:'',
                nom:'',
            }
        }
    },
    methods:{
       async addFiliere(){
            //console.warn(this.filiere)
            let result=await axios.post("http://localhost:3000/filiere",{
                libelle:this.filiere.libelle,
                nom:this.filiere.nom,
            })
            //console.warn("result",result)
            if (result.status==201) {
                localStorage.setItem("filiere-info", JSON.stringify(result.data))
                this.$router.push({name:'Filiere'})
            }
        }
    }
}

</script>