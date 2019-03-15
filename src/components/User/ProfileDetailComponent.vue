<template>
	<div class="col-md-9">
		<div class="card m-top-20">
		  	<div class="card-body card_border">
		  		<h5 class="card-title">Profile</h5>
	    		<hr>

	    		<div class="form-group">
	    			<div class="row">
		    			<div class="col-md-2">
		    				<label>Name</label>
		    			</div>

		    			<div class="col-md-10">
		    				<input type="text" name="nama" class="form-control" value="Siti Ernawati" :readonly="isEditData ? true : false">
		    			</div>
		    		</div>
    			</div>

    			<div class="form-group">
	    			<div class="row">
		    			<div class="col-md-2">
		    				<label>E-mail</label>
		    			</div>

		    			<div class="col-md-10">
		    				<input type="text" name="email" class="form-control" value="erna@investree.id" :readonly="isEditData ? true : false">
		    			</div>
		    		</div>
    			</div>

    			<div class="form-group">
	    			<div class="row">
		    			<div class="col-md-2">
		    				<label>Mobile Number</label>
		    			</div>

		    			<div class="col-md-10">
		    				<input type="number" name="mobile_number" class="form-control" value="081584980307" :readonly="isEditData ? true : false">
		    			</div>
		    		</div>
    			</div>

    			<div class="form-group">
	    			<div class="row">
		    			<div class="col-md-2">
		    				<label>Address</label>
		    			</div>

		    			<div class="col-md-10">
		    				<textarea name="address" class="form-control" :readonly="isEditData ? true : false">Test alamat bla bla bla Test alamat bla bla bla Test alamat bla bla bla Test alamat bla bla bla Test alamat bla bla bla Test alamat bla bla bla</textarea>
		    			</div>
		    		</div>
    			</div>

    			<div class="form-group">
	    			<div class="row">
		    			<div class="col-md-2">
		    				<label>Password</label>
		    			</div>

		    			<div class="col-md-10">
		    				<input type="password" name="password" class="form-control" value="brandal17" :readonly="isEditData ? true : false">
		    			</div>
		    		</div>
    			</div>

    			<div class="form-group">
					<div class="row">
						<div class="col-md-12">
							<a href="#" class="btn float-right" :class="buttonStyle" v-on:click="isEditData ? editData() : saveData()">{{ isEditData ? 'Edit' : 'Save' }} Data</a>
						</div>
					</div>
    			</div>
		  	</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'DashboardDetailComponent',
  data() {
  	return {
      isEditData: true,
      buttonStyle: 'btn-info',
  	};
  },
  methods: {
  	editData: function () {
  		this.isEditData = false;
  		this.buttonStyle = 'btn-success';
  	},
  	saveData: function () {
  		this.isEditData = true;
  		this.buttonStyle = 'btn-info';	
  	}
  },
};

</script>
