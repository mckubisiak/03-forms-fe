import React from 'react';
import { render, screen } from '@testing-library/react';
import NewContainer from './NewsContainer';


describe('NewsContainer', () => {
  it('should display list of new articles', async () => {
    render(<NewContainer />);

    screen.getByText('Time for the Newwsss');

    

  });
});
