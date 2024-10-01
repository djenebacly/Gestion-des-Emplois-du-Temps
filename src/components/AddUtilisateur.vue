<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Utilisateur</h1>
            <div class="utili">
                <button><router-link to="AddUtiEns">Enseignant</router-link></button>
                <button><router-link to="AddUtiPer">Personnel</router-link></button>
            </div>
        </div>


        <div class="extrabar">
            <Extrabar />
        </div>
    </div>
</template>

<script>
import Extrabar from './Extrabar.vue';
import Sidebar from './Sidebar.vue';
export default {
    components: {
        Extrabar,
        Sidebar,
    }
}

</script>