<script>
  import { browser } from "$app/environment";
  import { fade } from "svelte/transition";

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
    window.addEventListener("keydown", () => (visible = true))
  }
</script>

{#if visible}
  <div transition:fade class="fixed left-0 bottom-[5svh] right-0 flex justify-center">
    <nav class="
      flex gap-4 font-medium text-sm md:text-base w-fit px-4 py-2 rounded-lg
      bg-stone-100 shadow-[-1rem_-1rem_2rem_#fff,_1rem_1rem_2rem_#e8e8e8,_0_0_2rem_2rem_#fafaf9]
      ">
      <a href="/#hero" class="hover:underline">Home</a>
      <a href="/#work" class="hover:underline">Work</a>
      <a href="/#services" class="hover:underline">Services</a>
      <a href="/#contact" class="hover:underline">Contact</a>
    </nav>
  </div>
{/if}