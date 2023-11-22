<script setup lang="ts">
// https://swiperjs.com/element
// NOTE: do not forget to set Swiper web components in vite.config.ts

const swiperSpaceBetween = 10;

const onSwiperProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    console.log("progress", progress);
};

const onSwiperSlideChange = (e: any) => {
    console.log("slide changed");
};

import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

const swiperEl = document.querySelector("swiper-container");

if (swiperEl) {
    const params = {
        injectStylesUrls: ["/swiper/pagination.css"],
    };

    Object.assign(swiperEl, params);

    swiperEl.initialize();
}
</script>

<template>
    <div class="mb-5">
        <h2>Swiper Example</h2>

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
