<template>
  <div id="app">
    {{message}}
    <button @click="fnIndex">切换index</button>
    <button @click="fnUsers">切换users</button>
  </div>
</template>

<script>
import '../env'
export default {
  data(){
    return {
      message: ''
    }
  },
  mounted(){
    this.fnIndex();
  },
  methods:{
    fnIndex(){
      fetch(''+window.env.apiUrl+'/index').then(res => res.json()).then(result => {
        this.message = result;
      })
    },
    fnUsers(){
      fetch(''+window.env.apiUrl+'/users').then(res => res.json()).then(result => {
        this.message = result;
      })
    }
  }
}
</script>

<style>

</style>
