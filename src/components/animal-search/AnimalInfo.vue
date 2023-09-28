<script setup>
import { IonIcon, IonBadge } from "@ionic/vue";

import { locationOutline } from "ionicons/icons";

import { defineProps } from "vue";

defineProps({
  animal: Object,
});
</script>

<template>
  <div style="display: flex !important; flex-direction: column; gap: 0.2rem">
    <span class="fs-12 text-justify">
      {{ animal.name }}
    </span>
    <div style="display: flex; align-items: center; gap: 0.3rem">
      <small> Habitat: </small>

      <ion-badge
        v-for="location in animal.locations"
        :key="location"
        style="font-size: 0.7rem; display: flex; align-items: center; gap: 0.2rem"
      >
        <ion-icon :icon="locationOutline" /> {{ location }}
      </ion-badge>
    </div>
  </div>
</template>
