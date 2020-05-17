<template>
  <scroll-view
    class="tab-layout-wrap"
    ref="scrollView"
    :click="false"
    :scrollX="true"
    :scrollY="false"
  >
    <div class="tab-layout-content">
      <ul v-if="tabs.length > 0" class="tab-layout-items" ref="items">
        <li
          is="tab-item"
          v-for="(item, index) in tabs"
          v-bind:key="index"
          :text="item"
          :selected="selectedPostion === index"
          @onPress="onPress(index)"
        ></li>
      </ul>
      <indicator ref="indicator"></indicator>
    </div>
  </scroll-view>
</template>
<script>
import ScrollView from '../ScrollView';
import TabItem from './TabItem';
import Indicator from './Indicator';

export default {
  name: 'tab-layout',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    position: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selectedPostion: this.position
    };
  },
  components: {
    'scroll-view': ScrollView,
    'tab-item': TabItem,
    indicator: Indicator
  },
  methods: {
    onPress(index) {
      // 防止重复点击
      if (this.position !== this.selectedPostion && this.selectedPostion === index) return;

      this.selectedPostion = index;
      this.$nextTick(() => {
        // 关于元素位置，详情https://www.cnblogs.com/nbwsj/p/12124882.html
        /// 当前位置信息
        const offsetLeft = this.$refs.items.children[index].offsetLeft;
        const offsetWidth = this.$refs.items.children[index].offsetWidth;
        const offsetMiddle = (document.body.clientWidth - offsetWidth) / 2;
        // console.info('offsetLeft', offsetLeft, 'offsetWidth', offsetWidth);
        /// 最后的元素位置信息
        const lastPosition = this.$refs.items.children.length - 1;
        const lastOffsetLeft = this.$refs.items.children[lastPosition].offsetLeft;
        const lastOffsetWidth = this.$refs.items.children[lastPosition].offsetWidth;

        const startX = offsetMiddle;
        const endX = lastOffsetLeft + lastOffsetWidth - offsetMiddle;
        if (offsetLeft < 0) {
          this.$refs.scrollView.scrollToTop();
        } else if (offsetLeft >= startX && offsetLeft <= endX) {
          const dx = offsetMiddle - offsetLeft;
          this.$refs.scrollView.scrollTo(dx, 0, 500);
        } else if (offsetLeft > endX) {
          this.$refs.scrollView.scrollToEnd();
        }

        this.$refs.indicator.update(offsetLeft, offsetWidth);
        this.$emit('onSelected', index);
      });
    }
  },
  mounted() {
    this.onPress(this.position);
  }
};
</script>
<style lang="scss" scoped>
.tab-layout-wrap {
  background-color: #e4e9ec;

  .tab-layout-content {
    display: inline-flex;
    white-space: nowrap;
    min-width: 100%;
    min-height: 40px;
    padding: 0 6px;

    .tab-layout-items {
      display: inline-flex;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
}
</style>
