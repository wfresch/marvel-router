import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

export default function ResultsPage(props) {
  // Setting initial state
  const initialResultsState = {
    results: [],
    loading: true,
  }

  // Getter and setter for results state
  const [results, setResults] = useState(initialResultsState)

  useEffect(() => {
    const getResults = async () => {
      // Note - Use a valid apikey from developer.marvel.com. I hard-coded these values locally.
      axios.get(`https://gateway.marvel.com/v1/public/comics?titleStartsWith=${props.match.params.search}&ts=1&apikey={apikey}&hash={hash}`).then(res => {
            const comics = res.data.data.results.map(obj => obj);
            setResults(comics);
        });      
    }

    getResults()
  }, []) 


  // Return the search results from the API.
  return results.loading ? (
    <div>Loading...</div>
  ) : (
    <div>
        <h1>Marvel Comics</h1>
        <Container>
          <Row>
            {results.map(comic => {
                const imgUrl = `${comic.thumbnail.path}/standard_medium.${comic.thumbnail.extension}`;
                const issueUrl = `/comics/${comic.id}`;

                return <Col xs="auto"><Link to={issueUrl}><img src={imgUrl} alt={comic.title} /></Link></Col>;
            })}
          </Row>
        </Container>
    </div>
  )
}