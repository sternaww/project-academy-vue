<template>
	<div class="Blog">
		<post-detail-component/>
	</div>
</template>

<script>

import PostDetailComponent from '@/components/Post/PostDetailComponent.vue';

export default {
  name: 'Blog',
  components: {
    'post-detail-component': PostDetailComponent,
  },
};

</script>
