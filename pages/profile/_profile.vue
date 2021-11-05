<template>
<div>
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
    />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
    <section class="pt-16 bg-blueGray-50">
      <div class="w-full lg:w-4/12 px-4 mx-auto">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-1">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4 flex justify-center">
                <div class="relative">
                  <img
                    :src="image"
                    alt="..."
                    class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div class="w-full px-4 text-center mt-20">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      <a id="UserMessage" :href="sms"><i class="fas fa-envelope mr-2 text-lg"></i></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Message</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      <a id="UserTelephone" :href="telephone"><i class="fas fa-phone mr-2 text-lg"></i></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Telephone</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      <a id="UserEmail" :href="email"><i class="fas fa-at mr-2 text-lg"></i></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Email</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                <span>{{ fullName }}</span>
              </h3>
              <div
                class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                <span>{{ cityCountry }} </span>
              </div>
              <div class="mb-2 text-blueGray-600 mt-4">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                <span id="UserProfession"></span>
              </div>
              <!-- <div id="WHATISTHIS" class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                1337 Coding School
              </div> -->
            </div>
            <div class="mt-10 pt-8 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-2">
                  <p class="mb-2 text-lg leading-relaxed text-blueGray-700 text-justify">{{ biography }}</p>
                </div>
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-start">
                <div class="w-full lg:w-9/12 bg-blue-400 py-3 px-2 rounded-md mb-4">
                  <a id="UserLinkedin" :href="linkedin" class="text-white">
                    <i class="float-left fab fa-linkedin mr-2 text-lg"></i>
                    Linkedin
                  </a>
                </div>
                <div class="w-full lg:w-9/12 bg-green-400 py-3 px-2 rounded-md mb-4">
                  <a id="UserWhatsapp" :href="whatsapp" class="text-white">
                    <i class="float-left fab fa-whatsapp mr-2 text-lg"></i>
                    Whatsapp
                  </a>
                </div>
                <div class="w-full lg:w-9/12 bg-blue-600 py-3 px-2 rounded-md mb-4">
                  <a id="UserFacebook" :href="facebook" class="text-white">
                    <i class="float-left fab fa-facebook mr-2 text-lg"></i>
                    Facebook
                  </a>
                </div>
                <div class="w-full lg:w-9/12 bg-red-600 py-3 px-2 rounded-md mb-4">
                  <a id="UserInstagram" :href="instagram" class="text-white">
                    <i class="float-left fab fa-instagram mr-2 text-lg"></i>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-2 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-start">
                <div class="w-full lg:w-9/12 bg-blue-400 py-3 px-2 rounded-md mb-4">
                  <a href="#" class="text-white">Enregistrer</a>
                </div>
              </div>
              <span class="text-danger">{{ errors }}</span>
            </div>
          </div>
        </div>
      </div>
      <footer class="relative pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                <a href="#">b-carte 2021</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fetched: false,
        image: "",
        fullName: "",
        cityCountry: "",
        biography: "",
        sms: "",
        telephone: "",
        email: "",
        linkedin: "",
        whatsapp: "",
        facebook: "",
        instagram: "",
        errors: ""
      }
    },
    async mounted() {
      try {
        console.log(process.env.NUXT_APP_API_ENDPOINT);
        if (!this.$route.params.profile) {
          this.$router.push("/");
        }
        const response = await fetch(
          `${process.env.NUXT_APP_API_ENDPOINT || "http://localhost:5000"}/api/users/${this.$route.params.profile}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const content = await response.json();
        if (content.message) {
          this.errors = content.message;
        } else {
          const user = await content.user;

          this.fetched = true;
          this.image = `${process.env.NUXT_APP_API_ENDPOINT || "http://localhost:5000"}/${user.image}`;
          this.fullName = `${user.surname} ${user.name}`;
          this.cityCountry = `${user.city}, ${user.country}`;
          this.sms = `sms:${user.telephone}`;
          this.telephone = `tel:${user.telephone}`;
          this.email = `mailto:${user.email}`;
          this.linkedin = `${user.linkedin}`;
          this.whatsapp = `${user.whatsapp}`;
          this.facebook = `${user.facebook}`;
          this.instagram = `${user.instagram}`;
          this.biography = user.biography;
        }
      } catch (err) {
        console.log(err);
        this.errors = err;
      }
    }
  }
</script>