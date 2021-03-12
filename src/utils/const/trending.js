import MediaType from 'src/utils/const/media-type';
import TimeWindow from 'src/utils/const/time-window';

const Trending = {
  movieByDay: {
    mediaType: MediaType.movie,
    timeWindow: TimeWindow.day,
  },

  tvByDay: {
    mediaType: MediaType.tv,
    timeWindow: TimeWindow.day,
  },

  personByDay: {
    mediaType: MediaType.person,
    timeWindow: TimeWindow.day,
  },
};

export default Trending;
