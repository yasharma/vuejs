<template>
	<div class="container">
		<article class="message" v-for="status in users.status">
			<div class="message-header">
				<p>{{users.username}} said...</p>
				<p>{{status.created | ago}}</p>
				<!-- <button class="delete"></button> -->
			</div>
			<div class="message-body" v-text="status.body"></div>

		</article>	
		<add-to-stream @completed="addStatus"></add-to-stream> 
	</div>
</template>

<script>
	import moment from 'moment';
	import AddToStream from '../components/AddToStream.vue';
	export default {
		components:{AddToStream },
		data() {
			return {
				users:[]
			}
		},
		created() {
			axios.get('/api/statuses')
				.then(({data}) => this.users = data);
		},
		filters: {
			ago(date) {
				return moment(date).fromNow();
			}
 		},
 		methods: {
 			addStatus(status){
 				this.users = status;
 			}
 		}
	}
</script>