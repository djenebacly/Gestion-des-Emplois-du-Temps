<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Salle</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idSalle">ID</label>
                    <input type="number" name="idSalle" id="idSalle">
                </div>-->
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="libelle">Libellé</label>
                            <input type="text" name="libelle" id="libelle">
                        </div>
                        <div>
                            <label for="batiment">Bâtiment</label>
                            <input type="text" name="batiment" id="batiment">
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="capacite">Capacité</label>
                            <input type="number" name="capacite" id="capacite">
                        </div>
                        <div>
                            <label for="description">Description</label>
                            <textarea name="description" id="description" placeholder="Autres description de la salle"></textarea>
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