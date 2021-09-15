import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsContainer from './NewsContainer';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const url = 'https://newsapi.org/v2/everything';

const mockServer = setupServer(
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json({ articles: [{
        title: 'Snakes are slithering',
        author: 'Isaac Awing',
        description: 'snakes just slithering all through the grass',
      }]
        
      })
    );
  })
);

describe('NewsContainer', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('should display list of new articles', async () => {
    render(<NewsContainer />);

    
    const searchWord = screen.getByRole('textbox', { name: 'keyword search' });
    userEvent.type(searchWord, '{selectall}{del}snakes');
    
    screen.debug();

    const button = screen.getByRole('button', { name: 'submit' });
    userEvent.click(button);

    const ul = await screen.findByRole('list', { name: 'articles' });
    
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
