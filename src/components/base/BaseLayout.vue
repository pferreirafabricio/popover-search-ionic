<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <div v-if="pageDefaultBackLink">
            <ion-back-button
              v-if="!ignoreHistory"
              text="Back"
              :default-href="pageDefaultBackLink"
            />
            <ion-back-button
              v-else
              text="Back"
              default-href=""
              @click.prevent="back()"
            />
          </div>
          <ion-menu-button v-show="showMenuButton" color="primary" />
          <ion-text class="ml-4 font-weight-bold">
            {{ pageTitle }}
          </ion-text>
        </ion-buttons>
        <ion-buttons slot="end" class="ml-auto">
          <slot name="actions-end" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :class="`ion-padding ${className}`" :scroll-events="true">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonMenuButton,
  IonText,
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "BaseLayout",
  components: {
    IonText,
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonBackButton,
    IonButtons,
    IonMenuButton,
  },
  props: {
    pageTitle: {
      type: String,
      required: false,
    },
    pageDefaultBackLink: {
      type: String,
      required: false,
    },
    showMenuButton: {
      type: Boolean,
      default: true,
    },
    ignoreHistory: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      required: false,
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  methods: {
    back() {
      this.router.push(this.pageDefaultBackLink);
    },
  },
};
</script>
