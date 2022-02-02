<script>
  import AgentModalCard from "../components/AgentModalCard.svelte";

  import InsuranceCard from "./../components/InsuranceCard.svelte";
  import AdminAgentCard from "./../components/AdminAgentCard.svelte";

  import Nav from "../components/Nav.svelte";
  import { push } from "svelte-spa-router";
  let modal = false;
  let insurances = [
    {
      insuranceID: "bri",
      tags: ["bor"],
      title: "Title",
      status: "Active",
    },
  ];
  let selectedInsurance = "";
  function navigateToInsuranceDetails(iid) {
    push("/edit/insurance/" + iid);
  }
  function openModal(selected) {
    selectedInsurance = selected;
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
    </div>
  </div>
{/if}

<Nav />
<section
  class="mx-auto grid md:grid-cols-2 max-w-screen-2xl lg:p-10  bg-gray-50 h-full  "
>
  <div class="p-5 lg:p-10 overflow-auto">
    <div class="text-xl font-semibold">All Insurances</div>
    {#each insurances as insurance}
      <InsuranceCard
        {navigateToInsuranceDetails}
        insuranceID={insurance.insuranceID}
        title={insurance.title}
        tags={insurance.tags}
        status={insurance.status}
      />
    {/each}
  </div>
  <div class="p-5 lg:p-10 md:overscroll-auto ">
    <div class="text-xl font-semibold">All Agents</div>
    <div class="grid md:grid-cols-2">
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
      <AdminAgentCard />
    </div>
  </div>
</section>
