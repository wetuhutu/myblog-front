import { request } from './articleRequest'

export const articleApi ={
    

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    getArticle: (id) => {
        if (!id) {
            return Promise.reject(new Error('文章id为空!'))
        }

        return request({
            url: `/api/articles/${id}`,
            method: 'GET'
        })
    }


}