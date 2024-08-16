<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="aside-header">
    <div class="brand">
        <img src="/public/horloge1.jpg" alt="PHOTO">
        <h3>Emplois du Temps</h3>
    </div>
    <!--<div class="close" id="closeSidebar">
        <span class="material-icons-sharp">
            close
        </span>
    </div>-->
</div>
<div class="sidebar">
    <ul class="list-items">
        <li class="item">
            <router-link to="/">
                <span class="material-icons-sharp">
                    dashboard
                </span>
                <span>Tableau de board</span>
            </router-link>
        </li>
        <li class="item">
            <router-link to="/Classe">
                <span class="material-icons-sharp">
                    class
                </span>
                <span>Classe</span>
            </router-link>
        </li>
        <li class="item">
            <router-link to="/Filiere">
                <span class="material-icons-sharp">
                    list_alt
                </span>
                <span>Filière</span>
            </router-link>
        </li>
        <li class="item">
            <router-link to="/Niveaux">
                <span class="material-icons-sharp">
                    format_list_numbered_rtl
                </span>
                <span>Niveaux</span>
            </router-link>
        </li>
        <li class="item">
            <router-link to="/Salle">
                <span class="material-icons-sharp">
                    maps_home_work
                </span>
                <span>Salle</span>
            </router-link>
        </li>
        <li class="item">
            <router-link to="/Cours">
                <span class="material-icons-sharp">
                    import_contacts
                </span>
                <span>Cours</span>
            </router-link>
        </li>
        <li class="item">
            <router-link to="/Seance">
                <span class="material-icons-sharp">
                    work_history
                </span>
                <span>Séance</span>
            </router-link>
        </li>
        <li class="item">
            <a href="#">
                <span class="material-icons-sharp">
                    power_settings_new
                </span>
                <span>Déconnection</span>
            </a>
        </li>
    </ul>
</div>
</template>

