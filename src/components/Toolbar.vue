<template>
  <div class="toolbar">
    <a class="logo_box" href="http://www.csdn.net">
      <img :src="csdnLogo" />
    </a>
    <div class="search_box">
      <input placeholder="搜索博文/帖子/用户" v-model="value" />
      <img v-show="!value" :src="searchIcon" class="search_icon" />
      <img v-show="value" :src="delIcon" class="del_icon" @click="onDel" />
    </div>
    <div class="menu_box">
      <img :src="menuIcon" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      imgBaseUrl: this.GLOBAL.imgBaseUrl,
      value: ''
    };
  },
  computed: {
    csdnLogo: function() {
      return `${this.imgBaseUrl}/content-toolbar/csdnlogo.png`;
    },
    searchIcon: function() {
      return `${this.imgBaseUrl}/content-toolbar/csdn-search.png`;
    },
    delIcon: function() {
      return `${this.imgBaseUrl}/content-toolbar/icon_search_del.png`;
    },
    menuIcon: function() {
      return `${this.imgBaseUrl}/content-toolbar/icon-wap-toolbar-menu.png`;
    }
  },
  methods: {
    onDel: function() {
      this.value = '';
    }
  }
};
</script>
<style lang="scss" scoped>
.toolbar {
  width: 100%;
  height: 52px;
  background-color: #fff;
  padding: 11px 13px 11px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo_box {
  font-size: 0;
  img {
    width: 72px;
  }
}
.search_box {
  height: 32px;
  border-radius: 32px;
  padding: 2px 12px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    font-size: 16px;
    width: 75%;
    height: 100%;
  }
  ::-webkit-input-placeholder {
    color: #999;
  }

  .search_icon {
    width: 18px;
    height: 18px;
  }

  .del_icon {
    width: 12px;
    height: 12px;
  }
}
.menu_box {
  img {
    display: block;
    width: 16px;
    height: 16px;
  }
}
</style>
