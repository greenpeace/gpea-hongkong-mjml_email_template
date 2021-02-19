<template>
  <div class="modal active" v-if="visible">
    <div class="dialog__wrapper" @click="closeModal">
      <div class="dialog">
        <div class="dialog__header">
          <div class="dialog__title">{{visible}}</div>
        </div>
        <div class="dialog__body">
          <slot></slot>
        </div>
        <div class="dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mydialog',
    props: {
      title: String,
      visible: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      close() {
        console.log('close');
        this.$emit('update:visible', false)
      },
      closeModal(e) {
        if (this.visible) {
          console.log(e.target);
          document.querySelector('.dialog').contains(e.target) ? '' : this.close();
        }
      }
    }
};
</script>

