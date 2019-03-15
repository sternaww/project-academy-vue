<template>
	<div class="container m-top-20">
		<div class="row">
			<dashboard-menu/>	
			<profile-detail/>		
		</div>
	</div>
</template>

<script>

import DashboardMenuComponents from '@/components/User/DashboardMenuComponents.vue';
import ProfileDetailComponent from '@/components/User/ProfileDetailComponent.vue';

export default {
  name: 'Profile',
    components: {
    'dashboard-menu': DashboardMenuComponents,
    'profile-detail': ProfileDetailComponent,
  },
};

</script>
