import React, { FC, useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'

import { Articles } from './interfaces'

import axios, { AxiosResponse } from 'axios'

import SearchForm from './components/SearchForm'

const App: FC = () => {

  const [articles, setArticles] = useState<Articles[]>([])
  const [about, setAbout] = useState<any>('football')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=${about}&apiKey=ab0d56a18ba94de58da1ebe032084ad9`)
      .then((response: AxiosResponse) => {
        console.log(response.data.articles)
        setArticles(response.data.articles)
        setIsLoading(false)
      })
  }, [about])

  return (
    <>
      <div className="showcase mb-3">
        <div className="overlay">
          <h2 className="text-white text-capitalize">Articles about {about}</h2>
          <SearchForm searchText={(text: any) => setAbout(text)} />
        </div>
      </div>
      {isLoading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div>
        {articles.map((article) => {
          const {source:{name}, author, title, description, url, urlToImage, publishedAt, content} = article
          return (
            <Container
              fluid
            >
              <article key={title} className="card mx-3 bg-white mb-3">
                <Row>
                  <Col sm="6" md="4" className="height-card">
                    <img src={urlToImage} alt="not found" height={305} width={390}/>
                  </Col>
                  <Col sm="6" md="8" className="py-3 pr-3">
                    <h4>{title}</h4>
                    <h6>{description}</h6>
                    <p>{content}<br /><a href={url} target="_blank" rel="noreferrer">read more</a></p>
                    <span>Source: {name}</span><br />
                    <span>Author: {author}</span><br />
                    <span>{publishedAt}</span>
                  </Col>
                </Row>
              </article>
            </Container>
          )
        })}
      </div>
      )}
    </>
  );
}

export default App;
