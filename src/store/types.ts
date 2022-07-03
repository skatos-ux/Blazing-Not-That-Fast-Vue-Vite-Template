import type { ModuleInterface } from '@/store/module/types'

export interface RootState {
	user: {
		clientName: string
		profile: {
			name: string
			storkLogo: string
			brandLogo: string
		}
		locale: string
		currentPage: string
	}
	module: ModuleInterface
}
