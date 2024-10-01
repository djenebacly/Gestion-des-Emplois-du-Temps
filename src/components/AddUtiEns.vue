
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
                            <label for="nbrEtudiant">Nom et Prénoms</label>
                            <input type="text" name="nomPenoms" id="nomPenoms" v-model="enseignant.nomPenoms">
                        </div>
                        <div>
                            <label for="numero">Numéro</label>
                            <input type="text" name="numero" id="numero" v-model="enseignant.numero">
                        </div>
                        <div>
                            <label for="adresse">Adresse</label>
                            <input type="text" name="adresse" id="adresse" v-model="enseignant.adresse">
                        </div>
                        <div>
                            <label for="login">Login</label>
                            <input type="text" name="login" id="login" v-model="utilisateur.login">
                        </div>
                    </div>
                    <div class="droite">
                        <div>
                            <label for="matricule">Matricule</label>
                            <input type="text" name="matricule" id="matricule" v-model="enseignant.matricule">
                        </div>
                        <div>
                            <label for="e_mail">E_mail</label>
                            <input type="email" name="e_mail" id="e_mail" v-model="enseignant.e_mail">
                        </div>
                        <div>
                            <label for="role">Rôle</label>
                            <input type="text" name="role" id="role" placeholder="Enseignant" readonly>
                        </div>
                        <div>
                            <label for="motDePasse">Mot de passe</label>
                            <input type="password" name="motDePasse" id="motDePasse" v-model="utilisateur.motDePasse">
                        </div>
                    </div>
                </div>
                <div class="bas">
                    <input type="submit" value="Ajouter" class="ajouter" v-on:click="addUtiEns">
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
            enseignant: {
                nomPenoms: '',
                matricule: '',
                numero: '',
                e_mail: '',
                adresse: '',
            },
            utilisateur: {
                login: '',
                motDePasse: '',
                role:'Enseignant',
            }

        }
    },
    methods: {
        async addUtiEns() {
            let result = await axios.post("http://localhost:3000/enseignant", {
                nomPenoms: this.enseignant.nomPenoms,
                matricule: this.enseignant.matricule,
                numero: this.enseignant.numero,
                e_mail: this.enseignant.e_mail,
                adresse: this.enseignant.adresse,
            })
            let result1 = await axios.post("http://localhost:3000/utilisateur", {
                login: this.utilisateur.login,
                motDePasse: this.utilisateur.motDePasse,
                role:this.utilisateur.role
            })
            if (result.status == 201 && result1.status==201) {
                localStorage.setItem("enseignant-info", JSON.stringify(result.data))
                localStorage.setItem("utilisateur-info", JSON.stringify(result1.data))
                this.$router.push({ name: 'Utilisateur' })
            }
        }
    }
    
}

</script>