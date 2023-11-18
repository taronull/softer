<script>
  import Bubble from "./bubble.svelte"

  let linkStyle = "underline decoration-from-font text-sky-600 hover:text"
</script>

<section class="grid justify-center gap-2 px-4 py-16">
  <img src="/images/taro.jpg" alt="Taro" class="rounded-full w-14 sm:w-16 md:w-20 lg:w-24">
  <div class="grid gap-1 col-start-2 w-64 sm:w-72 md:w-80 lg:w-96">
    <p class="font-display font-semibold text-xl sm:text-2xl md:text-3xl lg-text-4xl">Taro</p>
    <Bubble>Hi! 👋 I'm Taro, your LX designer</Bubble>
    <Bubble>Learning is the key for a better future</Bubble>
    <Bubble>People want a change in their lives, would pay for it 🔥</Bubble>
    <Bubble>But making a learning experience takes more than domain knowledge</Bubble>
    <Bubble>And that's what we do! ✨</Bubble>
    <Bubble>Our process combines creativity, technology, and your own uniqueness</Bubble>
    <Bubble>Let's find out what we can do for your challenge 😉</Bubble>
    <Bubble>
      Feel free to reach out: 
      <a href="mailto:taronull@gmail.com" class={linkStyle}>taronull@gmail.com</a>
    </Bubble>
    <Bubble>
      Connect with me on 
      <a href="https://taroand.substack.com" class={linkStyle}>Substack</a>, 
      <a href="https://twitter.com/taronull" class={linkStyle}>Twitter</a>, 
      and LinkedIn
    </Bubble>
  </div>
</section>