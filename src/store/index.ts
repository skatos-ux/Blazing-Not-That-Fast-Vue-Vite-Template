import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { useStore as baseUseStore, createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import type { RootState } from '@/store/types'
import { module } from '@/store/module'
import { instance, routes } from '@/utils/axios'

export const injectionKey: InjectionKey<Store<RootState>> = Symbol('')

export const store = createStore({
	state: {} as RootState,
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		module,
	},
	plugins: [
		createPersistedState({
			getState: (key) => {
				const store = localStorage.getItem(key)
				if (store) {
					return JSON.parse(store)
				}
				return null
			},
			setState: (key, state) => {
				localStorage.setItem(key, JSON.stringify(state))
			},
		}),
	],
})

export function useStore() {
	return baseUseStore(injectionKey)
}
