<script setup>
import { useUpdateArticleStore } from '@/store/updateArticle';
const store = useUpdateArticleStore();
</script>

<template>
<main>
    <div class="title">{{ store.currentArticle?.title }}</div>
    <div class="content">
        {{ store.currentArticle?.content }}
    </div>
</main>
</template>

<style scoped>
.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.content {
    line-height: 1.6;
}
</style>