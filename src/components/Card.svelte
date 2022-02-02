<script>
  import { push } from "svelte-spa-router";

  import InsuranceBase from "../routes/insurances/InsuranceBase.svelte";
</script>

<div
  on:click={() => push("/general/temp")}
  class="p-4 flex flex-col border rounded-lg hover:text-blue-700 hover:bg-blue-300 cursor-pointer transition-all"
>
  <div>
    <img
      src="https://via.placeholder.com/300x150"
      class="w-full rounded-lg mb-4"
      alt=""
    />
  </div>
  <div class="my-3 text-xl lg:text-2xl font-bold">
    this is title of the Insurance
  </div>
  <div class="my-5 mt-2">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
    obcaecati? Ipsa asperiores tempora eum eaque necessitatibus quae alias
  </div>
</div>
