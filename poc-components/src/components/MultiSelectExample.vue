<script setup lang="ts">
// https://github.com/vueform/multiselect

import { reactive } from "vue";
import Multiselect from "@vueform/multiselect";

const model = reactive({
    value: [] as any[],
    options: [] as any[],
});

model.options.push({ value: 1, label: "Kevin" });
model.options.push({ value: 2, label: "Vicky" });

model.value.push(2); // pre-select

// methods

const onAddItemsClicked = () => {
    model.options.push({ value: 3, label: "Phee" });
};
</script>

<template>
    <div class="mb-5">
        <h2>Multi Select Example</h2>

        <div v-show="model.value" class="alert alert-success">
            {{ model.value }}
        </div>

        <div class="mb-3">
            <Multiselect v-model="model.value" :options="model.options" :close-on-select="false" :searchable="true" mode="tags" />
        </div>

        <div class="mb-3">
            <button type="button" class="btn btn-primary" @click="onAddItemsClicked">Add items</button>
        </div>

        <h6>COMPARE WITH BOOTSTRAP INPUT STYLING</h6>

        <div class="mb-3">
            <select class="form-select">
                <option></option>
            </select>
        </div>
    </div>
</template>

<style scoped></style>
