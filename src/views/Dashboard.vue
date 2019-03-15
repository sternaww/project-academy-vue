<template>
	<div class="container m-top-20">
		<div class="row">
			<dashboard-menu/>	
			<dashboard-detail/>		
		</div>
	</div>
</template>

<script>

import DashboardMenuComponents from '@/components/User/DashboardMenuComponents.vue';
import DashboardDetailComponent from '@/components/User/DashboardDetailComponent.vue';

export default {
  name: 'Dashboard',
  components: {
    'dashboard-menu': DashboardMenuComponents,
    'dashboard-detail': DashboardDetailComponent,
  },
};

</script>

<style lang="scss">
	.dashboard_menu {
		color: black;
	}

	.dashboard_menu a:hover {
		color: black;	
	}
</style>