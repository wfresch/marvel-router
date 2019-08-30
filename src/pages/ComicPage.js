import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';

export default function ComicPage(props) {
  // Setting initial state
  const initialComicState = {
    comic: {},
    loading: true,
  }

  // Getter and setter for comic state
  const [comic, setComic] = useState(initialComicState)

  useEffect(() => {
    const getComic = async () => {
      // Note - Use a valid apikey from developer.marvel.com. I hard-coded these values locally.
      axios.get(`https://gateway.marvel.com/v1/public/comics/${props.match.params.id}?ts=1&apikey={apikey}&hash={hash}`).then(res => {
            const data = res.data.data.results[0];
            setComic(data);
        });
    }

    getComic()
  }, []) 

  // Return info on an individual comic from the API.
  return comic.loading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <Row>
        <Col xs="auto">
          <h1>{comic.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} alt={comic.title} />
        </Col>
        <Col>
          {comic.description ? comic.description : 'No Description Available'}
        </Col>
      </Row>
    </Container>
  )
}