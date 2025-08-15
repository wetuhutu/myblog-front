<script setup>
import logIn from './views/logIn.vue';
import search from './views/search.vue';
import { RouterView,RouterLink } from 'vue-router';

</script>

<template>
  <div class="background">
    <aside>
      <logIn />

        <!-- 这里放路由导航 -->
        <button class="navigator">
          <RouterLink to="/">ceshilianjie</RouterLink>
        </button>
      
    </aside>

    <main>
      
      <div class="header">
        <search />
      </div>
      <!-- 这里放路由组件 -->
      <RouterView></RouterView>

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
}

.navigator{
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50% , -50%);
}

</style>
