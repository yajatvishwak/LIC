<script>
  import { push } from "svelte-spa-router";
  export const darkText = false;
</script>

<div
  class={`border-b shadow-2xl  ${
    darkText === true ? "border-blue-900" : "border-gray-200"
  } backdrop-filter backdrop-blur-lg bg-opacity-30  z-20 w-full ${
    darkText === true ? "text-white" : "text-black"
  }`}
>
  <div class="max-w-screen-2xl  md:px-16 mx-auto">
    <div class="w-full p-5 flex items-center  ">
      <div class=" font-bold  md:text-xl lg:text-2xl ">
        <img src="./imgs/logo.png" class="w-28" alt="" srcset="" />
      </div>
      <div class=" gap-10 ml-auto mr-10 hidden md:flex ">
        <a
          href="#start"
          class="bg-yellow-300 px-6 py-2 rounded-xl font-bold cursor-pointer"
        >
          Plans
        </a>
      </div>
      <div class="md:hidden ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <!-- <div
        on:click={() => {
          push("/admin");
        }}
        class="font-bold   hidden md:flex lg:text-lg  rounded-xl hover:scale-90  transition-all cursor-pointer"
      >
        <img
          src="https://joeschmoe.io/api/v1/random"
          class="rounded-full w-14 bg-white border "
          alt=""
        />
      </div> -->
    </div>
  </div>
</div>
