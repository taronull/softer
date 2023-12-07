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
  <div transition:fade class="fixed left-0 bottom-[5svh] right-0 mx-auto w-fit flex justify-center z-10">
    <nav class="
      flex gap-4 font-medium text-sm md:text-base w-fit px-4 py-2 rounded-lg
      bg-white/50 border-t border-white/25 shadow backdrop-blur
      ">
      <a href="/#hero" class="hover:underline">Home</a>
      <a href="/#work" class="hover:underline">Work</a>
      <a href="/#services" class="hover:underline">Services</a>
      <a href="/#contact" class="hover:underline">Contact</a>
    </nav>
  </div>
{/if}