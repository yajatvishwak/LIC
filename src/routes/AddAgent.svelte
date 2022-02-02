<script>
  import Nav from "../components/Nav.svelte";
  let status = true;
  let title = "";
  let iid = "";
  let description = "";
</script>

<Nav />
<section class="flex flex-col  items-start h-screen bg-gray-100 p-4 ">
  <div class="w-full max-w-screen-xl mt-10 mx-auto ">
    <form class="bg-white  p-4 flex flex-col gap-3 rounded-xl shadow-xl">
      <div class="font-bold text-2xl">Add Agent</div>
      <label for="">Title</label>
      <input
        class="border w-full rounded-xl p-3"
        placeholder="Title"
        type="text"
        name=""
        id=""
      />
      <label for="">Subtitle</label>
      <input
        class="border w-full rounded-xl p-3"
        placeholder="Subtitle"
        type="text"
        name=""
        id=""
      />
      <label for="">Phone</label>
      <input
        class="border w-full rounded-xl p-3"
        placeholder="Phone"
        type="text"
        name=""
        id=""
      />
      <label for="">Email</label>
      <input
        class="border w-full rounded-xl p-3"
        placeholder="Email"
        type="email"
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

      <button
        type="submit"
        class="bg-blue-400 hover:bg-blue-500  transition-all text-white p-5 rounded-xl"
        >Add Insurance</button
      >
    </form>
  </div>
</section>
