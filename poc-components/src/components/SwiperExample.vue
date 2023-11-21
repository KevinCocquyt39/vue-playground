<script setup lang="ts">
// https://swiperjs.com/element
// NOTE: do not forget to set Swiper web components in vite.config.ts

import { register } from "swiper/element/bundle";

const swiperSpaceBetween = 10;

const onSwiperProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    console.log("progress", progress);
};

const onSwiperSlideChange = (e: any) => {
    console.log("slide changed");
};

// register Swiper custom elements
register();
</script>

<template>
    <div>
        <swiper-container
            :slides-per-view="1"
            :space-between="swiperSpaceBetween"
            :centered-slides="false"
            :navigation="{}"
            :pagination="{
                clickable: true,
            }"
            :breakpoints="{
                768: {
                    slidesPerView: 1,
                },
            }"
            @swiperprogress="onSwiperProgress"
            @swiperslidechange="onSwiperSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped></style>
