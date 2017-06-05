<template>
	<div id="app" class="container">
		<form @submit.prevent="onSubmit">
			<div class="control">
				<label class="label">Project Name:</label>
				<input type="text" name="name" class="input" v-model="name">
			</div>
			<div class="control">
				<label class="label">Project Description:</label>
				<input type="text" name="description" class="input" v-model="description">
			</div>
			<div class="control">
				<button class="button is-primary">Create</button>
			</div>
		</form>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'app',
		data () {
			return {
				name: '',
				description: ''
			}
		},
		methods: {
			onSubmit() {
				axios.post('/api/projects', this.$data)
			}	
		}
	}
</script>