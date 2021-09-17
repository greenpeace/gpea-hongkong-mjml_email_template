<template>
  <div id="app">
    <app-header>
    </app-header>
    <transition name="fade">
      <router-view>
      </router-view>
    </transition>
    <enform></enform>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./components/appheader.vue";
import appFooter from "./components/appfooter.vue";
import enform from "./components/enform.vue";
export default {
  components: {
    "app-header": appHeader,
    "app-footer": appFooter,
    enform: enform
  }
};
</script>
