import type { Module } from 'vuex'
import type { RootState } from '@/store/types'
import type { ModuleInterface } from '@/store/module/types'

export const module: Module<ModuleInterface, RootState> = {
	namespaced: true,
	state: {
		state1: '',
		errors: {
			getTrackingNumberInfosRequestError: '',
		},
	},
	mutations: {},
}
