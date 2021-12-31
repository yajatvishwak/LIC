<script>
  import AgentCard from "../../components/AgentCard.svelte";

  import { location } from "svelte-spa-router";
  import InsuranceBase from "./InsuranceBase.svelte";
  const gid = $location.substring($location.lastIndexOf("/") + 1);
  let modal = false;
  let selectedAgent = "";
  function openModal(selected) {
    selectedAgent = selected;
    modal = true;
  }
  function closeModal(params) {
    modal = false;
  }
</script>

{#if modal}
  <div class="min-h-full min-w-full absolute  backdrop-blur-sm z-10">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black text-white p-10 rounded-lg "
    >
      <div
        on:click={closeModal}
        class="p-2 rounded-full -top-3 -right-3 bg-indigo-600 absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      UNDER CONSTRUCTION {selectedAgent}
    </div>
  </div>
{/if}

<InsuranceBase>
  <div class="grid lg:grid-cols-2 gap-10">
    <div>
      <img
        src="https://via.placeholder.com/300x75"
        class="w-full  rounded-2xl"
        alt=""
      />
      <div class="mt-10 text-2xl font-bold">Title of the General insurance</div>
      <div class="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        doloremque magni eius aliquam voluptatibus quidem eaque corrupti magnam
        dolorum? Fugit consectetur voluptate voluptatibus illum repellendus
        necessitatibus non minus mollitia quisquam?
      </div>
    </div>

    <div>
      <div class="text-3xl font-bold text-indigo-400">Our Agents</div>
      <div class="text-base">Best in town</div>
      <div class="flex flex-col mt-5 gap-6">
        <AgentCard {openModal} />
        <AgentCard {openModal} />
        <AgentCard {openModal} />
        <AgentCard {openModal} />
      </div>
    </div>
  </div>
</InsuranceBase>
