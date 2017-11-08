<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu v-for="(mobj,i) in $d.menu" :index="'1' + i" :key="i">
            <template slot="title"><i :class="mobj.icon"></i> {{mobj.name}}</template>
            <el-menu-item v-for="(subMenu, j) in mobj.subMenu" :key="j" :index="subMenu.link">{{subMenu.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElMenuItem from "../../../node_modules/element-ui/packages/menu/src/menu-item.vue";

  export default {
    vued: ['menu'],
    components: {ElMenuItem},
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '');
      }
    },
  }
</script>


<style lang="less" scoped>
  @import '../../style/mixin';

  .manage_page {

  }
</style>
