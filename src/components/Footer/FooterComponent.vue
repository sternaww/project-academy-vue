<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light m-top-40">
		<div class="container">
			<div class="row col-md-12">
				<div class="col-md-6 text-left">
					<a class="navbar-brand" href="/"><img class="header__logo" alt="Vue logo" src="@/assets/logo/idn-times.png"></a>
					<h6 class="footer__p">@2019 FINAL PROJECT SITI ERNAWATI</h6>
				</div>

				<div class="col-md-6 text-right">
					<h6 class="footer__address">
						AIA Central, Lantai 21, <br>
						Jl. Jend. Sudirman Kav 48A, Karet Semanggi, Jakarta Selatan, Indonesia 12930 <br>
						Phone: (021) 29784888 <br>
					</h6>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>

export default {
  name: 'FooterComponent',
};

</script>

<style lang="scss">
	.footer__background {
		background-image: url(https://community.idntimes.com/assets/img/desktop/bg-login-1.jpg);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 200px;
	}
	.footer__p {
		font-size: 12px;
	}
	.footer__address {
		font-size: 16px;	
	}
	.m-top-40 {
		margin-top: 40px;
	}
</style>