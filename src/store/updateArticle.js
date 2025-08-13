import { defineStore } from "pinia";

export const useUpdateArticleStore = defineStore("updateArticle", () => {
    const articleList = ref({});
    return {articleList}

}
)