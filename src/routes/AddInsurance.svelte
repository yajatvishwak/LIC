<script>
  import Nav from "../components/Nav.svelte";
  let status = true;
  let title = "";
  let iid = "";
  let description = "";
  let selected = [];
  let allAgents = [
    {
      aid: 1,
      name: "Yajat",
    },
    {
      aid: 2,
      name: "Yajat2",
    },
    {
      aid: 3,
      name: "Yajat",
    },
    {
      aid: 4,
      name: "Yajat2",
    },
    {
      aid: 5,
      name: "Yajat",
    },
    {
      aid: 6,
      name: "Yajat2",
    },
    {
      aid: 7,
      name: "Yajat",
    },
    {
      aid: 8,
      name: "Yajat2",
    },
    {
      aid: 9,
      name: "Yajat",
    },
    {
      aid: 10,
      name: "Yajat2",
    },
  ];
  function add(aid) {
    let itemToBeAdded = allAgents.find((obj) => {
      return obj.aid === aid;
    });
    const deleted = allAgents.filter((item) => item.aid !== aid);
    allAgents = deleted;
    selected.push(itemToBeAdded);
    selected = [...selected];
  }
  function remove(aid) {
    let itemToBeRemoved = selected.find((obj) => {
      return obj.aid === aid;
    });

    const deleted = selected.filter((item) => item.aid !== aid);
    selected = deleted;
    allAgents.push(itemToBeRemoved);
    allAgents = [...allAgents];
  }
</script>

<Nav />
<section class="flex flex-col  items-start h-screen bg-gray-100 p-4 ">
  <div class="w-full max-w-screen-xl mt-10 mx-auto ">
    <form class="bg-white  p-4 flex flex-col gap-3 rounded-xl shadow-xl">
      <div class="font-bold text-2xl">Add Insurance</div>
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
      <div class="grid md:grid-cols-2">
        <div>
          <div>Assigned Agents</div>
          <div class="flex mt-2 gap-3 flex-wrap ">
            {#each selected as s}
              {#if !allAgents.some((e) => e.aid === s.aid)}
                <div class="border px-5 py-3 rounded-xl flex gap-2">
                  {s.name}
                  <svg
                    on:click={remove(s.aid)}
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-red-600 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              {/if}
            {/each}
          </div>
        </div>
        <div class="mt-3">
          <div>All Agents</div>
          <div class="flex mt-2 gap-3 flex-wrap">
            {#each allAgents as s}
              {#if !selected.some((e) => e.aid === s.aid)}
                <div class="border px-5 py-3 rounded-xl flex gap-2">
                  {s.name}
                  <svg
                    on:click={add(s.aid)}
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-green-400 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="bg-blue-400 hover:bg-blue-500  transition-all text-white p-5 rounded-xl"
        >Add Insurance</button
      >
    </form>
  </div>
</section>
