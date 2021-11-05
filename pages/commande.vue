<template>
     <div class="container-fluid  h-24">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
        <img src="~/static/assets/images/logo.png" alt="" srcset="" class="mx-auto w-48 pt-3">
        <div class="section">
                <section class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div class="rounded-t bg-white mb-0 px-6 py-6">
                    <div class="text-center flex justify-between">
                        <h6 class="text-blueGray-700 text-xl font-bold">
                            Mes Informations
                        </h6>
                        <button
                            class="bg-red-400 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit"
                            v-on:click.prevent="submit" >
                            Suivant >
                        </button>
                    </div>
                </div>
                <div class="flex-auto px-2 lg:px-10 py-10 pt-0">
                    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
                    <form method="POST" action="./commande_final.html" id="sendForm">
                        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">

                        </h6>

                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-8">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Photo
                                      </label>
                                      <div class="mt-1 flex items-center">
                                        <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                          <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                          </svg>
                                        </span>
                                        <input ref="file" type="file" @change="onSelect" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                    Adresse email
                                    </label>
                                    <input v-model="email" type="email"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="moctar@example.com">
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Prénom (s)
                                    </label>
                                    <input v-model="surname" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Moctar">
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Nom
                                    </label>
                                    <input v-model="name" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Traore">
                                </div>
                            </div>
                        </div>

                        <hr class="mt-6 border-b-1 border-blueGray-300">

                        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Contact
                        </h6>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-12/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Telephone
                                    </label>
                                    <input v-model="telephone" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="+212 600 000 000">
                                </div>
                            </div>
                            <div class="w-full lg:w-12/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Adresse
                                    </label>
                                    <input v-model="address" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09">
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Ville
                                    </label>
                                    <input v-model="city" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="New York">
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Pays
                                    </label>
                                    <input v-model="country" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="United States">
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Code Postal 
                                    </label>
                                    <input v-model="codePostal" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Postal Code">
                                </div>
                            </div>
                        </div>

                        <hr class="mt-6 border-b-1 border-blueGray-300">

                        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Biographie
                        </h6>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-12/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Profession
                                    </label>
                                    <input v-model="profession" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Developpeur Web">
                                </div>
                            </div>
                            <div class="w-full lg:w-12/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Biographie
                                    </label>
                                    <textarea v-model="biography" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        rows="4" placeholder="Write Your Biography Here!"></textarea>
                                </div>
                                <span class="text-danger">{{ errors }}</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <footer class="relative  pt-8 pb-6 mt-2">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div class="text-sm text-blueGray-500 font-semibold py-1">
                                <span>B-CARTE 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </section>
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                image: null,
                email: "",
                name: "",
                surname: "",
                telephone: "",
                address: "",
                city: "",
                country: "",
                codePostal: "",
                profession: "",
                biography: "",
                errors: "",
            };
        },
        methods: {
            onSelect() {
                const file = this.$refs.file.files[0];
                this.image = file;
            },
            check_all() {
                this.name = this.name.trim();
                this.surname = this.surname.trim();
                this.email = this.email.trim();
                this.telephone = this.telephone.trim();
                this.profession = this.profession.trim();
                this.address = this.address.trim();
                this.city = this.city.trim();
                this.codePostal = this.codePostal.trim();
                this.biography = this.biography.trim();
                if (
                    this.name === "" ||
                    this.surname === "" ||
                    this.email === "" ||
                    this.telephone === "" ||
                    this.prefession === "" ||
                    this.address === "" ||
                    this.city === "" ||
                    this.codePostal === "" ||
                    this.country === "" ||
                    this.biography === ""
                ) {
                    this.errors = "Remplir tous les champs.";
                } else if (this.image == null)
                {
                    this.errors = "Please choose un image.";
                }
                else {
                    this.errors = "";
                }
            },
            async submit () {
                this.check_all()
                if (this.errors === "") {
                    try {
                        const formData = new FormData();
                        formData.append("image", this.image);
                        formData.append("email", this.email);
                        formData.append("surname", this.surname);
                        formData.append("name", this.name);
                        formData.append("telephone", this.telephone);
                        formData.append("address", this.address);
                        formData.append("city", this.city);
                        formData.append("country", this.country);
                        formData.append("codePostal", this.codePostal);
                        formData.append("profession", this.profession);
                        formData.append("biography", this.biography);
                        const response = await fetch(
                            `${process.env.NUXT_APP_API_ENDPOINT || "http://10.11.13.5:5000"}/api/users/signup`,
                            {
                                method: "POST",
                                body: formData
                            }
                        );
                        const content = await response.json();
                        if (content.message) {
                            this.errors = content.message;
                        }
                        else {
                            localStorage.setItem(
                                "userData",
                                JSON.stringify({
                                  userId: await content.userId,
                                  token: await content.token,
                                })
                            );
                            await this.$router.push("/final");
                        }
                    } catch (err) {
                        console.log(err);
                        this.errors = "Something Went Wrong!";
                    }
                }
            }
        }
    }
</script>