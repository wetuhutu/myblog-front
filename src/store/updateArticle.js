import { defineStore } from "pinia";
import { ref } from "vue";

export const useUpdateArticleStore = defineStore("updateArticle", () => {
    const articleList = ref([
        
    ]);
    return {articleList}

}
)