<template>
	<div class="loading-wrapper">
		<div class="loading loading-lg"></div>
		<div class="loading-msg">{{message}}</div>
	</div>
</template>

<script>
	
	export default {
		props:['message']
	}
</script>
