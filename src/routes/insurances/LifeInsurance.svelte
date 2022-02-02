<script>
  import Card from "../../components/Card.svelte";

  import InsuranceBase from "./InsuranceBase.svelte";
</script>

<InsuranceBase>
  <div class="text-2xl lg:text-4xl text-center font-bold text-blue-400">
    Our Life Insurance
  </div>
  <div class="mb-10 text-center ">zindgi ke saath bhi, zindagi ke baad bhi</div>

  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-screen-xl "
  >
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</InsuranceBase>
