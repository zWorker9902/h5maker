<template>
    <div class="list-footer">
        <div class="tab">
            <div class="tab-item">
                <span class="icon iconfont h5-h5"></span>
                <span class="text">H5作品</span>
            </div>
            <div class="tab-item">
                <span class="icon iconfont h5-biaodanyemian"></span>
                <span class="text">单页作品</span>
            </div>
            <div class="tab-item">
                <span class="icon iconfont h5-falvshengming"></span>
                <span class="text">开源声明</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "listFooter"
  }
</script>

<style lang="scss" scoped>
    .list-footer {
        position: fixed;
        padding:0;
        box-sizing: border-box;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 54px;
        font-size: 0;
        background: gray;

        .tab {
            width: 100%;
            display: flex;
            color: #fff;

            .tab-item {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .icon {
                    border: 1px solid red;
                    margin: 0 auto;
                    height: 14px;
                    vertical-align: top;
                }

                .text {
                    font-size: 14px;
                }

            }
        }
    }

</style>