<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Séance</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idSeance">ID</label>
                    <input type="number" name="idSeance" id="idSeance">
                </div>-->
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="type">Type</label>
                            <select name="type" id="type">
                                <option value="0">----Choisie----</option>
                                <option value="CM">CM</option>
                                <option value="TP">TP</option>
                                <option value="TD">TD</option>
                            </select>
                        </div>
                        <div>
                            <label for="heureDebut">Heure Début</label>
                            <input type="number" name="heureDebut" id="heureDebut">
                        </div>
                        <div>
                            <label for="heurePauseDebut">Heure Pause Début</label>
                            <input type="number" name="heurePauseDebut" id="heurePauseDebut">
                        </div>
                        <div>
                            <label for="enseignant">Enseignant</label>
                            <select name="enseignant" id="enseignant">
                                <option value="0">----Choisie----</option>
                            </select>
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="horaire">Horaire</label>
                            <input type="number" name="horaire" id="horaire">
                        </div>
                        <div>
                            <label for="heureFin">Heure Fint</label>
                            <input type="number" name="heureFin" id="heureFin">
                        </div>
                        <div>
                            <label for="heurePauseFin">Heure Pause Fin</label>
                            <input type="number" name="heurePauseFin" id="heurePauseFin">
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Ajouter" class="ajouter">
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
}

</script>