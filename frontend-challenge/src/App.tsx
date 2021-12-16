import React, { useEffect, useState } from 'react';
import './App.css';

import { Articles } from './interfaces'

import axios, { AxiosResponse } from 'axios'

function App() {

  const [articles, setArticles] = useState<Articles[]>([])

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=ab0d56a18ba94de58da1ebe032084ad9`)
      .then((response: AxiosResponse) => {
        console.log(response.data.articles)
        setArticles(response.data.articles)
      })
  }, [])

  return (
    <div>
      {articles.map((article) => {
        const {source:{name}, author, title, description, url, urlToImage, publishedAt, content} = article
        return (
          <article key={title}>
            <img src={urlToImage} alt="not found" height={200} width={300}/>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <p>{content}<a href={url} target="_blank" rel="noreferrer">read more</a></p>
            <ul>
              <li>Source: {name}</li>
              <li>Author: {author}</li>
              <li>{publishedAt}</li>
            </ul><br />
          </article>
        )
      })}
    </div>
  );
}

export default App;
