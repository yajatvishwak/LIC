<script>
  import { push } from "svelte-spa-router";
  import Nav from "../components/Nav.svelte";
</script>

<section class="">
  <Nav />
  <section
    class="min-h-96 max-w-screen-2xl mx-auto  flex justify-center items-center flex-1 flex-shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48"
  >
    <!-- image - start -->
    <img
      src="https://static.vecteezy.com/system/resources/previews/002/743/198/non_2x/topographic-map-contour-lines-background-free-vector.jpg"
      loading="lazy"
      alt="Photo by Fakurian Design"
      class="w-full h-full object-cover object-center absolute inset-0"
    />
    <!-- image - end -->

    <!-- overlay - start -->
    <div class="bg-indigo-500 mix-blend-multiply absolute inset-0" />
    <!-- overlay - end -->

    <!-- text start -->
    <div class="sm:max-w-xl flex flex-col items-center relative p-4">
      <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
        Very proud to introduce
      </p>
      <h1
        class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12"
      >
        The world's Best Insurance Look up Company
      </h1>

      <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
        <a
          href="#start"
          class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >Start now</a
        >
      </div>
    </div>
    <!-- text end -->
  </section>
  <div id="start" class="bg-white mt-10 py-6 sm:py-8 lg:py-12 lg:pt-6">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="text-center py-10 pt-0 text-3xl font-bold">
        Our plans for you
      </div>

      <div class="flex flex-wrap md:flex-nowrap gap-4">
        <div
          on:click={() => push("/life")}
          class="flex flex-col border hover:bg-indigo-300 transition-all  cursor-pointer w-full p-5 rounded-lg"
        >
          <div class="font-bold text-xl  text-indigo-500 ">
            <div class="flex items-center">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2415/premium/2415177.png?token=exp=1640372516~hmac=bbbeecc891d46b20a88b40063ede23b6"
                alt=""
                class="w-10"
                srcset=""
              />
              <div class="ml-6 text-2xl">Life Insurance</div>
            </div>
            <div class="text-black font-normal mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>

        <div
          on:click={() => push("/general")}
          class="flex flex-col border  hover:bg-indigo-300  transition-all cursor-pointer w-full p-5 rounded-lg"
        >
          <div class="font-bold text-xl  text-indigo-500 ">
            <div class="flex items-center">
              <img
                src="https://cdn-icons.flaticon.com/png/512/4544/premium/4544523.png?token=exp=1640408113~hmac=e8ebc614202c1be9e7a4e1a2b41fb85d"
                alt=""
                class="w-10"
                srcset=""
              />
              <div class="ml-6 text-2xl">Car Insurance</div>
            </div>
            <div class="text-black font-normal mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div
          on:click={() => push("/health")}
          class="flex flex-col border  hover:bg-indigo-300 transition-all  cursor-pointer w-full p-5 rounded-lg"
        >
          <div class="font-bold text-xl  text-indigo-500 ">
            <div class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2966/2966334.png"
                alt=""
                class="w-10"
                srcset=""
              />
              <div class="ml-6 text-2xl">Health Insurance</div>
            </div>
            <div class="text-black font-normal mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
