<script setup>
import { IonGrid, IonRow, IonCol, IonInput } from "@ionic/vue";

import useDebounce from "@/composition/useDebounce";
import api from "../api";
import { ref, watch } from "vue";
import PopoverSearch from "../components/animal-search/PopoverSearch.vue";

const loading = ref(false);
const error = ref(false);
const animals = ref([]);
const firstSearch = ref(true);
const inputSearch = ref("");
const sizeToBeginSearch = 3;

async function search() {
  if (!inputSearch.value || inputSearch.value.length < sizeToBeginSearch)
    return;

  firstSearch.value = false;
  loading.value = true;
  error.value = false;
  animals.value = [];

  api
    .get(`/animals?name=${inputSearch.value}`, {
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

watch(inputSearch, () => {
  searchWithDebounce();
});
</script>

<template>
  <base-layout>
    <ion-grid>
      <ion-row>
        <ion-col>
          <h2>🦔 Start searching</h2>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
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
        </ion-col>

        <popover-search
          target-element-id="search-popover"
          :animals="animals"
          :loading="loading"
          :error="error"
          :first-search="firstSearch"
        />
      </ion-row>
    </ion-grid>
  </base-layout>
</template>
