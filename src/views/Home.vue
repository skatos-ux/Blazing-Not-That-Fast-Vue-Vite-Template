<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const store = useStore()
const router = useRouter()

onMounted(() => {
})
</script>

<template>
	<div class="page page--fullsize flex center">
		<h1>Works ! &nbsp;<font-awesome-icon icon="phone" /></h1>
	</div>
</template>

<style lang="scss" scoped>
</style>
