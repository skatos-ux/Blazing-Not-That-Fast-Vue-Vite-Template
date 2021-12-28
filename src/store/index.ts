import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import Cookies from 'js-cookie';

export interface State {}

export const injectionKey: InjectionKey<Store<State>> = Symbol('');

export const store = createStore<State>({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	plugins: [
		createPersistedState({
			getState: (key) => {
				const cookie = Cookies.get(key);
				if (cookie) {
					return JSON.parse(cookie);
				}
				return null;
			},
			setState: (key, state) => {
				Cookies.set(key, JSON.stringify(state), {
					expires: 3,
					secure: false, // TODO METTRE VRAI QUAND HTTPS
				});
			},
		}),
	],
});

export function useStore() {
	return baseUseStore(injectionKey);
}
