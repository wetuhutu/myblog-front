<script setup>
import logIn from './views/logIn.vue';
import articleCard from './views/articleCard.vue';
import search from './views/search.vue';
import updataArticle from './views/updataArticle.vue';
import { ref } from 'vue';
import { useUpdateArticleStore } from '@/store/updateArticle';

const updateArticleStore = useUpdateArticleStore();
const articles = ref([]);
articles.value = updateArticleStore.articleList;

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
        
        <div v-for="article in articles" class="card"> 
          <articleCard>
            <template #title>
              {{ article.title }}
            </template>
            <template>
              {{ article.content }} 
            </template>
          </articleCard>
          
        </div>
    
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
}

.main-content {
    position: relative;
    height: 70%;
    display: flex;
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
