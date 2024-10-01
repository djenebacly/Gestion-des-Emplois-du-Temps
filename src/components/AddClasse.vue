
<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Classe</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idClasse">ID</label>
                    <input type="number" name="idClasse" id="idClasse">
                </div>-->
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
                    <input type="submit" value="Ajouter" class="ajouter" v-on:click="addClasse">
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
       async addClasse(){
            let result=await axios.post("http://localhost:3000/classe",{
                nbrEtudiant:this.classe.nbrEtudiant,
                idNiveaux:this.classe.idNiveaux,
                idFiliere:this.classe.idFiliere,
            })
            if (result.status==201) {
                localStorage.setItem("classe-info", JSON.stringify(result.data))
                this.$router.push({name:'Classe'})
            }
        }
    },
    async mounted(){
        let result = await axios.get("http://localhost:3000/niveaux");
        this.niveaux = result.data;
        let result1 = await axios.get("http://localhost:3000/filiere");
        this.filiere = result1.data;
    }
}

</script>