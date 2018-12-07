<template>
  <el-container class="app-wrapper">
    <el-aside class="sidebar-container"><left-part/></el-aside>
    <el-container class="main-container">
      <el-header><top-part/></el-header>
      <el-main><main-part/></el-main>
      <el-footer><footer-part/></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { TopPart, LeftPart, MainPart, FooterPart } from './components'

export default {
  name: 'layout',
  components: {
    TopPart,
    LeftPart,
    MainPart,
    FooterPart
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/assets/css/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
