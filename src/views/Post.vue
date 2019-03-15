<template>
	<div class="container m-top-20">
		<div class="row">
			<dashboard-menu/>	
			<post-detail/>		
		</div>
	</div>
</template>

<script>

import DashboardMenuComponents from '@/components/User/DashboardMenuComponents.vue';
import PostDetailComponent from '@/components/User/PostDetailComponent.vue';

export default {
  name: 'Post',
  components: {
    'dashboard-menu': DashboardMenuComponents,
    'post-detail': PostDetailComponent,
  },
};

</script>
