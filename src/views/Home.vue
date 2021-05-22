<template>
	<article class="home">
		<Section
			naam="The Section One"
			msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem perferendis ratione nesciunt aliquid eveniet laboriosam corporis fugiat quos molestiae. Iure fuga nulla perferendis soluta? Cumque commodi aut illo. Reprehenderit."
	
		/>

	
		<Section
			naam="The Section Twee"
			msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem perferendis ratione nesciunt aliquid eveniet laboriosam corporis fugiat quos molestiae. Iure fuga nulla perferendis soluta? Cumque commodi aut illo. Reprehenderit."
	
		/>
	</article>
</template>

<script>
	// @ is an alias to /src
	import Section from '@/components/Section.vue'
	// import BTN from '@/shared/BTN.vue'
  import mix from '../mixins/mixi'

	export default {
		name: 'Home',
		components: {
			Section,
			// BTN,
		},
    mixins: [mix]
	}
</script>
