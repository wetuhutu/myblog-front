
export function mapArticles(rawArticles){

    return rawArticles.map(article => ({
        id: article.id,
        title: article.title,
        summary: article.summary,
        cover:article.cover
    }));
}