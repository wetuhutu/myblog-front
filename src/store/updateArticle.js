import { defineStore } from "pinia";
import { ref } from "vue";


export const useUpdateArticleStore = defineStore("updateArticle", () => {
    const articleList = ref([{
    id: '1',
    title: 'Test',
    content: '测试',
},{
    id: '2',
    title: 'Test2',
    content: '测试2',
}
]);
    return {articleList}

}
)