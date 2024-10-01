<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <!--div class="registe">
        <h2>Connexion</h2>
        <label for="login">Nom d'utilisateur</label>
        <input type="text" name="login" id="login" v-model="login">
        <label for="motDePasse">Mot de passe</label>
        <input type="password" name="motDePasse" id="motDePasse" v-model="motDePasse">
        <input type="submit" value="Connexion" v-on:click="connect">
    </div>
    <div>
        <router-link to="Inscription">J'ai pas un compte</router-link>
    </div-->
    <div class="body">
        <div class="blob"></div>
        <div class="form-container">
            <div class="forme">
                <h1>Connexion</h1>
                <div class="form-groupe">
                    <input type="text" name="login" id="login" v-model="login">
                    <label for="login">Nom d'utilisateur</label>
                    <span class="material-icons-sharp">
                        email
                    </span>
                </div>
                <div class="form-groupe">
                    <input type="password" name="motDePasse" id="motDePasse" v-model="motDePasse">
                    <label for="motDePasse">Mot de passe</label>
                    <span class="material-icons-sharp">
                        key
                    </span>
                </div>
                <div class="form-options">
                    <router-link to="">Mot de passe ou login oublié?</router-link>
                </div>
                <button v-on:click="connect"> Se connecter</button>
                <div class="registre">
                    <p>
                        Vous n'avez pas de compte?
                        <router-link to="Inscription"> Créer </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            login: '',
            motDePasse: '',

        }
    },

    methods: {
        async connect() {
            let result = await axios.get(`http://localhost:3000/utilisateur?login=${this.login}&motDePasse=${this.motDePasse}`);


            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("utilisateur-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Acceuil' })
            }

        }
    },

    mounted() {
        let utilisateur = localStorage.getItem('utilisateur-info');
        if (!utilisateur) {
            //this.$router.push({ name: 'Acceuil' })
        }
    }

}
</script>


