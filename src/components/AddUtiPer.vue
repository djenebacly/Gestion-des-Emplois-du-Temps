
<template>
    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />
        </div>


        <div class="main-contenair">
            <h1 class="main-title">Enseignant</h1>
            <form action="">
                <!--<div class="haut">
                    <label for="idUtilisateure">ID</label>
                    <input type="number" name="idUtilisateure" id="idUtilisateure">
                </div>-->

                <div class="ensemble">
                    <div class="gauche">
                        <div>
                            <label for="login">Login</label>
                            <input type="text" name="login" id="login" v-model="utilisateur.login">
                        </div>
                        <div>
                            <label for="role">Rôle</label>
                            <input type="text" name="role" id="role" placeholder="Personnel" readonly>
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="motDePasse">Mot de passe</label>
                            <input type="password" name="motDePasse" id="motDePasse" v-model="utilisateur.motDePasse">
                        </div>
                        <div>
                            <label for="poste">Poste</label>
                            <select name="poste" id="poste" v-model="personnel.poste">
                                <option value="">----Choisie----</option>
                                <option value="Chef DER">Chef DER</option>
                                <option value="Secrétaire">Secrétaire</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Ajouter" class="ajouter" v-on:click="addUtiPer">
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
    data() {
        return {
            personnel: {
                poste:'',
            },
            utilisateur: {
                login: '',
                motDePasse: '',
                role: 'Personnel',
            }

        }
    },
    methods: {
        async addUtiPer() {
            let result = await axios.post("http://localhost:3000/personnel", {
                poste: this.personnel.poste,
            })
            let result1 = await axios.post("http://localhost:3000/utilisateur", {
                login: this.utilisateur.login,
                motDePasse: this.utilisateur.motDePasse,
                role: this.role,
            })
            if (result.status == 201 && result1.status==201) {
                localStorage.setItem("personnel-info", JSON.stringify(result.data))
                localStorage.setItem("utilisateur-info", JSON.stringify(result1.data))
                this.$router.push({ name: 'Utilisateur' })
            }
        }
    },
    
}

</script>