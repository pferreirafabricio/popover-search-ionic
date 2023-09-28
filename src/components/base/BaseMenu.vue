<script setup>
import { searchOutline, logoGithub, openOutline } from "ionicons/icons";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";

import { ref } from "vue";
import { useRouter } from "vue-router";

const selectedIndex = ref(0);
const router = useRouter();

const appPages = ref([
  {
    title: "Search with popover",
    url: "/home",
    icon: searchOutline,
  },
  {
    title: "See in GitHub",
    link: "https://github.com/pferreirafabricio/popover-search-ionic",
    icon: logoGithub,
  },
]);

function redirect(index, menuItem) {
  selectedIndex.value = index;

  if (menuItem.link) {
    window.open(menuItem.link, "_blank");
    return;
  }
  
  router.push(menuItem.url)
}
</script>

<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-header>
      <ion-toolbar class="ion-text-center" color="primary">
        <ion-title class="remove-padding">
          Popover Search
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list style="padding: 0.8rem">
        <ion-menu-toggle
          v-for="(menuItem, index) in appPages"
          :key="`${menuItem.title}${index}`"
          :auto-hide="false"
        >
          <ion-item
            lines="none"
            detail="false"
            class="hydrated"
            router-direction="root"
            :class="{ selected: selectedIndex === index }"
            style="cursor: pointer"
            @click="redirect(index, menuItem)"
          >
            <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
            <ion-icon slot="start" :icon="menuItem.icon" />
            <ion-label>{{ menuItem.title }}</ion-label>
            <ion-icon v-if="menuItem.link" :icon="openOutline" class="fs-16" />
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
