<template>
	<div id="app" class="container">
		<form @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
			<div class="field">
				<label class="label">Project Name:</label>
				<p class="control">
					<input type="text" name="name" class="input" v-model="form.name">
				</p>
				<span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
			</div>
			<div class="field">
				<label class="label">Project Description:</label>
				<p class="control">
					<input type="text" name="description" class="input" v-model="form.description">
				</p>	
				<span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
			</div>
			<div class="field">
				<p class="control">
					<button class="button is-primary" :class="{'is-loading': form.submitting}" :disabled="form.errors.any()">Create</button>
				</p>
			</div>	
		</form>
	</div>
</template>

<script>
	
	export default {
		name: 'app',
		data () {
			return {
				form: new Form({
					name: '',
					description: ''
				})
			}
		},
		methods: {
			onSubmit() {
				this.form.post('/api/projects')
				.then(data => alert(data.message))
				.catch(errors => console.log(errors));
			}
		},
		mounted () {
		    //  [App.vue specific] When App.vue is finish loading finish the progress bar
		    this.$Progress.finish()
		  },
		  created () {
		    //  [App.vue specific] When App.vue is first loaded start the progress bar
		    this.$Progress.start()
		    //  hook the progress bar to start before we move router-view
		    this.$router.beforeEach((to, from, next) => {
		      //  does the page we want to go to have a meta.progress object
		      if (to.meta.progress !== undefined) {
		        let meta = to.meta.progress
		        // parse meta tags
		        this.$Progress.parseMeta(meta)
		      }
		      //  start the progress bar
		      this.$Progress.start()
		      //  continue to next page
		      next()
		    })
		    //  hook the progress bar to finish after we've finished moving router-view
		    this.$router.afterEach((to, from) => {
		      //  finish the progress bar
		      this.$Progress.finish()
		    })
		  }
	}
</script>