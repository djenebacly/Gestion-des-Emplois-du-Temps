<!-- eslint-disable vue/multi-word-component-names -->

<template>

    <div class="dashboard-container">
        <div class="main-sidebar">
            <Sidebar />

        </div>


        <div class="main-contenair">
            <h1 class="main-title">Tableau de bord</h1>

            <!--<div class="insights">
                <div class="card">
                    <div class="card-contenaire">
                        <div class="card-header">
                            <span class="material-icons-sharp">
                                bar_chart
                            </span>
                        </div>
                        <div class="card-body">
                            <div class="card-info">
                                <h3>Ventes Total</h3>
                                <h1>2.03M</h1>
                            </div>
                            <div class="card-progress">
                                <svg width="96" height="96" >
                                    <circle id="circle" cx="38" cy="38" r="36" class="stroke-yellow"></circle>
                                </svg>
                                <div class="poucentage">
                                    <p>17%</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small>Sur les 48h précedantes</small>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-contenaire">
                        <div class="card-header">
                            <span class="material-icons-sharp">
                                bar_chart
                            </span>
                        </div>
                        <div class="card-body">
                            <div class="card-info">
                                <h3>Ventes Total</h3>
                                <h1>2.03M</h1>
                            </div>
                            <div class="card-progress">
                                <svg width="96" height="96" >
                                    <circle id="circle" cx="38" cy="38" r="36" class="stroke-fuscha"></circle>
                                </svg>
                                <div class="poucentage">
                                    <p>17%</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small>Sur les 48h précedantes</small>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-contenaire">
                        <div class="card-header">
                            <span class="material-icons-sharp">
                                bar_chart
                            </span>
                        </div>
                        <div class="card-body">
                            <div class="card-info">
                                <h3>Ventes Total</h3>
                                <h1>2.03M</h1>
                            </div>
                            <div class="card-progress">
                                <svg width="96" height="96" >
                                    <circle id="circle" cx="38" cy="38" r="36" class="stroke-cyan"></circle>
                                </svg>
                                <div class="poucentage">
                                    <p>17%</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small>Sur les 48h précedantes</small>
                        </div>
                    </div>
                </div>
            </div>-->

            <section class="recent-orders">
                <div class="ro-title">
                    <h2 class="recent-orders-title">L'emplois du temps</h2>
                    <a href="#" class="Show all">Tout affiché</a>
                </div>
                <input type="text" placeholder="Ex:05 au 10 Janvier 2025" name="dateDF" id="dateDF">
                <div class="emplois" v-for="item in seance" :key="item.id">
                    <div class="trait">
                        <img src="/public/UNIVERSITE.png" alt="PHOTO" height="100px">
                        <div class="inst">Institut Universitaire de Formation Professionnelle</div>
                        <div class="edt">Emplois du temps </div>
                    </div>
                    <div class="ro-title">
                        <h4>Classe : {{ item.idClasse }}</h4>
                        <h4>Salle :{{ item.idSalle }}</h4>
                    </div>
                    <table class="tableau" border="1">
                        <tr>
                            <th>Horaire</th>
                            <th>Lundi</th>
                            <th>Mardi</th>
                            <th>Mercredi</th>
                            <th>Jeudi</th>
                            <th>Vendredi</th>
                            <th>Samedi</th>
                        </tr>
                        <tr>
                            <td>
                                <div>{{ item.heureDebut }}h - {{ item.heurePauseDebut }}h</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>Examen</div>
                                <div>{{ item.heureExamenDebut }}h - {{ item.heureExamenFin }}h</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>{{ item.heurePauseDebut }}h - {{ item.heurePauseFin }}h</div>
                            </td>
                            <td>
                                <div>Pause</div>
                            </td>
                            <td>
                                <div>Pause</div>
                            </td>
                            <td>
                                <div>Pause</div>
                            </td>
                            <td>
                                <div>Pause</div>
                            </td>
                            <td>
                                <div>Pause</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>{{ item.heurePauseFin }}h - {{ item.heureFin }}h</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                            <td>
                                <div>{{ item.idEnseignant }}</div>
                                <div>{{ item.idCours }}</div>
                            </td>
                        </tr>
                    </table>
                    <div class="cote">
                        <div class="date">Ségou, le <input type="text" placeholder="Ex:01 Janvier 2025" ></div>
                        <div class="der">Le Chef de DER ST</div>
                        <div class="date">DR Amadou K. dit AMOBO Waïgalo</div>
                        <div class="gder">Maître-Assistant</div>
                    </div>
                </div>


            </section>
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
            seance: [],

        }
    },

    async mounted() {
        let utilisateur = localStorage.getItem('utilisateur-info');
        if (!utilisateur) {
            // this.$router.push({name: 'SignUp'})
        }

        let result = await axios.get("http://localhost:3000/seance");
        this.seance = result.data;
    }

}

</script>