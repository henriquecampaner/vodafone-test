import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Main from '../../pages/Main';

describe('PAge Main', () => {
  it('should be able to ', () => {
    const { getByTestId } = render(<Main />);
  });
});
