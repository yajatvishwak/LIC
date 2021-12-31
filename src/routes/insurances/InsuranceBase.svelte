<script>
  import Nav from "../../components/Nav.svelte";
</script>

<section>
  <!-- navbar -->
  <Nav />
  <section class="mx-auto max-w-screen-2xl p-4">
    <slot />
  </section>
</section>
