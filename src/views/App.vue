<template>
	<div id="app" class="container">
		<form @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
			<div class="control">
				<label class="label">Project Name:</label>
				<input type="text" name="name" class="input" v-model="form.name">
				<span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
			</div>
			<div class="control">
				<label class="label">Project Description:</label>
				<input type="text" name="description" class="input" v-model="form.description">
				<span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
			</div>
			<div class="control">
				<button class="button is-primary" :class="{'is-loading': form.submitting}" :disabled="form.errors.any()">Create</button>
			</div>
		</form>
	</div>
</template>

<script>
	import Form from '../core/Form';
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
		}
	}
</script>