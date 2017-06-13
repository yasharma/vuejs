<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-heading">About Page</div>
					<div class="panel-body">
						
						<blurry-image-loader
						    hi-res-src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg"
						    lo-res-src="https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20"
						  ></blurry-image-loader>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import blurryImageLoader from '../components/blurryImageLoader.vue';
	export default {
		components:{blurryImageLoader }
	}	
</script>