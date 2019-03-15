<template>
	<div class="col-md-9">
		<div class="card m-top-20">
		  	<div class="card-body card_border">
		  		<h5 class="card-title">Post</h5>
	    		<hr>

	    		<div class="row">
					<div class="col-md-12">
						<a href="#" class="btn float-right" :class="buttonStyle" v-on:click="isShow ? addPost() : savePost()">{{ isShow ? 'Add' : 'Save' }} Post</a>
					</div>	    		
				</div>

        <div :class="isShow ? 'isShow' : 'isHide'">
				  <div class="row">
		    		<div class="col-md-12" v-for="post in posts">
		    			<div class="card m-top-20">
						  	<div class="card-body card_border">
						  		<h5 class="card-title text-left">{{ post.title }}</h5>
							    <h6 class="card-subtitle mt-1 text-muted text-left">{{ post.category }} - {{ post.publish_date }}</h6>
							    <hr>
							    <p class="card-text mt-3 mb-3 text-justify">{{ post.desc }}</p>
							    <hr>
							    <a href="#" class="btn btn-danger float-right ml-2">Delete</a>
								<a href="#" class="btn btn-info float-right">Edit</a>
						  	</div>
						
						</div>
		    		</div>
		    	</div>
		  	</div>

        <div :class="isShow ? 'isHide' : 'isShow'">
          <div class="row m-top-20">
            <div class="col-md-2">
              <span class="text-left">Title</span>
            </div>
            <div class="col-md-10">
              <input type="text" v-model="title" class="form-control">
              <div class="text-left">
                <small class="text-danger" v-if="isRequiredTitle">
                  This field is required!
                </small>
              </div>
            </div>
          </div>

          <div class="row m-top-20">
            <div class="col-md-2">
              <span class="text-left">Category</span>
            </div>
            <div class="col-md-10">
              <select class="form-control" v-model="category" required>
                <option value="1">Technologi</option>
                <option value="2">Travel</option>
                <option value="3">Sport</option>
                <option value="4">Finance</option>
                <option value="5">Food</option>
              </select>
              <div class="text-left">
                <small class="text-danger" v-if="isRequiredCat">
                  This field is required!
                </small>
              </div>
            </div>
          </div>

          <div class="row m-top-20">
            <div class="col-md-2">
              <span class="text-left">Description</span>
            </div>
            <div class="col-md-10">
              <textarea class="form-control" v-model="desc">

              </textarea>
              <div class="text-left">
                <small class="text-danger" v-if="isRequiredDesc">
                  This field is required!
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'PostDetailComponent',
  created() {
    this.getCat();
  },
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
      isShow: true,
      buttonStyle: 'btn-info',
      cat: '',
      title: '',
      category: '',
      desc: '',
      isRequiredTitle: false,
      isRequiredCat: false,
      isRequiredDesc: false,
    };
  },
  methods: {
    addPost: function () {
      this.isShow = false;
      this.buttonStyle = 'btn-success';
    },
    savePost: function () {
      if (this.title == '' || this.category == '' || this.desc == '') {
        this.isRequiredTitle = true;
        this.isRequiredCat = true;
        this.isRequiredDesc = true;
      } else {
        this.isShow = true;
        this.buttonStyle = 'btn-info';
      }
    },
    getCat: function () {
      axios
        .get('http://localhost:8017/category')
        .then(response => {
          this.cat = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  watch: {
    title() {
      if (this.title == '') {
        this.isRequiredTitle = true;
      } else {
        this.isRequiredTitle = false;
      }
    },
    category() {
      if (this.category == '') {
        this.isRequiredCat = true;
      } else {
        this.isRequiredCat = false;
      }
    },
    desc() {
      if (this.desc == '') {
        this.isRequiredDesc = true;
      } else {
        this.isRequiredDesc = false;
      }
    },
  },
};

</script>

<style lang="scss">
  .isShow {
    display: block;
  }
  .isHide {
    display: none;
  }
</style>