<template>
  <ICountUp
    :startVal="startVal"
    :endVal="endVal"
    :decimals="decimals"
    :duration="duration"
    :options="options"
  />
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
  name: 'NumCountup',
  components: {
    ICountUp
  },
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      startVal: 0,
      endVal: this.number,
      decimals: 0,
      duration: 2.5,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    };
  }
};
</script>
