<template>
  <Submenu :name="data.name" v-if="isChildren">
    <template slot="title">
      <template>
        <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
        <Icon :type="data.icon" v-else></Icon>
      </template>      
      <span>{{data.title}}</span>
    </template>
    <ExpandMenu
      v-for="(item, i) in data.children"
      :key="i"
      :data="item"
      :children-key="childrenKey" />
  </Submenu>
  <MenuItem :name="data.name" v-else>
    <template>
      <FLIcon :type="data.icon" v-if="data.isFLIcon"></FLIcon>
      <Icon :type="data.icon" v-else></Icon>
    </template>   
    <!-- <router-link :to="data.url">{{data.name}}</router-link> -->
    <span>{{data.title}}</span>
  </MenuItem>  
</template>

<script>
import {Menu, Icon} from "iview";
import {FLIcon} from "@/components/";

const MenuItem = Menu.Item;
const Submenu = Menu.Sub;

export default {
  name: 'ExpandMenu',
  components: {
    MenuItem, Submenu, Icon, FLIcon
  },
  data () {
    return {};
  },
  props: {
    data: {
      type: [Object, Array]
    },
    theme: {
      type: String,
      default: 'dark'
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
  },
  computed: {
    isChildren () {
      return  this.data[this.childrenKey] &&  this.data[this.childrenKey].length ;
    }
  }
};
</script>
