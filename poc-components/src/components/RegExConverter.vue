<template>
    <div class="mb-5">
        <h2>RegEx Converter</h2>

        <div class="d-flex flex-column gap-2">
            <input type="text" class="form-control" v-model="input" />

            <div class="alert alert-info">
                <h5>Results:</h5>
                {{ convertedInput }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { convert } from "magic-regexp/converter";

const input = ref("");
const convertedInput = computed(() => convert(new RegExp(input.value)));
</script>

<style scoped></style>
