<script>
  import AgentCard from "../../components/AgentCard.svelte";
  export let params = {};
  import InsuranceBase from "./InsuranceBase.svelte";
  const iid = params.iid;
  let agents = [
    {
      imageURL: "https://joeschmoe.io/api/v1/random",
      nameOfAgent: "JohnDoe",
      agentID: "adga234",
    },
    {
      imageURL: "https://joeschmoe.io/api/v1/random",
      nameOfAgent: "JohnDoe",
      agentID: "adga234",
    },
    {
      imageURL: "https://joeschmoe.io/api/v1/random",
      nameOfAgent: "JohnDoe",
      agentID: "adga234",
    },
  ];
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
  <div class="min-h-full fixed min-w-full  backdrop-blur-sm z-10 ">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-sm w-full  bg-white shadow-lg p-5 lg:p-10 rounded-lg "
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
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <section class="flex flex-col justify-center items-center">
        <img
          class="rounded-full w-1/2"
          src="https://via.placeholder.com/300"
          alt=""
          srcset=""
        />
        <div class="text-xl mt-3 font-semibold text-center">
          Yajat Vishwakarma
        </div>
        <div class="opacity-70 ">LIC super agent</div>
        <div class="lg:max-w-md mt-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia
          iusto expedita repudiandae labore
        </div>
        <div class="flex items-center gap-3 mt-5">
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          <div class="font-bold">+91 9696969696</div>
        </div>
        <div class="flex items-center gap-3 mt-2">
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
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <div class="font-bold">johndoe@gmail.com</div>
        </div>
      </section>
    </div>
  </div>
{/if}

<InsuranceBase>
  <div class="flex justify-center items-center">
    <div class="grid max-w-screen-lg  gap-10">
      <div>
        <div class="text-3xl font-bold">Title of the General insurance</div>
        <div class="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          doloremque magni eius aliquam voluptatibus quidem eaque corrupti
          magnam dolorum? Fugit consectetur voluptate voluptatibus illum
          repellendus necessitatibus non minus mollitia quisquam?
        </div>
      </div>
      <div>
        <div class="text-3xl font-bold text-indigo-400">Our Agents</div>
        <div class="text-base">Best in town</div>
        <div class="flex flex-col mt-5 gap-6">
          {#each agents as agent}
            <AgentCard {openModal} agentID={agent.agentID} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</InsuranceBase>

<style>
  .w-fit {
    width: fit-content;
  }
</style>
