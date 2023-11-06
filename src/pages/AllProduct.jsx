import React from 'react';
import beers from '../data/beers'
import BeerCard from '../components/BeerCard'

const AllProduct = ({ setPage }) => {
  return (
    <div>
      <h1 className="m-4">Discover all my favortie beers</h1>
      <div className="columns is-multiline m-5">
        {beers.map(beer => <BeerCard beer={beers[0]} setPage={setPage} />)}
      </div>
    </div>
  )
}

export default AllProduct