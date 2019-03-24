
<template>
    <div>
      sere
    </div>
</template>

<script>
  import {storage} from "../../store/storage"
    export default {
        name: "home",
      data(){
          return{}
      },
      methods:{
          getSessionState(){
            storage.getUserInfo()
          }
      },
      created(){

      }
    }
</script>

<style scoped>

</style>
