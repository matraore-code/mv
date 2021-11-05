<template>
  <div>
        <div class="container-fluid bg-yellow-100 h-24">
        <img src="assets/images/logo.png" alt="" srcset="" class="mx-auto w-48 pt-3">
    </div>
    <div class="container mb-12 mx-auto">
        <h1 class="text-4xl text-center mt-8 font-semibold">Contact sans contact avec la carte B-carte.</h1>
        <p class="text-center mt-3">Une alternative COVID-safe et respectueuse de l'environnement aux cartes de visite
            traditionnelles.</p>
        <img src="assets/images/bg_01.png" alt="" srcset="" class="mb-12 mx-auto">
        <div class="text-center">
            <a href="commande.html" class="bg-red-400 text-white px-5 py-3 mt-8 text-center rounded-md">Commander</a>
        </div>
    </div>
    <div class="container-fluid bg-yellow-100 rounded-xl mt-14 p-8">
      <div class="row">
        <div class=" mt-14 container mx-auto">
          <img src="assets/images/how.png" alt="" srcset="" />
        </div>
        <div class="col-md-6 container mx-auto">
          <div>
            <h1
              class="text-center mx-auto mt-8 text-4xl text-red-400 font-semibold my-5"
            >
              Pourquoi utiliser la carte B-carte?
            </h1>
            <p class="text-center my-3">
              1. Dans ce monde COVID-19, nous devons nous assurer que nous
              faisons tout notre possible pour nous protéger et protéger les
              autres. B-carte permet un transfert transparent de toutes vos
              coordonnées sans avoir besoin d'échanger physiquement des cartes
              ou de télécharger des applications supplémentaires !
            </p>
            <p class="text-center mb-5">
              2. Les cartes de visite traditionnelles sont imprimées en vrac, se
              périment rapidement et sont souvent simplement jetées. B-carte
              vous permet de mettre à jour vos informations à tout moment et de
              réutiliser la même carte encore et encore ! En savoir plus sur nos
              propres objectifs de développement durable pour 2021.
            </p>
            <div class="row container mt-4 p-3">
              <div class="col-md-4 mb-4">
                <div
                  class="
                    rounded-md
                    flex-wrap flex-col flex
                    items-center
                    justify-center
                    bg-white
                    py-4
                    px-3
                    text-center
                  "
                >
                  <h2 class="text-red-400 font-bold text-3xl me-2">27m</h2>
                  <span
                    >27 millions de cartes de visite sont imprimées
                    quotidiennement.</span
                  >
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div
                  class="
                    rounded-md
                    flex-wrap flex-col flex
                    items-center
                    justify-center
                    bg-white
                    py-4
                    px-3
                    text-center
                  "
                >
                  <h2 class="text-red-400 font-bold text-3xl me-2">88%</h2>
                  <span
                    >88% des cartes sont jetées en moins d'une semaine.</span
                  >
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div
                  class="
                    rounded-md
                    flex-wrap flex-col flex
                    items-center
                    justify-center
                    bg-white
                    py-4
                    px-3
                    text-center
                  "
                >
                  <h2 class="text-red-400 font-bold text-3xl me-2">88%</h2>
                  <span> 90% des adultes possèdent un smartphone.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div class="footer">
        <footer class="p-4 bg-white text-center">b-carte.tech 2021</footer>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap",
        },
        {
          rel: "stylessheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ],
    };
  },
};
</script>