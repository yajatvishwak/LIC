<script>
  export let openModal;
  export let agentID;
</script>

<div
  on:click={() => openModal(agentID)}
  class="border p-5 hover:bg-blue-300 flex-col md:flex-row hover:text-blue-700 transition-all cursor-pointer rounded-xl flex items-center justify-between"
>
  <div class="flex items-center gap-3">
    <img
      src="https://joeschmoe.io/api/v1/random"
      class="rounded-full w-14 bg-white border "
      alt=""
    />
    <div class="text-xl text-center  my-5 md:my-0 mx-5 font-bold ">
      This is the name of the agent
    </div>
  </div>
  <div class="flex">
    <div class="mx-3 font-bold">Connect</div>
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
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </div>
</div>
