<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <BaseMenu />
      <ion-router-outlet id="main-content" />
    </IonSplitPane>
  </IonApp>
</template>

<script setup>
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import BaseMenu from "./components/base/BaseMenu.vue";
</script>
