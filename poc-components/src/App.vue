<script setup lang="ts">
import DeliveryMomentPicker from "./components/DeliveryMomentPicker.vue";
import FancyItemUsingSlot from "./components/FancyItemUsingSlot.vue";
import MultiSelectExample from "./components/MultiSelectExample.vue";
import RegExConverter from "./components/RegExConverter.vue";
import SwiperExample from "./components/SwiperExample.vue";
</script>

<template>
    <main class="container my-3">
        <h1 class="mb-5">Welcome to the Component playground!</h1>

        <DeliveryMomentPicker />
        <FancyItemUsingSlot />
        <MultiSelectExample />
        <RegExConverter />
        <SwiperExample />
    </main>
</template>

<style scoped></style>
