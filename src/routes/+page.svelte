<script>
  import What from "./what.svelte"
  import Showcase from "./showcase.svelte"
  import Why from "./why.svelte"
  import Services from "./services.svelte"
  import How from "./how.svelte"
  import Work from "./work.svelte"
  import Whom from "./whom.svelte"
  import Contact from "./contact.svelte"
  import Taro from "./taro.svelte"
</script>

<svelte:head>
	<title>Softer Design</title>
  <meta name="description" content="
    Softer is a learning experience design studio. 
    We create tailored learner journeys 
    to add value to your brand 
    and get your audience where they want to be.
  "/>
  <meta property="og:image" content="https://images.softer.design/softer.webp" />
</svelte:head>

<div class="grid gap-y-64">
  <What />
  <!-- <Showcase /> -->
  <Why />
  <Work />
  <How />
  <Services />
  <Whom />
  <Contact />
  <Taro />
</div>

