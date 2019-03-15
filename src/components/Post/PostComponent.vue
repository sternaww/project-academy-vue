<template>
	<div class="container">
		<div class="row col-md-12">
			<div class="text-left col-md-9 card_border__post">
				<div class="card m-top-20" v-for="post in posts">
				  <div class="card-body card_border">
				    <h5 class="card-title">{{ post.ptitle }}</h5>
				    <h6 class="card-subtitle mt-1 text-muted">{{ post.pcatid }}</h6>
				    <p class="card-text mt-3 mb-3 text-justify">{{ post.pdesc }}</p>
				    <p class="card-subtitle mt-1 text-muted">{{ post.pcid }} — {{ post.publishat }}</p>
				  </div>
          <hr>
				</div>
			</div>

			<div class="text-left col-md-3">
				<div class="card m-top-20">
				  <div class="card-body card_border">
				    <h5 class="card-title">Most Popular Articles</h5>
				    <ul v-for="post in posts">
				    	<li><a :href="'post/'+post.pcatid+'/'+post.pslug">{{ post.ptitle }}</a></li>
				    </ul>
				  </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'PostComponent',
  created() {
    this.getPostAll();
  },
  data() {
    return {
      posts: '',
    };
  },
  methods: {
    getPostAll: function () {
      axios
        .get('http://localhost:8017/post')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};

</script>


<style lang="scss">
	.card_border__post .card {
		border: 1px solid rgba(255, 255, 255, 1);
	}
</style>
