<section id="hero" class="grid md:grid-cols-2 content-end min-h-[100svh] px-4 pt-24">
  <h1 class="
    grid md:grid-cols-[subgrid] col-start-1 col-span-2 md:grid-rows-[subgrid] row-start-1 row-span-3 
    text-[18vw]/[0.9] font-display uppercase tracking-tight
  ">
    <span class="queue-1 row-start-1">We</span>
    <span class="queue-2 row-start-2 col-start-1 col-end-3">change</span>
    <span class="queue-3 row-start-3 col-start-1 col-end-3">learning</span>
  </h1>
  <p class="queue-4 justify-self-end col-span-2 md:col-start-2 md:row-start-1 max-w-[32ch] py-8 md:py-[1vw]">
    Softer is a learning experience design studio.
    We create tailored learner journeys 
    to add value to your brand
    and get your audience where they want to be.
  </p>
</section>

<style>
  .queue-1 {
    animation: fade_up 1s ease-out 0.2s both;
  }

  .queue-2 {
    animation: fade_up 1s ease-out 0.4s both;
  }

  .queue-3 {
    animation: fade_up 1s ease-out 0.6s both;
  }

  .queue-4 {
    animation: fade_up 1s ease-out 1.0s both;
  }

  @keyframes fade_up {
    from {
      transform: translateY(1rem);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
</style>