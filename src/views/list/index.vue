<template>
    <div class="list">
        <list-header></list-header>
        <div class="tab">
            <div class="tab-item border-1px">
                <router-link to="/list/h5list">h5作品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/list/spaList">单页作品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/list/about">开源声明</router-link>
            </div>
        </div>

        <router-view name="list"></router-view>

       <list-footer></list-footer>
    </div>
</template>

<script>
  import listHeader from '@/components/header/listHeader'
  import listFooter from '@/components/footer/listFooter'
  export default {
    name: "index",
    components: {
      'list-header': listHeader,
      'list-footer': listFooter,
    }
  }
</script>

<style lang="scss" scoped>

</style>