<script setup>
import Search from './components/search.vue'
import Operation from './components/operation.vue'

// const {data, status, error, refresh}= await useFetch('/api/vip/articleBlog/pageList',{
//   method:'POST',
//   body:{
//     "pageNum": 1,
//     "pageSize": 6,
//     "params": {
//       "language": "pt",
//       "clientType": "SIHI"
//     }
//   },
//   server:false
// })

// const {data} = await useFetch('/api/user/list')
</script>

<template>
<div>
  <Search/>

  <Operation/>
</div>
</template>

<style scoped>

</style>
