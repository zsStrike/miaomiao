<template>
  <div id="main">
    <Header title="我的喵喵"/>
    <TabBar/>
  </div>
</template>

<script>
  import Header from "../../components/Header/index";
  import TabBar from "../../components/TabBar/index";
  export default {
    name: "mine",
    components: {TabBar, Header}
  }
</script>

<style scoped>

</style>