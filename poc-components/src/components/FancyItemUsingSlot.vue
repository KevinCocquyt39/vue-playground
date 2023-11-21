<script setup lang="ts">
import FancyListWithSlot from "./FancyListWithSlot.vue";
</script>

<template>
    <div>
        <FancyListWithSlot>
            <template #item="{ item, clicked }">
                {{ item.id }} {{ item.name }}
                <button class="btn btn-primary" @click="clicked(item.name)">Click</button>
            </template>
        </FancyListWithSlot>
    </div>
</template>

<style scoped></style>
