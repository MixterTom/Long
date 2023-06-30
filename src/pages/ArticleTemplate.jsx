import ArticleContent from '../components/ArticleContent/ArticleContent'

const ArticleTemplate = (article) => {
    //const { page, id } = article
    return (
        <>
            <ArticleContent
                page={article.page}
            />
        </>
    )
}

export default ArticleTemplate