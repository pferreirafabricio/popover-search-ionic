<script setup>
import { IonPopover, IonContent, IonList, IonItem, IonIcon } from "@ionic/vue";
import { openOutline } from "ionicons/icons";
import { defineProps, toRefs } from "vue";

import AnimalInfo from "./AnimalInfo.vue";
import AnimalLoading from "./AnimalLoading.vue";

const props = defineProps({
  targetElementId: String,
  loading: Boolean,
  error: Boolean,
  firstSearch: Boolean,
  animals: Array,
});

const { targetElementId, loading, error, animals } = toRefs(props);

function openLearnMore() {
  window.open("https://api-ninjas.com/api/animals", "_blank");
}
</script>

<template>
  <ion-popover
    arrow
    keep-contents-mounted
    size="cover"
    side="bottom"
    alignment="center"
    :keyboard-close="false"
    :show-backdrop="false"
    :trigger="targetElementId"
    :style="loading ? '' : 'max-height: 85%'"
  >
    <ion-content color="light" scroll-y>
      <ion-list style="padding: 0.4rem">
        <ion-item v-if="loading" lines="none">
          <animal-loading />
        </ion-item>
        <ion-item v-else-if="!animals.length && firstSearch" lines="none">
          Search using the animal's name, e.g cat, dog, horse
        </ion-item>
        <ion-item v-else-if="!animals.length && !firstSearch" lines="none">
          No animals found
        </ion-item>
        <ion-item v-else-if="error" lines="none">
          Something went wrong
        </ion-item>
        <ion-item
          v-for="(animal, index) in animals"
          v-else-if="animals.length"
          :key="animal.id"
          lines="none"
        >
          <animal-info
            :animal="animal"
            style="width: 100%; border-bottom: 1px solid #ccc"
            :style="
              index !== animals.length
                ? 'padding-bottom: 0.3rem; margin-bottom: 0.4rem'
                : ''
            "
          />
        </ion-item>
        <ion-item
          v-if="animals.length"
          button
          :detail="false"
          lines="none"
          @click="openLearnMore"
        >
          <span style="margin-right: 0.3rem">📚 Learn more</span>
          <ion-icon :icon="openOutline" />
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-popover>
</template>

<style scoped>
:deep(.list-md) {
  padding: 0;
}

:deep(.item-fill-none .in-list) {
  font-size: 12px;
}

ion-avatar {
  --border-radius: 4px;
}

.animal-item {
  display: flex !important;
  flex-direction: column;
  gap: 0.2rem;
}
</style>
