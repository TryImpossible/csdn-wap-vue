<template>
  <li :class="classObj" v-text="text" @click="onPress"></li>
</template>
<script>
export default {
  name: 'tab-item',
  props: {
    text: {
      type: String
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObj() {
      return ['tab-item', !this.selected ? 'unselect' : 'select'];
    }
  },
  methods: {
    onPress() {
      this.$emit('onPress');
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-item {
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 0 6px;
  transition: all 0.3s;
}

.unselect {
  color: #333;
  font-weight: normal;
}

.select {
  transform: scale(1.05);
  font-weight: bold;
  color: #ca0c16;
}
</style>
