<script setup>
import {
  IonPopover,
  IonContent,
  IonList,
  IonItem,
  IonBadge,
  IonIcon,
  IonImg,
} from "@ionic/vue";

import { arrowForwardCircleOutline } from "ionicons/icons";

import { ref, defineProps, watch, toRefs } from "vue";
import useDebounce from "@/composition/useDebounce";
import { useRouter } from "vue-router";
import api from "../api";

const router = useRouter();

const loading = ref(true);
const error = ref(false);
const animals = ref([]);
const firstSearch = ref(true);

const props = defineProps({
  textToSearch: String,
  sizeToBeginSearch: {
    type: Number,
    default: 3,
  },
  targetElementId: String,
});

const { textToSearch, sizeToBeginSearch, targetElementId } = toRefs(props);

async function search() {
  if (
    !textToSearch.value ||
    textToSearch.value.length < sizeToBeginSearch.value
  )
    return;

  firstSearch.value = false;
  loading.value = true;
  error.value = false;
  animals.value = [];

  api
    .get(`/animals?name=${textToSearch.value}`, {
      headers: {
        "X-Api-Key": "+8YAiyY3nDpXUl7PCHcVGg==J2asE1Z1RNpCBfJc",
      },
    })
    .then((response) => {
      animals.value = response.data || [];
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
}

const searchWithDebounce = useDebounce(search, 1000);

watch(textToSearch, () => {
  searchWithDebounce();
});
</script>

<template>
  <ion-popover
    arrow
    dismiss-on-select
    keep-contents-mounted
    size="cover"
    side="bottom"
    alignment="center"
    :keyboard-close="false"
    :show-backdrop="false"
    :trigger="targetElementId"
  >
    <ion-content color="light" scroll-y>
      <ion-list style="max-height: fit-content; padding: 10px">
        <ion-item v-if="loading" lines="none" class="text-center fs-12">
          Loading...
          <ion-img
            src="assets/img/monkey-loading.gif"
            style="height: 40px"
            alt="Monkey dancing for loading. Credits to Majestic Angel"
          />
        </ion-item>
        <ion-item
          v-else-if="!animals.length && firstSearch"
          lines="none"
          class="fs-12"
        >
          Search for the animal's name
        </ion-item>
        <ion-item
          v-else-if="!animals.length && !firstSearch"
          lines="none"
          class="fs-12"
        >
          Any animals found
        </ion-item>
        <ion-item
          v-for="animal in animals"
          v-else-if="animals.length"
          :key="animal.id"
          lines="none"
        >
          <span class="fs-12 text-justify">
            {{ animal.name }}
            <span> Habitat: {{ animal.habitat }} </span>
          </span>
          <ion-badge
            v-for="location in animal.locations"
            :key="location"
            size="sm"
          >
            {{ location }}
          </ion-badge>
        </ion-item>
        <ion-item
          v-if="animals.length"
          button
          :detail="false"
          lines="none"
          class="fs-12"
        >
          Se all
          <ion-icon slot=" end" :icon="arrowForwardCircleOutline" />
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
</style>
