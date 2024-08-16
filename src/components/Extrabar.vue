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
    <div class="profile">
        <div class="profile-info">
            <p>Salut, <strong>Moi</strong></p>
            <small>Admin</small>
        </div>
        <div class="profile-image">
            <img src="/public/DC.jpg" alt="" width="100%">
        </div>
    </div>
</header>
<div class="recent-updates">
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
</div>
</template>
