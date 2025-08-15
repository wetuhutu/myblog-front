import { defineStore } from "pinia";
import { ref } from "vue";

export const useUpdateArticleStore = defineStore("updateArticle", () => {
    // 文章列表
    const articleList = ref([]);
    // 当前选中的文章
    const currentArticle = ref(null);

    // 设置当前文章
    function setCurrentArticle(article) {
        currentArticle.value = article;
    }

    return {
        articleList,
        currentArticle,
        setCurrentArticle
    }
})