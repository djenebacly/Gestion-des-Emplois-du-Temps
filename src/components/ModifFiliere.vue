
<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Filière</h1>
            <form action="">
                <div class="haut">
                    <label for="idFiliere">ID</label>
                    <input type="text" name="idFiliere" id="idFiliere" v-model="filiere.id" readonly>
                </div>
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
                    <input type="submit" value="Modifier" class="ajouter" v-on:click="modifFiliere">
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
        async modifFiliere(){
            let result=await axios.put("http://localhost:3000/filiere/"+this.$route.params.id,{
                libelle:this.filiere.libelle,
                nom:this.filiere.nom,
                
            })
            if (result.status==200) {
                this.$router.push({name:'Filiere'})
            }
        }
    },

    async mounted(){
        let filiere=localStorage.getItem("filiere-info");
        if(!filiere){
            this.$router.push({name:'Filiere'})
        }
        const result=await axios.get('http://localhost:3000/filiere/'+this.$route.params.id);
        this.filiere=result.data;
    }
}

</script>