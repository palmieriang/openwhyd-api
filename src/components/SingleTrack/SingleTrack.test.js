import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleTrack from './SingleTrack';

const track = {
    img: 'https://i.ytimg.com/vi/55ak4ubAbIY/default.jpg',
    name: 'Elvis Presley - Little Sister (video clip made by Romaico Nieuwland)',
    pl: {
      name: 'English Songs - (All kinds of music except jazz and similar)'
    },
    rankIncr: 0,
    src: {
      id: 'https://www.youtube.com/watch?v=55ak4ubAbIY&list=RD55ak4ubAbIY&start_radio=1&t=43'
    }
};

describe('App', () => {
  test('should fetch the media list', () => {
    render(<SingleTrack track={track} />);
    expect(screen.getByText(`${track.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${track.pl.name}`)).toBeInTheDocument();

    // const { getByText } = render(<SingleTrack track={track} />);
    // expect(getByText(`${tracks.name}`)).toBeInTheDocument();
    // expect(getByText(`${tracks.pl.name}`)).toBeInTheDocument();
  });
});
