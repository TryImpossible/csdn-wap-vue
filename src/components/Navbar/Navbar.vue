<template>
  <div class="navbar">
    <a class="logo" href="http://www.csdn.net">
      <img :src="csdnLogo" />
    </a>
    <div class="search">
      <input type="text" placeholder="搜索博文/帖子/用户" v-model="value" />
      <img v-show="!value" :src="searchIcon" class="search-icon" />
      <img v-show="value" :src="delIcon" class="del-icon" @click="onDel" />
    </div>
    <router-link :to="'index'" class="login">登录</router-link>
    <div class="menu">
      <img :src="menuIcon" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      imgBaseUrl: process.env.VUE_APP_IMAGE_BASE_URL,
      value: ''
    };
  },
  computed: {
    csdnLogo() {
      return `${this.imgBaseUrl}/content-toolbar/csdnlogo.png`;
    },
    searchIcon() {
      return `${this.imgBaseUrl}/content-toolbar/csdn-search.png`;
    },
    delIcon() {
      return `${this.imgBaseUrl}/content-toolbar/icon_search_del.png`;
    },
    menuIcon() {
      return `${this.imgBaseUrl}/content-toolbar/icon-wap-toolbar-menu.png`;
    }
  },
  methods: {
    onDel() {
      this.value = '';
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 52px;
  background-color: #fff;
  padding: 11px 13px 11px 7px;
  display: flex;
  align-items: center;

  .logo img {
    display: block;
    width: 72px;
  }

  .search {
    height: 32px;
    width: 60%;
    border-radius: 32px;
    padding: 2px 12px;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 75%;
      height: 100%;
      font-size: 16px;
      margin-right: 8px;
    }
    ::-webkit-input-placeholder {
      color: #999;
    }

    .search-icon {
      width: 18px;
      height: 18px;
    }

    .del-icon {
      width: 12px;
      height: 12px;
    }
  }

  .login {
    font-size: 14px;
    display: block;
    margin: 0 12px;
    color: brown;
  }

  .menu img {
    display: block;
    width: 16px;
    height: 16px;
  }
}
</style>
