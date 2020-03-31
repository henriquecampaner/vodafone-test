import React, { useState } from 'react';

import { FiUser, FiPhone, FiMail, FiGlobe, FiMapPin } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Cards({ card }) {
  const [isHovering, setIsHovering] = useState(false);

  function toggleHoverState() {
    return setIsHovering(!isHovering);
  }
  function handleMouseHover() {
    toggleHoverState();
  }

  return (
    <Container>
      <div onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
        {isHovering ? (
          <h2 className="phrase">{card.company.catchPhrase}</h2>
        ) : (
          <h2>{card.company.name}</h2>
        )}
      </div>

      <section>
        <div className="icons">
          <FiUser color="E60000" />
          <h3>{card.name}</h3>
        </div>

        <div className="icons">
          <FiPhone color="E60000" />
          <span>{card.phone}</span>
        </div>

        <div className="icons">
          <FiMail color="E60000" />
          <span>{card.email}</span>
        </div>

        <div className="icons">
          <FiGlobe color="E60000" />
          <span>hildegard.org</span>
        </div>

        <div className="icons">
          <FiMapPin color="E60000" />
          <span>
            {card.address.street} - {card.address.suite} / {card.address.city}
          </span>
        </div>
      </section>
    </Container>
  );
}

Cards.propTypes = {
  card: PropTypes.objectOf(Object).isRequired,
};
