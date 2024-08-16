<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Niveaux</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idNiveau">ID</label>
                    <input type="number" name="idNiveau" id="idNiveau">
                </div>-->
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="licence">Licence</label>
                            <select name="licence" id="licence">
                                <option value="0">----Choisie----</option>
                            </select>
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="semestre">Semestre</label>
                            <select name="semestre" id="semestre">
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