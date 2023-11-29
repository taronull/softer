<script>
  import { browser } from "$app/environment";
  import { slide } from "svelte/transition";

  let visible = true

  if (browser) {
    let y = window.scrollY

    window.addEventListener(
      'scroll',
      () => {
        visible = window.scrollY < y ? true : false
        y = window.scrollY;
      }
    )
  }
</script>

{#if visible}
  <nav transition:slide class="fixed left-0 bottom-[5svh] right-0 flex justify-center">
    <div class="
      flex gap-4 text-sm w-fit px-4 py-2 rounded-lg
      bg-white/50 border-y border-b-white/50 border-t-black/5 shadow-md shadow-black/5 backdrop-blur-md
      ">
      <a href="/#hero" class="hover:underline">Home</a>
      <a href="/#services" class="hover:underline">Services</a>
      <a href="/#work" class="hover:underline">Work</a>
      <a href="/#contact" class="hover:underline">Contact</a>
    </div>
  </nav>
{/if}