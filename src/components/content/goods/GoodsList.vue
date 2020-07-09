<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";

  export default {
    name: "GoodsList",
    components: {
      // GoodListItem,
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>