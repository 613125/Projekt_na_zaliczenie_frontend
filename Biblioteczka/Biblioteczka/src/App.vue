<script setup>

</script>

<template>
<main>
 
  <router-view id="content" />
</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}

body {
	background-color: #EEE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

main {
	padding: 1.5rem;
}

</style>
