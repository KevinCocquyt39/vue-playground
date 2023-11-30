<!-- eslint-disable antfu/top-level-function -->

<script setup lang="ts">
import { Image as DatocmsImage, toHead } from "vue-datocms";
import CtaNewsletterSubscriptionRecord from "./CtaNewsletterSubscriptionRecord.vue";
import HeroSectionRecord from "./HeroSectionRecord.vue";

const props = defineProps(["data"]);

useHead(() => {
  if (!props.data) {
    return {};
  }

  return toHead(props.data._seoMetaTags);
});

const sectionList = [];

for (const section of props.data.sections) {
  if (section.__typename === "CtaNewsletterSubscriptionRecord") {
    const ctaNewsletterSubscriptionSection = h(CtaNewsletterSubscriptionRecord, { data: section });
    sectionList.push(ctaNewsletterSubscriptionSection);
  }

  if (section.__typename === "HeroSectionRecord") {
    const heroSection = h(HeroSectionRecord, { data: section });
    sectionList.push(heroSection);
  }

  if (section.__typename === "ImageBlockRecord") {
    const imageSection = h(DatocmsImage, { data: section.image.responsiveImage });
    sectionList.push(imageSection);
  }
}

const MySections = h("div", { id: "sections" }, sectionList.map((section) => {
  return section;
}));
</script>

<template>
  <MySections />
</template>

<style scoped>

</style>
