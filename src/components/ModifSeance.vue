<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Séance</h1>
            <form action="">
                <div class="haut">
                    <label for="idSeance">ID</label>
                    <input type="number" name="idSeance" id="idSeance" v-model="seance.id" readonly>
                </div>
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="type">Type</label>
                            <select name="type" id="type" v-model="seance.type">
                                <option value="">----Choisie----</option>
                                <option value="CM">CM</option>
                                <option value="TP">TP</option>
                                <option value="TD">TD</option>
                            </select>
                        </div>
                        <div>
                            <label for="heureDebut">Heure Début</label>
                            <input type="number" name="heureDebut" id="heureDebut" v-model="seance.heureDebut">
                        </div>
                        <div>
                            <label for="heurePauseDebut">Heure de Pause Début</label>
                            <input type="number" name="heurePauseDebut" id="heurePauseDebut" v-model="seance.heurePauseDebut">
                        </div>
                        <div>
                            <label for="heurePauseFin">Heure d'Examen Début</label>
                            <input type="number" name="heureExamenDebut" id="heureExamenDebut" v-model="seance.heureExamenDebut">
                        </div>
                        <div>
                            <label for="idSalle">Salle</label>
                            <select name="idSalle" id="idSalle" v-model="seance.idSalle">
                                <option value="">----Choisie----</option>
                                <option :value="item.libelle + item.batiment + item.capacite" v-for="item in salle" :key="item.id">{{item.libelle}} {{ item.batiment }} {{ item.capacite }} </option>

                            </select>
                        </div>
                        <div>
                            <label for="idCours">Cours</label>
                            <select name="idCours" id="idCours" v-model="seance.idCours">
                                <option value="">----Choisie----</option>
                                <option :value="item.matiere" v-for="item in cours" :key="item.id">{{item.matiere}}</option>

                            </select>
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="horaire">Horaire</label>
                            <input type="number" name="horaire" id="horaire" v-model="seance.horaire">
                        </div>
                        <div>
                            <label for="heureFin">Heure Fin</label>
                            <input type="number" name="heureFin" id="heureFin" v-model="seance.heureFin">
                        </div>
                        <div>
                            <label for="heurePauseFin">Heure de Pause Fin</label>
                            <input type="number" name="heurePauseFin" id="heurePauseFin" v-model="seance.heurePauseFin">
                        </div>
                        <div>
                            <label for="heurePauseFin">Heure d'Examen Fin</label>
                            <input type="number" name="heureExamenFin" id="heureExamenFin" v-model="seance.heureExamenFin">
                        </div>
                        <div>
                            <label for="idClasse">Classe</label>
                            <select name="idClasse" id="idClasse" v-model="seance.idClasse">
                                <option value="0">----Choisie----</option>
                                <option :value="item.idFiliere + item.idNiveaux" v-for="item in classe" :key="item.id">{{item.idFiliere}} {{ item.idNiveaux }}</option>

                            </select>
                        </div>
                        <div>
                            <label for="idEnseignant">Enseignant</label>
                            <select name="idEnseignant" id="idEnseignant" v-model="seance.idEnseignant">
                                <option value="">----Choisie----</option>
                                <option :value="item.nom + item.prenoms" v-for="item in enseignant" :key="item.id">{{item.nom}} {{ item.prenoms }}</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Modifier" class="ajouter" v-on:click="modifSeance">
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

    data(){
        return{
            seance:{
                type:'',
                heureDebut:'',
                heurePauseDebut:'',
                heureExamenDebut:'',
                idSalle:'',
                idCours:'',
                horaire:'',
                heureFin:'',
                heurePauseFin:'',
                heureExamenFin:'',
                idClasse:'',
                idEnseignant:'',
            },
            enseignant:[],
            cours:[],
            classe:[],
            salle:[],
        }
    },

    methods: {
        async modifSeance() {
            let result = await axios.put("http://localhost:3000/seance/" + this.$route.params.id, {
                type:this.seance.type,
                heureDebut:this.seance.heureDebut,
                heurePauseDebut:this.seance.heurePauseDebut,
                idSalle:this.seance.idSalle,
                idCours:this.seance.idCours,
                horaire:this.seance.horaire,
                heureFin:this.seance.heureFin,
                heurePauseFin:this.seance.heurePauseFin,
                heureExamenDebut:this.seance.heureExamenDebut,
                heureExamenFin:this.seance.heureExamenFin,
                idClasse:this.seance.idClasse,
                idEnseignant:this.seance.idEnseignant,

            })
            if (result.status == 200) {
                this.$router.push({ name: 'Seance' })
            }
        }
    },

    async mounted(){
        let results=await axios.get("http://localhost:3000/seance/"+this.$route.params.id);
        this.seance=results.data;
        let result = await axios.get("http://localhost:3000/salle");
        this.salle = result.data;
        let result1 = await axios.get("http://localhost:3000/classe");
        this.classe = result1.data;
        let result2 = await axios.get("http://localhost:3000/cours");
        this.cours = result2.data;
        let result3 = await axios.get("http://localhost:3000/ensignant");
        this.enseignant = result3.data;
    }
}

</script>