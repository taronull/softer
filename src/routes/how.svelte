<script>
  const summary = "group grid grid-cols-[1fr_1em_1fr] justify-items-center list-none font-display text-[10vw]/none md:text-7xl cursor-pointer tracking-tight"
</script>

<section class="grid justify-items-center gap-4">
  <p class="text-xl md:text-2xl">
    We make it 
  </p>
  <details>
    <summary class={summary}>
      <span class="justify-self-end">Human</span>
      <span class="group-hover:font-black transition-all">+</span>
      <span class="justify-self-start">Centered</span>
    </summary>
    <p class="max-w-sm m-auto p-8 text-center">
      Learners hold the key to a successful learning experience. We put learners at the center of our process.
    </p>
  </details>
  <details >
    <summary class={summary}>
      <span class="justify-self-end">Value</span>
      <span class="group-hover:font-black transition-all">+</span>
      <span class="justify-self-start">Driven</span>
    </summary>
    <p class="max-w-md m-auto p-8 text-center">
      Learners pay for meaningful changes. We pack learning experiences with value and make sure they ask for more.
    </p>
  </details>
  <details >
    <summary class={summary}>
      <span class="justify-self-end">Context</span>
      <span class="group-hover:font-black transition-all">+</span>
      <span class="justify-self-start">Blended</span>
    </summary>
    <p class="max-w-md m-auto p-8 text-center">
      Beyond knowledge or skill, learners want to see how you see the world. We distill your unique perspective and storytelling.
    </p>
  </details>
</section>

<style>
  ::-webkit-details-marker {
    display: none;
  }
</style>