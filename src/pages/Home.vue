<script setup>
import { IonIcon, IonGrid, IonRow, IonCol, IonInput } from "@ionic/vue";

import { search } from "ionicons/icons";

import { ref } from "vue";
import PopoverSearch from "../components/PopoverSearch.vue";

const inputSearch = ref("");
</script>

<template>
  <base-layout>
    <ion-grid>
      <ion-row>
        <ion-col>
          <h2>Home</h2>
        </ion-col>
      </ion-row>
      <ion-row
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <ion-col>
          <div style="display: flex; align-items: center; gap: 10px">
            <ion-input
              id="search-popover"
              v-model="inputSearch"
              autocomplete="off"
              type="search"
              label-placement="floating"
              fill="outline"
              placeholder="Search for animals"
              label
            />
            <ion-icon :icon="search" class="iconSearch" />
          </div>
        </ion-col>

        <PopoverSearch
          :text-to-search="inputSearch"
          target-element-id="search-popover"
        />
      </ion-row>
    </ion-grid>
  </base-layout>
</template>
