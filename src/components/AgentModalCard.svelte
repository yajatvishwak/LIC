<script>
  import InsuranceCard from "../components/InsuranceCard.svelte";
  import AdminAgentCard from "../components/AdminAgentCard.svelte";

  import Nav from "../components/Nav.svelte";
  let modal = true;
  let selectedInsurance = "";
  function openModal(selected) {
    selectedInsurance = selected;
    modal = true;
  }
  function closeModal(params) {
    modal = false;
  }
</script>

<div class="rounded-xl bg-gray-200 p-5 mt-5">
  <div class="flex items-center gap-3 ">
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
</div>
