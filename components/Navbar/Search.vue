<script lang="ts" setup>

</script>

<template>
    <div class="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
        <div class="flex flex-row items-center justify-between">
            <div class="text-sm font-semibold px-6">Anywhere</div>
            <div class="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                Any week
            </div>
            <div class="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div class="hidden sm:block">Add Guests</div>
                <div class="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
                    <Icon name="mingcute:search-line" size="18" />
                </div>
            </div>
        </div>
    </div>
</template>
