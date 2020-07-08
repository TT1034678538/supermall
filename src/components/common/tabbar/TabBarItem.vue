<template>
  <div class="tab-bar-item" @click="isClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
<!--    <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      },
    },
    data() {
      return{
        // isActive:true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
       isClick() {
         // 路由跳转
         this.$router.push(this.path)
         console.log('-----')
       }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align:center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin: 1px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
  .active{
    color: blue;
  }
</style>
