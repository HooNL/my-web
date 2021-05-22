<template>
	<article class="bg my-5">
		<h1>Contact Pagina</h1>

		<section v-if="added">
			<h3>De new karbar is toegevoegd</h3>
		</section>

		<form>
			<label for="naam">Naam</label>
			<input
				v-model="naam"
				type="text"
				id="naam"
				class="input"
				placeholder="naam"
                required
			/>
			<div v-if="msg">
				{{ msg }}
			</div>
			<label for="achter">Achternaam</label>
			<input
				v-model="achter"
				type="text"
				id="achter"
				class="input"
				placeholder="achternaam"
                required
			/>
			<label for="email">Email</label>
			<input
				v-model="email"
				type="email"
				id="email"
				class="input"
				placeholder="email"
                required
			/>
			<label for="age">Leeftijd</label>
			<input
				v-model="age"
				type="number"
				id="age"
				class="input"
				placeholder="leeftijd"
				min="18"
				max="120"
			/>
			<label for="inhoud"
				>Inhoud van de bericht</label
			>
			<textarea
				v-model="text"
				id="inhoud"
				class="textarea"
				placeholder="inhoud"
			></textarea>

			<BTN
				@click="addNew()"
				txt="Verzenden"
				bg="lightgreen"
				color="#000"
			/>
		</form>
	</article>
</template>

<script>
	import soshiService from '@/services/soshiService'
	import BTN from '@/shared/BTN.vue'

	export default {
		name: 'Contact',
		components: { BTN },

		data() {
			return {
				naam: '',
				achter: '',
				email: '',
				age: '',
				text: '',
				added: false,
				msg: false,
				/*  ['Vul een geldige naam in en met minimaal 3 karakters.', 'Vul een geldige achternaam in.', 'Vul een geldige email adres in.', 'Uw leeftijd moet minimaal 18 jaar zijn.'] */
			}
		},

		methods: {
			addNew() {
				const newKarbar = {
					naam: this.naam,
					achter: this.achter,
					email: this.email,
					age: this.age,
					text: this.text,
				}

				soshiService.addKarbar(newKarbar)


                setTimeout(() => {
                    this.added = true
                    this.$router.push('/')
                }, 3000);
			},
		},
	}
</script>

<style scoped>
	form {
		text-align: center;
		width: 1100px;
		margin: 0 auto;
	}
	label {
		display: block;
		font-weight: bold;
	}
	input,
	textarea {
		width: 800px;
		margin: 0 auto;
		padding: 7px 10px;
		margin: 0 0 20px 0;
	}
</style>
