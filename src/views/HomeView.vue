<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <div id="standard">
      <h4>关于AI胎心监护模型训练的临床数据收集调查问卷</h4>
      <p class="test">123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
    </div>

    <el-button @click="print">打印</el-button>
  </div>
</template>

<script>
  // 导入打印插件
  import { getLodop } from '@/assets/printPlugin/LodopFuncs';

  export default {
    methods: {
      print() {
        // 获取打印对象
        const LODOP = getLodop();


        // 打印初始化
        LODOP.PRINT_INIT('打印任务名');
        // 1 竖屏 2 横屏
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, 'A4'); // 设置纸张大小
        // 设定纸张大小，指定需要打印的DOM元素
        LODOP.ADD_PRINT_HTML(
          0,
          0,
          '100%',
          '100%',
          document.querySelector('#standard').innerHTML
        );
        // 执行打印-直接打印
        LODOP.PREVIEW(); // 预览（预览页面可以进行下载）

        // LODOP.PRINT()
      },
    },
  };
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  .el-scrollbar > .el-scrollbar__bar {
    opacity: 1;
  }

  /* .test{
    background-color: red; 
    height: 100px
  } */
</style>
