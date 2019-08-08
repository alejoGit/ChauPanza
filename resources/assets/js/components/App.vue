<template>
	<div class="container grid-sm no-padding main-container">
		<top-menu v-if="$route.name != 'login'"></top-menu>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import TopMenu from './shared/TopMenu.vue';
	import AppFooter from './shared/AppFooter.vue';

	export default {
		components: {
			'top-menu': TopMenu,
			'app-footer': AppFooter
		},
	}
</script>
