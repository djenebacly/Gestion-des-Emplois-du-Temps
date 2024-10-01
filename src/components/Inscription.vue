<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="body">
        <div class="blob"></div>
        <div class="form-container">
            <div class="forme">
                <h1>Inscription</h1>
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
                <button v-on:click="inscription"> S'inscrire</button>
                <div class="registre">
                    <p>
                        Vous avez déjà un compte?
                        <router-link to="/"> Créer </router-link>
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
            etudiant:{

            },
            utilisateur: {
                login: '',
                motDePasse: '',
                role: 'Etudiant',
            }
        }
    },

    methods: {
        async inscription() {
            let result = await axios.post("http://localhost:3000/etudiant", {
                
            })
            let result1 = await axios.post("http://localhost:3000/utilisateur", {
                login: this.login,
                motDePasse: this.motDePasse,
                role: this.role,
            });

            if (result.status == 201 && result1.status == 201) {
                localStorage.setItem("etudiant-info", JSON.stringify(result.data))
                localStorage.setItem("utilisateur-info", JSON.stringify(result1.data))
                //this.$router.push({name: 'Acceuil'})
            }
        }
    },

    mounted() {
        let utilisateur = localStorage.getItem('utilisateur-info');
        if (!utilisateur) {
            //this.$router.push({name: 'Acceuil'})
        }
    }
}
</script>
<style>
:root {
    --white: #fff;
    --lights:#cfcfcd;
    --pink: #d4a25d;
    --lg: #16eac9;
    --fc: #8f9699;
    --bg: #0a1428;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', 'sans-serif';
}

.body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--fc);
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(225, 255, 255, 0.1);
    border: 3px solid rgba(225, 255, 255, 0.2);
    padding-block: 48px;
    padding-inline: 48px;
    height: 480px;
    width: 400px;
    border-radius: 16px;
    z-index: 1;
    position: relative;
}

.form-container h1 {
    text-align: center;
    font-size: 2.3em;
    margin-block-end: 3%;
    margin-bottom: 40px;
}

.forme .form-groupe {
    margin-block-end: 2rem;
}

.form-groupe input {
    width: 100%;
    padding-bottom: 8px 0;
    padding-inline: 8px 36px;
    height: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--white);
    font-size: 1em;
    font-weight: 500;
    transition: .25s ease-in-out;
}

.form-groupe input:focus,
.form-groupe input:valid {
    border-color: var(--pink);
}

.form-groupe label {
    position: absolute;
    color: var(--white);
    margin-top: 50%;
    left: 20%;
    transform: translateY(-90%);
    font-size: 1.2em;
    font-weight: 500;
    pointer-events: none;
}

.form-groupe input:focus~label,
.form-groupe input:valid~label {
    margin-top: 0;
    color: var(--pink);
}

.form-groupe span {
    position: absolute;
    font-size: 1.1em;
    color: var(--white);
}

.form-groupe input:focus~span,
.form-groupe input:valid~span {
    color: var(--pink);
}

.form-container .form-options a {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: var(--bg);
    text-decoration: none;
    margin-bottom: 20px;
}

.form-options a:hover {
    text-decoration: underline;
    color: var(--pink);
}

.form-container button {
    width: 100%;
    height: 48px;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    margin-block: 10px 20px;
    background-color: var(--pink);
    color: var(--white);
    border: none;
    outline: none;
    cursor: pointer;
    transition: color .30s ease-in-out, background-color .25s ease-in-out;
}

.form-container button:hover {
    background-color: var(--bg);
    color: var(--pink);
}

.registre {
    text-align: center;
}

.registre p {
    color: var(--bg);
    font-weight: 400;
    font-size: 14px;
}

.registre a {
    color: var(--bg);
    font-weight: 600;
    text-decoration: none;
    transition: .25s ease-in-out;
}

.registre a:hover {
    color: var(--pink);
    text-decoration: underline;
}

.blob {
    position: absolute;
    height: 440px;
    width: 440px;
    background: linear-gradient(360deg, red 20%, purple 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: translate(250px , 8px) rotate(100deg);
    animation: blob 16s infinite alternate;
}

.blob:hover{
    filter: blur(30px);
    width: 560px;
    height: 560px;
}
@keyframes blob {
    5%{
        transform: translate(250px, 80%) rotate(60deg);
    }
    40%{
        transform: translate(60%, -50%) rotate(30deg);
        border-radius: 63% 37% 67% 33% / 33% 49% 51% 69%;
    }
    5%{
        transform: translate(-60%, 5%) rotate(-100deg);
        border-radius: 42% 58% 45% 55% / 36% 55% 45% 62%;
    }
}


</style>