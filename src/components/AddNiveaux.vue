
<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Niveaux</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idNiveaux">ID</label>
                    <input type="number" name="idNiveaux" id="idNiveaux">
                </div>-->
                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="licence">Licence</label>
                            <select name="licence" id="licence" v-model="niveaux.licence">
                                <option value="">----Choisie----</option>
                                <option value="L1">L1</option>
                                <option value="L2">L2</option>
                                <option value="L3">L3</option>
                            </select>
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="semestre">Semestre</label>
                            <select name="semestre" id="semestre" v-model="niveaux.semestre">
                                <option value="0">----Choisie----</option>
                                <option value="S1">S1</option>
                                <option value="S2">S2</option>
                                <option value="S3">S3</option>
                                <option value="S4">S4</option>
                                <option value="S5">S5</option>
                                <option value="S6">S6</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Ajouter" class="ajouter" v-on:click="addNiveaux">
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
            niveaux:{
                licence:'',
                semestre:'',
            }
        }
    },
    methods:{
       async addNiveaux(){
            let result=await axios.post("http://localhost:3000/niveaux",{
                licence:this.niveaux.licence,
                semestre:this.niveaux.semestre,
            })
            if (result.status==201) {
                localStorage.setItem("niveaux-info", JSON.stringify(result.data))
                this.$router.push({name:'Niveaux'})
            }
        }
    }
}

</script>