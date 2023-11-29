<script>
  import "@fontsource-variable/fraunces/full.css";
  import "@fontsource-variable/fraunces/full-italic.css";
  import "@fontsource-variable/inter";
  import "../app.css";
  import Header from "./header.svelte"
  import Footer from "./footer.svelte"
</script>

<svelte:head>
	<title>Softer Design</title>
</svelte:head>

<Header />

<slot />

<Footer />