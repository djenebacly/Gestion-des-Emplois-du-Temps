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
                    <h2 class="recent-orders-title">Les emplois du temps récents</h2>
                    <a href="#" class="Show all">Tout affiché</a>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produit</th>
                            <th>Serie</th>
                            <th>Payé</th>
                            <th>Min</th>
                            <th>Jous</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12</td>
                            <td>PC</td>
                            <td>fdsf667</td>
                            <td class="text">NON</td>
                            <td>9 minim</td>
                            <td>3 jours restants</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>PC</td>
                            <td>fdsf667</td>
                            <td class="text">NON</td>
                            <td>9 minim</td>
                            <td>3 jours restants</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>PC</td>
                            <td>fdsf667</td>
                            <td class="text">NON</td>
                            <td>9 minim</td>
                            <td>3 jours restants</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>PC</td>
                            <td>fdsf667</td>
                            <td class="text">NON</td>
                            <td>9 minim</td>
                            <td>3 jours restants</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>PC</td>
                            <td>fdsf667</td>
                            <td class="text">NON</td>
                            <td>9 minim</td>
                            <td>3 jours restants</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>PC</td>
                            <td>fdsf667</td>
                            <td class="text">NON</td>
                            <td>9 minim</td>
                            <td>3 jours restants</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </div>


        <div class="extrabar">
            <Extrabar />
            
        </div>
    </div>
</template>

<script>
import Extrabar from './Extrabar.vue';
import Sidebar from './Sidebar.vue';
export default{
    components:{
        Extrabar,
        Sidebar,
    },
}

</script>