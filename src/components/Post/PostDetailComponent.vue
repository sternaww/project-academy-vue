<template>
	<div class="container m-top-20">
		<div class="row col-md-12">
			<div class="col-md-9">
				<h3>Agar Target Keuangan Tercapai, Benahi Dulu 6 Kesalahan Ini</h3>
				<h6 class="card-subtitle mt-1 text-muted">Technology - {{ $route.params.slug }}</h6>
				<hr>
				<p class="text-justify">
					Kalimat "tidak ada yang instan di dunia ini" memang benar adanya dalam menentukan target keuangan. Yang "instan-instan" ini kerap dilakukan orang-orang sehingga menghambat pencapaian target tersebut. Mulai dari tak berpatokan pada anggaran hingga kebiasaan berutang, simak enam kesalahan keuangan yang harus dihindari berikut ini. Jangan-jangan Anda sering melakukannya.<br>
					Kalimat "tidak ada yang instan di dunia ini" memang benar adanya dalam menentukan target keuangan. Yang "instan-instan" ini kerap dilakukan orang-orang sehingga menghambat pencapaian target tersebut. Mulai dari tak berpatokan pada anggaran hingga kebiasaan berutang, simak enam kesalahan keuangan yang harus dihindari berikut ini. Jangan-jangan Anda sering melakukannya.<br>
					Kalimat "tidak ada yang instan di dunia ini" memang benar adanya dalam menentukan target keuangan. Yang "instan-instan" ini kerap dilakukan orang-orang sehingga menghambat pencapaian target tersebut. Mulai dari tak berpatokan pada anggaran hingga kebiasaan berutang, simak enam kesalahan keuangan yang harus dihindari berikut ini. Jangan-jangan Anda sering melakukannya.<br>
					Kalimat "tidak ada yang instan di dunia ini" memang benar adanya dalam menentukan target keuangan. Yang "instan-instan" ini kerap dilakukan orang-orang sehingga menghambat pencapaian target tersebut. Mulai dari tak berpatokan pada anggaran hingga kebiasaan berutang, simak enam kesalahan keuangan yang harus dihindari berikut ini. Jangan-jangan Anda sering melakukannya.<br>
				</p>

				<hr>
				<p class="card-subtitle mt-1 text-muted text-left">Gina Dwi Prameswari — 15 Februari 2019</p>
			</div>

			<div class="text-left col-md-3">
				<div class="card m-top-20">
				  <div class="card-body card_border">
				    <h5 class="card-title">Most Popular Articles</h5>
				    <ul v-for="post in posts">
				    	<li><a :href="post.slug">{{ post.title }}</a></li>
				    </ul>
				  </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'PostDetailComponent',
  data() {
    return {
      posts: [
        {
          title: 'Agar Target Keuangan Tercapai, Benahi Dulu 6 Kesalahan Ini',
          category: 'Financial',
          desc: 'Kalimat "tidak ada yang instan di dunia ini" memang benar adanya dalam menentukan target keuangan. Yang "instan-instan" ini kerap dilakukan orang-orang sehingga menghambat pencapaian target tersebut. Mulai dari tak berpatokan pada anggaran hingga kebiasaan berutang, simak enam kesalahan keuangan yang harus dihindari berikut ini. Jangan-jangan Anda sering melakukannya...',
          read_more: 'Baca Selengkapnya',
          author: 'Gina Dwi Prameswari',
          publish_date: '15 Februari 2019',
          slug: '/post-detail/target-keuangan-tercapai',
        },

        {
          title: 'Mengelola Keuangan Bersama Pasangan, Bikin Makin Cinta',
          category: 'Financial',
          desc: 'Kita seringkali mengabaikan faktor emosi saat menentukan tujuan finansial jangka panjang. Padahal penting, lho, untuk dibahas terlebih jika sudah melibatkan Anda dan pasangan. Mari duduk, berbicara dari hati ke hati, dan tentukan kebutuhan hidup masing-masing yang bisa mendefinisikan tujuan finansial berdua. Apa saja "daftar" kebutuhannya? Simak dalam artikel ini!',
          read_more: 'Baca Selengkapnya',
          author: 'Rahma Soediro',
          publish_date: '14 Februari 2019',
          slug: '/post-detail/mengelola-keuangan-bersama-pasangan',
        },

        {
          title: 'Telkom Angkat Suara soal Pemblokiran Netflix',
          category: 'Technology',
          desc: 'Jakarta, CNN Indonesia -- PT Telkom Indonesia (Persero) mengatakan akan mengikuti segala proses hukum yang berlaku. Pernyataan ini diungkapkan Telkom menanggapi pernyataan Komisi Pengawas Persaingan Usaha (KPPU) terkait adanya dugaan persaingan tidak sehat yang dilakukan Telkom terhadap Netflix. <br> Dugaan persaingan tidak sehat Telkom terhadap Netflix berawal dari pemblokiran akses streaming Netflix oleh berbagai layanan internet anak usaha Telkom seperti, Telkomsel, IndiHome, dan Wifi.id. <br> "Sebagai perusahaan publik TelkomGroup senantiasa menghormati lembaga hukum dan mematuhi segala proses hukum yang berlaku," kata VP Corporate Communication PT Telkom Arif Prabowo kepada CNNIndonesia.com, Kamis (6/3).',
          read_more: 'Baca Selengkapnya',
          author: 'CNN Indonesia',
          publish_date: '06 Maret 2019',
          slug: '/post-detail/telkom-angkat-suara-netflix',
        },
      ],
    };
  },
};

</script>
