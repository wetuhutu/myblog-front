<script setup>
import logIn from './views/logIn.vue';
import articleCard from './views/articleCard.vue';
import search from './views/search.vue';
import updataArticle from './views/updataArticle.vue';
</script>

<template>
  <div class="background">
    <aside>
      <logIn />
    </aside>

    <main>
      <div class="header">
        <search />
      </div>
      <div class="main-content">
        <div style="width: 100%;"> <updataArticle /></div>
        
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>
        <div class="card"><articleCard /></div>


      </div>
      
    </main>
  </div>
</template>

<style scoped>
aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: 100vh;
}

main {
    margin-left: 30%;
    width: 70%;
    height: 100vh;
}

/* .updata{
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
} 
.updata .content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 30px;
  width: 100px;
  font-family: sans-serif;
  font-size: 15px;
  color: rgba(0, 255, 255, 0.5);
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  outline: none;
  backdrop-filter: blur(5px);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.updata .content:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;
}
  */

.header {
    height: 30%;
    display: flex;
    font-size: 20px;
    align-items: center;
}

.main-content {
    position: relative;
    height: 70%;
    display: flex;
    align-items: center;
    overflow-y: scroll ;
    scrollbar-width: none;
    font-size: 30px;
    flex-wrap: wrap;
}

.card{
  width: 20%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-top: 10px;
  height: 180px;
}

</style>
