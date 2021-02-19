<template>
  <div id="enform" v-bind:class="{overlay: modalShow}">
    <div v-if="modalShow" class="close"><i class="material-icons">close</i></div>
  </div>
</template>

<script>
export default {
  name: "enform",
  data() {
    return {
      modalShow: false,
    };
  },
  created: function() {
    document.addEventListener("DOMContentLoaded", function(event) {
      document.getElementById('enform').appendChild(document.getElementById('form'));
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.close {
  position: fixed;
  top: 30px;
  right: 30px;
  color: #fff;
  opacity: 1;
  i {
    color: #fff;
    cursor: pointer;
    font-size: 3rem;
  }
}
</style>

