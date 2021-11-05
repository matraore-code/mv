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
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            mb-6
            shadow-xl
            rounded-lg
            mt-16
          "
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4 flex justify-center">
                <div class="relative">
                  <img
                    id="UserImage"
                    alt="..."
                    class="
                      shadow-xl
                      rounded-full
                      h-auto
                      align-middle
                      border-none
                      absolute
                      -m-16
                      -ml-20
                      lg:-ml-16
                      max-w-150-px
                    "
                  />
                </div>
              </div>
              <div class="w-full px-4 text-center mt-20">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="
                        text-xl
                        font-bold
                        block
                        uppercase
                        tracking-wide
                        text-blueGray-600
                      "
                    >
                      <a id="UserMessage"
                        ><i class="fas fa-envelope mr-2 text-lg"></i
                      ></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Message</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="
                        text-xl
                        font-bold
                        block
                        uppercase
                        tracking-wide
                        text-blueGray-600
                      "
                    >
                      <a id="UserTelephone" href="#"
                        ><i class="fas fa-phone mr-2 text-lg"></i
                      ></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Telephone</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="
                        text-xl
                        font-bold
                        block
                        uppercase
                        tracking-wide
                        text-blueGray-600
                      "
                    >
                      <a id="UserEmail" href="#"
                        ><i class="fas fa-at mr-2 text-lg"></i
                      ></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Email</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h3
                class="
                  text-xl
                  font-semibold
                  leading-normal
                  mb-2
                  text-blueGray-700
                  mb-2
                "
              >
                <span id="UserFullName"></span>
              </h3>
              <div
                class="
                  text-sm
                  leading-normal
                  mt-0
                  mb-2
                  text-blueGray-400
                  font-bold
                  uppercase
                "
              >
                <i
                  class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                ></i>
                <span id="UserCityCountry"></span>
              </div>
              <div class="mb-2 text-blueGray-600 mt-4">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                <span id="UserProfession"></span>
              </div>
              <div id="WHATISTHIS" class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                1337 Coding School
              </div>
            </div>
            <div class="mt-10 pt-8 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-2">
                  <p
                    id="UserBiography"
                    class="
                      mb-2
                      text-lg
                      leading-relaxed
                      text-blueGray-700 text-justify
                    "
                  >
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-start">
                <div
                  class="w-full lg:w-9/12 bg-blue-400 py-3 px-2 rounded-md mb-4"
                >
                  <a id="UserLinkedin" href="#" class="text-white">
                    <i class="float-left fab fa-linkedin mr-2 text-lg"></i>
                    Linkedin</a
                  >
                </div>
                <div
                  class="
                    w-full
                    lg:w-9/12
                    bg-green-400
                    py-3
                    px-2
                    rounded-md
                    mb-4
                  "
                >
                  <a id="UserWhatsapp" href="#" class="text-white">
                    <i class="float-left fab fa-whatsapp mr-2 text-lg"></i>
                    Whatsapp</a
                  >
                </div>
                <div
                  class="w-full lg:w-9/12 bg-blue-600 py-3 px-2 rounded-md mb-4"
                >
                  <a id="UserFacebook" href="#" class="text-white">
                    <i class="float-left fab fa-facebook mr-2 text-lg"></i>
                    Facebook</a
                  >
                </div>
                <div
                  class="w-full lg:w-9/12 bg-red-600 py-3 px-2 rounded-md mb-4"
                >
                  <a id="UserInstagram" href="#" class="text-white">
                    <i class="float-left fab fa-instagram mr-2 text-lg"></i>
                    Instagram</a
                  >
                </div>
              </div>
            </div>

            <div class="mt-2 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-start">
                <div
                  class="w-full lg:w-9/12 bg-blue-400 py-3 px-2 rounded-md mb-4"
                >
                  <a href="#" class="text-white">Enregistrer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="relative pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
          <div
            class="
              flex flex-wrap
              items-center
              md:justify-between
              justify-center
            "
          >
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