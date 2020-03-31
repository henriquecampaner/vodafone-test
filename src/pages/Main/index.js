/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { loadCardsRequest } from '../../store/modules/cards/action';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Cards from '../../components/Cards';

export default function Main() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cards);
  const [re, setre] = useState([]);
  const [search, setSearch] = useState('');

  useMemo(() => {
    dispatch(loadCardsRequest());
  }, []);

  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    setre(cards);
  }, [cards, search]);

  function handleSearch(e) {
    e.preventDefault();

    setre(
      re.filter((card) => {
        return card.username.toLowerCase().includes(search.toLocaleLowerCase());
      })
    );
  }

  return (
    <Container>
      <Header />

      <Content>
        <form onSubmit={handleSearch}>
          <div>
            <MdSearch size={20} color="#666" />
            <input
              type="text"
              placeholder="Search by user"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        {!loading ? (
          <ul>
            {re.map((card) => (
              <Cards card={card} key={card.id} />
            ))}
          </ul>
        ) : (
          <AiOutlineLoading3Quarters className="spinner" />
        )}
      </Content>
    </Container>
  );
}
