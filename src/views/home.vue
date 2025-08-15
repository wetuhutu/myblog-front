<script setup>
import articleCard from './articleCard.vue';
import updataArticle from './updataArticle.vue';
import { useUpdateArticleStore } from '@/store/updateArticle';

const updateArticleStore = useUpdateArticleStore();

</script>

<template>

    <div class="main-content">
        <div style="width: 100%;"> <updataArticle /></div>
        
        <div v-for="article in updateArticleStore.articleList" class="card"> 
          <articleCard :article="article" />
        </div>
    
    </div>
    
</template>

<style scoped>

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