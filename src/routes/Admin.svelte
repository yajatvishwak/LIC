<script>
  import AgentModalCard from "../components/AgentModalCard.svelte";

  import InsuranceCard from "./../components/InsuranceCard.svelte";
  import AdminAgentCard from "./../components/AdminAgentCard.svelte";

  import Nav from "../components/Nav.svelte";
  import { push } from "svelte-spa-router";
  let insurances = [
    {
      insuranceID: "bri",
      type: "General",
      title: "Title",
      status: "Active",
    },
  ];
  function navigateToInsuranceDetails(iid) {
    push("/edit/insurance/" + iid);
  }
</script>

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
        type={insurance.type}
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
