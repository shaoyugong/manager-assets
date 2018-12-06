<template>
  <el-container>
    <el-header><top-part/></el-header>
    <el-container>
      <el-aside width="25%"><left-part/></el-aside>
      <el-container>
        <el-main><main-part/></el-main>
        <el-footer><footer-part/></el-footer>
      </el-container>
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

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
