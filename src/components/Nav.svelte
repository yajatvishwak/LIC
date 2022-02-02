<script>
  import { push } from "svelte-spa-router";

  export const darkText = false;
</script>

<div
  class={`border-b ${
    darkText === true ? "border-indigo-900" : "border-gray-200"
  } backdrop-filter backdrop-blur-lg bg-opacity-30  z-20 w-full ${
    darkText === true ? "text-white" : "text-black"
  }`}
>
  <div class="max-w-screen-2xl  md:px-16 mx-auto">
    <div class="w-full p-5 flex items-center justify-between ">
      <div class=" font-bold  md:text-xl lg:text-2xl ">
        Vikrant Sir's Company
      </div>
      <div
        on:click={() => {
          push("/admin");
        }}
        class="font-bold  lg:text-lg  rounded-xl hover:scale-90  transition-all cursor-pointer"
      >
        <img
          src="https://joeschmoe.io/api/v1/random"
          class="rounded-full w-14 bg-white border "
          alt=""
        />
      </div>
    </div>
  </div>
</div>
