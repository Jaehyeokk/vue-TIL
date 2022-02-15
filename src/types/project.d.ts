// delete node_modules/vuex/types/vue.d.ts

import Vue from 'vue';
import { MyStore } from '../store/types';

declare module 'vue/types/vue' {
	interface Vue {
		$store: MyStore;
	}
}

declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		store?: MyStore;
	}
}
