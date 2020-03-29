<template>
  <tab-layout class="tab-layout" :tabs="types"></tab-layout>
</template>

<script>
import { TabLayout } from '../components';

const TAB_TYPES = [
  '推荐',
  '动态',
  '程序人生',
  'Python',
  'Java',
  '百万人学AI',
  '前端',
  '架构',
  '区块链',
  '数据库',
  '5G',
  '游戏开发',
  '移动开发',
  '运维',
  '安全',
  '去计算/大数据',
  '研发管理',
  '物联网',
  '计算机基础',
  '音视频开发',
  '其他'
];

export default {
  name: 'Home',
  components: {
    'tab-layout': TabLayout
  },
  data() {
    return {
      types: TAB_TYPES
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.$refs.content.style.width =
    });
  }
};
</script>

<style lang="scss" scoped>
.tab-layout {
  position: relative;
  top: 0;

  /deep/ ul {
    li {
      margin: 0 6px;
    }
  }
}
</style>
