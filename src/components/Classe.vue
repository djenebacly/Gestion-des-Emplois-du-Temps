<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Classe</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idFilier">ID</label>
                    <input type="number" name="idClasse" id="idClasse">
                </div>-->
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="nbrEtudiant">Nombre d'etudiant</label>
                            <input type="number" name="nbrEtudiant" id="nbrEtudiant">
                        </div>
                        <div>
                            <label for="idNiveau">Niveau</label>
                            <select name="idNiveau" id="idNiveau">
                                <option value="0">----Choisie----</option>
                            </select>
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="idFiliere">Filière</label>
                            <select name="idFiliere" id="idFiliere">
                                <option value="0">----Choisie----</option>
                            </select>
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