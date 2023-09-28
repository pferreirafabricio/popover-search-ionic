<script setup>
import { IonImg } from "@ionic/vue";
import { defineProps } from "vue";

defineProps({
  animal: Object,
});
</script>

<template>
  <div style="display: flex; align-items: center; gap: 0.3rem">
    Loading...
    <ion-img
      src="assets/img/monkey-loading.gif"
      style="height: 40px"
      alt="Monkey dancing for loading. Credits to Majestic Angel"
    />
  </div>
</template>
