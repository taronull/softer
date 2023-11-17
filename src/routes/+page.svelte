<script>
  import Hero from "./hero.svelte"
  import Studio from "./studio.svelte"
  import Taro from "./taro.svelte"
  import Work from "./work.svelte"
</script>

<header class="fixed w-full px-6 py-4 flex justify-between items-center gap-2">
  <a href="/" class="font-display font-semibold tracking-tight text-3xl sm:text-4xl">taro&amp;</a>
  <nav class="flex gap-4 sm:text-lg">
    <a href="/#work">Work</a>
    <a href="mailto:taronull@gmail.com">Contact</a>
  </nav>
</header>

<Hero />

<Studio />

<Taro />

<Work />

<footer>
  &copy; Taro 2023
</footer>

