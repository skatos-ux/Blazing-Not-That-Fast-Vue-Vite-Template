import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { useStore as baseUseStore, createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Cookies from 'js-cookie'
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
				const cookie = Cookies.get(key)
				if (cookie) {
					return JSON.parse(cookie)
				}
				return null
			},
			setState: (key, state) => {
				Cookies.set(key, JSON.stringify(state), {
					expires: 3,
					secure: false, // TODO METTRE VRAI QUAND HTTPS
				})
			},
		}),
	],
})

export function useStore() {
	return baseUseStore(injectionKey)
}
