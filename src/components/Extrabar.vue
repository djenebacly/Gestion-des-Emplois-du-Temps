<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <header class="header-right">
        <button class="toggle-menu-btn" id="openSidebar">
            <span class="material-icons-sharp">
                menu
            </span>
        </button>
        <div class="toggle-theme" name="toggle-theme">
            <span class="material-icons-sharp active l">
                light_mode
            </span>
            <span class="material-icons-sharp d">
                dark_mode
            </span>
        </div>
        
    </header>
    <div class="profiles">
        <div class="profile">
            <div class="profile-info">
                <p>Salut,</p>
                <strong>{{ login }}</strong>
               
            </div>
            <div class="profile-icon">
                <span class="material-icons-sharp">
                    person
                </span>
                <small>{{role}} {{poste}}</small>
                <!--img src="/public/DC.jpg" alt="" width="100%"-->
            </div>
        </div>
    </div>
    <!--div class="recent-updates">
    <h2>Infos récentes</h2>
    <div class="updates-contenaire">
        <div class="update">
            <div class="profile-image">
                <img src="/public/DC.jpg" alt="" width="100%">
            </div>
            <div class="message">
                <p><strong>Djénéba</strong>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        <div class="update">
            <div class="profile-image">
                <img src="/public/DC.jpg" alt="" width="100%">
            </div>
            <div class="message">
                <p><strong>Djénéba</strong>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        <div class="update">
            <div class="profile-image">
                <img src="/public/DC.jpg" alt="" width="100%">
            </div>
            <div class="message">
                <p><strong>Djénéba</strong>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    </div>
</div-->
</template>

<script>


export default {
    data() {
        return {
            login: '',
            role: '',
            poste:'',
        }
    },

    mounted() {
        let utilisateur = localStorage.getItem('utilisateur-info');
       // let personnel = localStorage.getItem('personnel-info');
        this.login = JSON.parse(utilisateur).login;
        this.role = JSON.parse(utilisateur).role;
       // this.personnel = JSON.parse(personnel).poste;
        if (!utilisateur) {
            //this.$router.push({name: 'Acceuil'})
        }
    }
}

</script>
