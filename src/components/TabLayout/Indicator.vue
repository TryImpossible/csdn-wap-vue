<template>
  <div class="indicator" ref="indicator"></div>
</template>
<script>
export default {
  name: 'indicator',
  methods: {
    update(offsetLeft, offsetWidth) {
      // this.$refs.indicator.style.left = `${offsetLeft}px`;
      this.$refs.indicator.style.transform = `translateX(${offsetLeft}px)`;
      this.$refs.indicator.style.width = `${offsetWidth}px`;
    }
  }
};
</script>
<style lang="scss" scoped>
.indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #ca0c16;
  height: 2px;
  transition: all 0.3s;
}
</style>
