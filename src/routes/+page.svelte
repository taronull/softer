<script>
  import Hero from "./hero.svelte"
  import Studio from "./studio.svelte"
  import Taro from "./taro.svelte"
  import Work from "./work.svelte"
</script>

<header class="fixed w-full px-6 py-4 flex justify-between items-center gap-2">
  <a href="/" class="font-display font-bold italic lowercase tracking-tighter text-3xl sm:text-4xl">Softer</a>
  <nav class="flex gap-4 sm:text-lg">
    <a href="/#work">Work</a>
    <a href="mailto:taro@softer.design">Contact</a>
  </nav>
</header>

<Hero />

<Studio />

<Taro />

<Work />

<footer class="p-16 text-center">
  &copy; 2023
</footer>

