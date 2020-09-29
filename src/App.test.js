import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import { fetchMedia } from './utils/api';

jest.mock('./utils/api.js');

const data = {
  genre: 'All',
  tracks: [
    {
      img: 'https://i.ytimg.com/vi/55ak4ubAbIY/default.jpg',
      name: 'Elvis Presley - Little Sister (video clip made by Romaico Nieuwland)',
      pl: {
        name: 'English Songs - (All kinds of music except jazz and similar)'
      },
      rankIncr: 0,
      src: {
        id: 'https://www.youtube.com/watch?v=55ak4ubAbIY&list=RD55ak4ubAbIY&start_radio=1&t=43'
      } 
    }
  ]
};

const data2 = {
  genre: 'All',
  tracks: [
    {
      img: 'https://i.ytimg.com/vi/YF1R0hc5Q2I/default.jpg',
      name: 'Fleetwood Mac - Everywhere (Official Music Video)',
      pl: {
        name: 'English Songs - (All kinds of music except jazz and similar)'
      },
      rankIncr: 0,
      src: {
        id: 'https://www.youtube.com/watch?v=YF1R0hc5Q2I&list=PLmXxqSJJq-yXrCPGIT2gn8b34JjOrl4Xf&index=20'
      } 
    }
  ]
};

describe('App', () => {
  beforeEach(() => {
    fetchMedia.mockClear();
  })

  it('should fetch the media list', () => {
    fetchMedia.mockResolvedValueOnce(data);

    render(<App />);

    expect(fetchMedia).toHaveBeenCalled();
  });

  it('should show more results when user clicks on load more', async () => {
    fetchMedia.mockResolvedValueOnce(data).mockResolvedValueOnce(data2);

    render(<App />);

    await waitFor(() => expect(screen.getByText(`${data.tracks[0].name}`)).toBeInTheDocument());

    const loadMoreButton = screen.getByText(/Load more/i);

    userEvent.click(loadMoreButton);

    expect(fetchMedia).toHaveBeenCalledTimes(2);

    await waitFor(() => expect(screen.getByText(`${data2.tracks[0].name}`)).toBeInTheDocument());
  });
});
