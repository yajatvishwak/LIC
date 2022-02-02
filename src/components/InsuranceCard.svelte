<script>
  import Nav from "../components/Nav.svelte";
  export let navigateToInsuranceDetails = () => {};
  export let title = "";
  export let insuranceID = "";
  export let status = "";
  export let tags = [];
</script>

<div on:click={() => navigateToInsuranceDetails(insuranceID)}>
  <div
    class=" p-4 border m-5 rounded-lg bg-white transition-all hover:bg-gray-200 shadow-md"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="font-semibold">{title}</div>
      <div>{status}</div>
    </div>

    <div class="flex gap-4 mt-3">
      {#each tags as tag}
        <div class="lg:px-7 px-3  rounded-full border py-1">{tag}</div>
      {/each}
    </div>
  </div>
</div>
