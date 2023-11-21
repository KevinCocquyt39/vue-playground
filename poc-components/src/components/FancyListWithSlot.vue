<script setup lang="ts">
import { reactive } from "vue";

const model = reactive({
    list: [] as any,
});

model.list.push({ id: 1, name: "Kevin" });
model.list.push({ id: 2, name: "Vicky" });

const onClicked = (itemName: string) => {
    console.log("clicked", itemName); // remove from list, bookmark, etc.
};
</script>

<template>
    <div>
        <ul>
            <li v-for="item in model.list" :key="item.id" class="my-2">
                <slot name="item" :item="item" :clicked="onClicked"></slot>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
