<script setup lang="ts">
// https://vcalendar.io
// https://github.com/nathanreyes/vue-screen-utils
// NOTE: do not forget to set web components in vite.config.ts

import { reactive, ref } from "vue";
import { useScreens } from "vue-screen-utils";
import { Calendar } from "v-calendar";
import type { Customer } from "../types/customers";
import type { ShippingAddress } from "../types/shipping-addresses";
import type { CalendarDay } from "v-calendar/dist/types/src/utils/page.js";

const model = reactive({
    customerList: [] as Customer[],
    selectedCustomerId: 0,
    shippingAddressList: [] as ShippingAddress[],
    selectedShippingAddressId: 0,
});

model.customerList.push({
    id: 1,
    name: "Kevin",
});

model.customerList.push({
    id: 2,
    name: "Vicky",
});

model.shippingAddressList.push({
    id: 1,
    name: "Moerbruggeplein 4",
});

model.shippingAddressList.push({
    id: 2,
    name: "Esc BV",
});

const { mapCurrent } = useScreens({ xs: "0px", sm: "640px", md: "768px", lg: "1024px" });
const calendarColumns = mapCurrent({ lg: 4 }, 1);

const calendarAttributes = ref([
    {
        key: "today",
        highlight: true,
        dates: new Date(),
    },
]) as any;

const calendarMinDate = new Date();

let calendarMaxDate = new Date();
calendarMaxDate.setMonth(calendarMaxDate.getMonth() + 9);

// methods

const onFormSubmitted = () => {
    console.log("selectedCustomerId", model.selectedCustomerId);
    console.log("selectedShippingAddressId", model.selectedShippingAddressId);

    calendarAttributes.value.push({
        bar: "#00ff00",
        dates: [new Date(2023, 10, 2), new Date(2023, 10, 15), new Date(2023, 10, 26)],
    });
};

const onCalenderDayClick = (calendarDay: CalendarDay) => {
    console.log("onCalenderDayClick", calendarDay);
};
</script>

<template>
    <div>
        <form class="mb-3">
            <div v-show="model.selectedCustomerId > 0 || model.selectedShippingAddressId > 0" class="alert alert-success" data-testid="form-result">
                {{ model.selectedCustomerId }} - {{ model.selectedShippingAddressId }}
            </div>

            <div class="mb-3">
                <select v-model="model.selectedCustomerId" class="form-select" data-testid="customer-select">
                    <option v-for="customer in model.customerList" :key="customer.id" :value="customer.id">{{ customer.name }}</option>
                </select>
            </div>

            <div class="mb-3">
                <select v-model="model.selectedShippingAddressId" class="form-select" data-testid="shipping-address-select">
                    <option v-for="shippingAddress in model.shippingAddressList" :key="shippingAddress.id" :value="shippingAddress.id">{{ shippingAddress.name }}</option>
                </select>
            </div>

            <button type="button" class="btn btn-primary" @click="onFormSubmitted">Ok</button>
        </form>

        <Calendar
            :columns="calendarColumns"
            :attributes="calendarAttributes"
            :min-date="calendarMinDate"
            :max-date="calendarMaxDate"
            :first-day-of-week="2"
            @dayclick="onCalenderDayClick"
        />
    </div>
</template>

<style scoped></style>
