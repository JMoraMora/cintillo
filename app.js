import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import data from './store.js'

createApp({
	template: `
		<div></div>
	`,
	data() {
		return {
			message: 'Hello Vue!',
			store: [],
			dates: [],
			resultDates: []
		}
	},
	created() {
		this.store = data
	},
	mounted() {
		console.log(moment());
	}
}).mount('#app')