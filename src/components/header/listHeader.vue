<template>
   <div class="list-header">
        line
   </div>
</template>


<script>
  export default {
    name: "listHeader",
    data() {
      return {
        search: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
    .list-header {
        width: 100%;
        box-sizing: border-box;
        padding: 4px;
        height: 40px;
        font-size: 0;

        .el-search {
            background: #fff;
            height: 36px;
            border: 1px solid gray;
            border-radius: 18px;
            padding: 3px 10px;
            display: flex;
            box-sizing: border-box;

            .icon {
                display: inline-block;
                width: 24px;
                height: 24px;
                border: 1px solid red;
            }

            input[type='text'] {
                flex: 1;
            }

        }

    }


</style>