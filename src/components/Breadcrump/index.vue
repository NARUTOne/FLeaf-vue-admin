<template>
  <transition name='breadcrump'>
    <Breadcrumb separator='/' class='p-breadcrump'>
      <BreadcrumbItem v-for='item in dataList' :to='item.path' :key='item.path' >{{renderTitle(item)}}</BreadcrumbItem>
      <!-- <BreadcrumbItem to='' key='' ></BreadcrumbItem>   -->
    </Breadcrumb>
  </transition>
</template>

<script>
import {Breadcrumb, BreadcrumbItem} from 'iview';
export default {
  name: 'PBreadcrumb',
  components: {
    Breadcrumb, BreadcrumbItem
  },
  created () {
    this.getBreadData();
  },
  data () {
    return {
      dataList: []
    };
  },
  watch: {
    $route () {
      this.getBreadData();
    }
  },
  computed: {
  },
  methods: {
    renderTitle (data) {
      return data.meta && data.meta.title ? data.meta.title : 'null';
    },
    getBreadData () {
      const arr = this.$route.matched.filter(item => item.name);
      let rMatcheds = [...arr];
      if (!rMatcheds || !rMatcheds.length) {
        rMatcheds = [{path: '/', name: '/', meta: {title: '/'}}].concat(rMatcheds);
      }
      rMatcheds[0].path = '';
      // console.log(rMatcheds);
      this.dataList = rMatcheds;
    }
  }
};
</script>

<style scoped>
.p-breadcrump {
  padding: 12px;
  padding-bottom: 0;
  font-size: 14px;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

</style>
