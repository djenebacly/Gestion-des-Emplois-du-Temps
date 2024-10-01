
<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Classe</h1>
            <form action="">
                <div class="haut">
                    <label for="idClasse">ID</label>
                    <input type="number" name="idClasse" id="idClasse" v-model="classe.id" readonly>
                </div>
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="nbrEtudiant">Nombre d'etudiant</label>
                            <input type="number" name="nbrEtudiant" id="nbrEtudiant" v-model="classe.nbrEtudiant">
                        </div>
                        <div>
                            <label for="idNiveaux">Niveau</label>
                            <select name="idNiveaux" id="idNiveaux" v-model="classe.idNiveaux"  >
                                <option value="0">----Choisie----</option>
                                <option :value="item.licence + item.semestre" v-for="item in niveaux" :key="item.id">{{ item.licence }} {{ item.semestre }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="idFiliere">Filière</label>
                            <select name="idFiliere" id="idFiliere" v-model="classe.idFiliere" >
                                <option value="0" >----Choisie----</option>
                                <option :value="item.nom" v-for="item in filiere" :key="item.id">{{ item.nom }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Modifier" class="ajouter" v-on:click="modifClasse">
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
            classe:{
                nbrEtudiant:'',
                idNiveaux:'',
                idFiliere:'',
            },
            niveaux:[],
            filiere:[],
        }
    },

    methods:{
        async modifClasse(){
            let result=await axios.put("http://localhost:3000/classe/"+this.$route.params.id,{
                nbrEtudiant:this.classe.nbrEtudiant,
                idNiveaux:this.classe.idNiveaux,
                idFiliere:this.classe.idFiliere,
                
            })
            if (result.status==200) {
                this.$router.push({name:'Classe'})
            }
        }
    },

    async mounted(){
        /*let classe=localStorage.getItem("classe-info");
        if(!classe){
            this.$router.push({name:'Classe'})
        }*/
        const result=await axios.get("http://localhost:3000/classe/"+this.$route.params.id);
        this.classe=result.data;
        let result1 = await axios.get("http://localhost:3000/niveaux");
        this.niveaux = result1.data;
        let result2 = await axios.get("http://localhost:3000/filiere");
        this.filiere = result2.data;
    }
}

</script>