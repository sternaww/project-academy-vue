<template>
  <section>
	  <nav class="navbar navbar-expand-lg navbar__bg_login">
	  	<div class="col-md-12">
		  <h1 class="text-center p_login__welcome"> Login </h1>
		  <h5 class="p_login__desc">Tulis Artikelmu dan Dapatkan Poinnya!</h5>
		</div>
	  </nav>

	  <div class="container justify-content-md-center m-top-20">

	  	<div class="row">
	  		<div class="col-md-2">
	  		</div>

	  		<div class="col-md-8 m-top-20" style="min-height: 400px;">
		  		<form>
		  			<div class="form-group">
		  				<div class="col-md-2 text-left">
			  				<label>E-mail*</label>
			  			</div>
			  			<div class="col-md-10">
			  				<input type="email" v-model="email" class="form-control" :class=" { 'is-invalid' : inValidInput, 'is-valid' : isValid } " required>
			  				<div class="text-left">
				  				<small class="text-danger" v-if="isErrorEmail">
				        			Email not valid!
				        		</small>
				        	</div>
			  			</div>
		  			</div>

		  			<div class="form-group">
		  				<div class="col-md-2 text-left">
			  				<label>Password*</label>
			  			</div>
			  			<div class="col-md-10">
			  				<input type="password" v-model="password" class="form-control" required>
			  			</div>
		  			</div>

		  			<div class="form-group">
		  				<div class="col-md-6 text-left">
		  					<button type="button" class="btn btn-danger btn-lg">Register</button>
		  					<button type="button" @click="Login" class="btn btn-primary btn-lg ml-2">Login</button>
		  				</div>
		  			</div>
		  		</form>
		  	</div>

		  	<div class="col-md-2">
	  		</div>
	  	</div>

	  </div>
  </section>
</template>

<script>

import axios from 'axios';

export default {
  name: 'home',
  mounted() {
    const isLogin = localStorage.getItem('isLogin');
    console.log(isLogin);
  },
  data() {
    return {
      email: '',
      password: '',
      isErrorEmail: false,
      inValidInput: false,
      isValid: false,
    };
  },
  watch: {
    email() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const result = re.test(String(this.email).toLowerCase());

      if (result) {
        this.isErrorEmail = false;
        this.isValid = true;
        this.inValidInput = false;
      } else {
        this.isErrorEmail = true;
        this.isValid = false;
        this.inValidInput = true;
      }
    },
  },
  methods: {
    Login() {
      if (this.email != '' && this.password != '') {
        axios.post('localhost:8017/customer/login', {
          "email": this.email,
          "password": this.password,
        })
        .then(response => {
           this.head = response.data
        })
        .catch(error => {
          console.log(error);
        });
      } else {
      	alert("Isi semua datanya!");
      }
    },
  },
};

</script>

<style lang="scss">
	.navbar__bg_login {
		background-image: url(https://community.idntimes.com/assets/img/desktop/bg-login-1.jpg);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 200px;
	}
	.p_login__welcome {
		color: #fff;
		font-size: 4rem;
	}
	.m-top-20 {
		margin-top: 20px;
	}

	.p_login__desc {
		color: #fff;
	}
</style>
