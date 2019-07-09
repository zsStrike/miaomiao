<template>
  <div id="main">
    <Header title="我的喵喵"/>
    <div id="content">
      <LogIn/>
    </div>
    <TabBar/>
  </div>
</template>

<script>
  import Header from "../../components/Header/index";
  import TabBar from "../../components/TabBar/index";
  import LogIn from "../../components/LogIn/index";

  export default {
    name: "mine",
    components: {
      LogIn,
      TabBar,
      Header
    }
  }
</script>

<style scoped>

</style>