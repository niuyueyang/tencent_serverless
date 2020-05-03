<template>
  <div id="app">
    {{message}}
    <div>
      <button @click="fnIndex">切换index</button>
      <button @click="fnUsers">切换users</button>
    </div>
  </div>
</template>

<script>
  import '../env'
export default {
  data(){
    return {
      message: '初始化'
    }
  },
  mounted(){
    this.fnIndex();
  },
  methods:{
    fnIndex(){
      fetch(''+window.env.apiUrl+'index').then(res => res.text()).then(result => {
        this.message = result;
      })
    },
    fnUsers(){
      fetch(''+window.env.apiUrl+'users').then(res => res.text()).then(result => {
        this.message = result;
      })
    }
  }
}
</script>

<style>

</style>
