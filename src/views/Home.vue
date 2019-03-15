<template>
  <div class="home">
    <post-component/>
  </div>
</template>

<script>

import PostComponent from '@/components/Post/PostComponent.vue';

export default {
  name: 'home',
  components: {
    'post-component': PostComponent,
  },
};

</script>
