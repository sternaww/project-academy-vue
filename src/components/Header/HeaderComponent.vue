<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<div class="row col-md-12">
				<div class="col-md-2">
					<a class="navbar-brand" href="/"><img class="header__logo" alt="Vue logo" src="@/assets/logo/idn-times.png"></a>
			  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    		<span class="navbar-toggler-icon"></span>
			  		</button>
				</div>

				<div class="col-md-8">
					<div class="collapse navbar-collapse" id="navbarNav">

			      		<ul class="navbar-nav">
			        		<li class="nav-item active">
			          			<a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
			        		</li>
			      		</ul>

			      		<ul v-for="header in head" class="navbar-nav">
			        		<li class="nav-item">
			        			<a class="nav-link" :href="'post/' + header.catid">{{ header.cattitle }}</a>
			        		</li>
			      		</ul>

		    		</div>
				</div>

				<div class="col-md-2 pull-right">
					<div class="collapse navbar-collapse" id="navbarNav">

		      			<ul class="navbar-nav">
		        			<li class="nav-item active">
		          				<a class="btn btn-secondary" href="/login">Login</a>
		        			</li>
		      			</ul>

		    		</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HeaderComponent',
  created() {
    this.getDataCategory();
  },
  data() {
    return {
      head: '',
    };
  },
  methods: {
    getDataCategory: function() {
  		axios
	      .get('http://localhost:8017/category')
	      .then(response => {
	        this.head = response.data;
	      })
	      .catch(error => {
	        console.log(error);
	      });
  	}
  },
};

</script>

<style lang="scss">
	.header__logo {
		width: 150px;
	}
</style>
