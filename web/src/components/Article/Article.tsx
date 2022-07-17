import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface ArticleProps {
  article: Post
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article key={article.id}>
      <h2>
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
      </h2>
      <p>{article.body}</p>
      <small>Posted at: {article.createdAt}</small>
    </article>
  )
}

export default Article
