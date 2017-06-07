<template>
	<div class="container">
		<article class="message" v-for="status in users">
			<div class="message-header">
				<p>{{status.username}} said...</p>
				<p>A moment ago...</p>
				<button class="delete"></button>
			</div>
			<div class="message-body"></div>
		</article>	
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users:[]
			}
		},
		created() {
			axios.get('/api/statuses')
				.then(({data}) => this.users = data);
		}
	}
</script>