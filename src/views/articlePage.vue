<script setup>
import { ref, onMounted } from 'vue';
import { useUpdateArticleStore } from '@/store/updateArticle';
import { articleApi } from '@/utils/api'

const store = useUpdateArticleStore();
const content = ref(null);
const loading = ref(true);
const error = ref(null);

// 在组件挂载时获取文章内容
const getArticleData = async () => {
    try {
        loading.value = true;
        const response = await articleApi.getArticle(1);
        content.value = response.data.data.content;
        
    } catch (err) {
        error.value = '获取文章失败: ' + err.message;
        console.error('获取文章失败:', err);
    } finally {
        loading.value = false;
    }
};

// 在组件挂载后调用获取文章函数
onMounted(() => {
    getArticleData();
});

</script>

<template>
<main>
    <div v-if="loading">正在加载...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
        <div class="title">{{ store.currentArticle?.title }}</div>
        <div class="content">
            {{ content }}
        </div>
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