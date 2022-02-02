<script>
  import AgentModalCard from "../components/AgentModalCard.svelte";
  import Nav from "../components/Nav.svelte";
  export let params = {};
  let status = true;
</script>

<Nav />
<section class="flex flex-col  items-start h-screen bg-gray-100 p-4 ">
  <div class="w-full max-w-screen-xl mt-10 mx-auto ">
    <form class="bg-white rounded-xl p-4 flex flex-col gap-3 ">
      <div class="font-bold">Making Changes to {params.iid}</div>
      <label for="">Title</label>
      <input
        class="border w-full rounded-xl p-3"
        placeholder="Title"
        type="text"
        name=""
        id=""
      />
      <label for="">Description</label>

      <textarea
        class="border w-full rounded-xl p-3"
        placeholder="Description"
        type="text"
        name=""
        id=""
      />

      <div class="flex items-center justify-between gap-3">
        <label for="">Status</label>
        <label class="toggle-switch">
          <input
            type="checkbox"
            bind:checked={status}
            class="checkbox"
            id="checkbox"
          />
          <span class="switch-btn" />
        </label>
      </div>
      {#if status}
        <label class="ml-auto" for="">Advertisment will be visible</label>
      {:else}
        <label class="ml-auto text-red-600" for=""
          >Advertisment will not be visible</label
        >
      {/if}

      <button
        type="submit"
        class="bg-indigo-400 hover:bg-indigo-500  transition-all text-white p-5 rounded-xl"
        >Save Changes</button
      >
    </form>
  </div>
</section>

<style>
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch-btn {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 30px;
    background-color: #e9e9ea;
    cursor: pointer;
    transition: 0.4s;
    -webkit-transition: 0.4s;
  }
  .switch-btn::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: inherit;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    transition: 0.4s ease all, left 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }
  .switch-btn:active:before {
    width: 40px;
  }

  .checkbox:checked + .switch-btn {
    background-color: lightgreen;
    box-shadow: 0 0 8px 0 lightgreen;
  }
  .checkbox:checked + .switch-btn::before {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
</style>
