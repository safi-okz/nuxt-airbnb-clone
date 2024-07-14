<template>
    <div>
        <pre>
            {{ user }}
        </pre>
        <form @submit.prevent="logout">
		<Button>Sign out</Button>
	</form>
    </div>
</template>

<script lang="ts" setup>
// import { useUser } from '../composables/auth';
const user = useUser();
async function logout() {
	await $fetch("/api/logout", {
		method: "POST"
	});
	await navigateTo("/login");
}

definePageMeta({
    middleware: 'protected'
});
</script>