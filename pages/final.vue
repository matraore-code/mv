<template>
    <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
            <div class="container-fluid  h-24">
        <img src="assets/images/logo.png" alt="" srcset="" class="mx-auto w-48 pt-3">
    </div>


    <section class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div class="rounded-t bg-white mb-0 px-6 py-6">
                    <div class="text-center flex justify-between">
                        <h6 class="text-blueGray-700 text-xl font-bold">
                           Liens Sociaux
                        </h6>
                    </div>
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">

                        </h6>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                    Whatsapp
                                    </label>
                                    <input v-model="whatsapp" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="url Whatsapp">
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Facebook
                                    </label>
                                    <input v-model="facebook" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="url facebook">
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        LinkedIn
                                    </label>
                                    <input v-model="linkedin" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="url linkedin">
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Instagram
                                    </label>
                                    <input v-model="instagram" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="url instagram">
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlfor="grid-password">
                                        Tiktok
                                    </label>
                                    <input v-model="tiktok" type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="url Tiktok">
                                </div>
                            </div>
                            <span class="text-danger">{{ errors }}</span>
                            <button
                                id="UpdateUser" class="bg-red-400 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="submit"
                                v-on:click.prevent="UpdateData">
                                Commander
                            </button>
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
</template>
<script>
    export default {
        data () {
            return {
                whatsapp: "",
                facebook: "",
                linkedin: "",
                instagram: "",
                tiktok: "",
                errors: ""
            };
        },
        methods: {
            async UpdateData () {
                const userData = JSON.parse(localStorage.getItem("userData"));
                this.whatsapp = this.whatsapp.trim();
                this.facebook = this.facebook.trim();
                this.linkedin = this.linkedin.trim();
                this.instagram = this.instagram.trim();
                this.tiktok = this.tiktok.trim();
                try {
                    const response = await fetch(
                        `${"http://10.11.13.1:5000" || "http://localhost:5000"}/api/users/update/${userData.userId}`,
                        {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${userData.token}`
                            },
                            body: JSON.stringify({
                                "whatsapp": this.whatsapp,
                                "facebook": this.facebook,
                                "linkedin": this.linkedin,
                                "instagram": this.instagram,
                                "tiktok": this.tiktok
                            }) 
                        }
                    );
                    const content = await response.json();
                    if (content.message) {
                        this.errors = content.message;
                    } else {
                        await this.$router.push(`/profile/${userData.userId}`);
                    }
                } catch (err) {
                    console.log(err);
                    this.errors = "Something Went Wrong!";
                }
            }
        },
        mounted () {
            const userData = JSON.parse(localStorage.getItem("userData"));
            if (!userData || !userData.userId || !userData.token) {
                this.$router.push("/commande");
        }
    }
}
</script>