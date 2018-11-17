<template>
  <div class="app">
    <!--路由外链-->
    <router-view :seller="seller"></router-view>
  </div>
</template>


<script>
  import axios from 'axios';
  const ERROR_OK = 0;

  export default {
    data() {
      return {
        seller: {},
      }
    },
    created: function () {
    },
    components: {
    }
  }
</script>

<style lang="scss" scope>
  @import "../static/fonts/iconfont.css";
  @import "../static/reset.css";
  @import '@/common/scss/min.scss';

  .app {
    .tab {
      display: flex;
      width: 100%;
      line-height: 40px;

      .tab-item {
        flex: 1;
        text-align: center;
        @include border-1px(rgba(7, 17, 27, 0.1));

        & > a{
          display: block;
          text-decoration: none;
          font-size: 14px;
          color: rgb(77,85,93);
          &.active {
            color: rgb(240, 20, 20)
          }
        }
      }
    }
  }
</style>

