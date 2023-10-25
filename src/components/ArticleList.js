import React from "react";
import Article from "./Article"

function ArticleList(props){
    return(
        <main>
            {props.articles.map((article) => {
               return (
                <Article key={article.id} title={article.title} date={article.date || "January 1, 1970"} preview={article.preview}/>
               )
            })}
        </main>
    )
}

export default ArticleList