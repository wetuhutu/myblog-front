<script setup>
import logIn from './views/logIn.vue';
import articleCard from './views/articleCard.vue';
import search from './views/search.vue';
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

.header {
    height: 30%;
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
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
  height: 180px;
}

</style>
