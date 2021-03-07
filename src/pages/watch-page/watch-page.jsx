import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format, getMinutes, parseISO } from 'date-fns';

import { getMediaDetails } from 'api';
import { Breakpoints, MediaTypeNames } from 'utils/const';
import { getBackdropUrl, getUTCRuntime } from 'utils/helpers';
import Page from 'components/page';
import Collection from 'components/collection';
import Card from 'components/card';

// OWN COMPONENTS
import MediaInfo from './components/media-info';
import ActorCard from './components/actor-card';
import Similar from './components/similar';

import './style.scss';

const collectionBreakpoints = {
  [Breakpoints.extraSmall]: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  [Breakpoints.small]: {
    slidesPerView: 4.5,
    slidesPerGroup: 4.5,
  },
  [Breakpoints.medium]: {
    slidesPerView: 6,
    slidesPerGroup: 6,
  },
  [Breakpoints.large]: {
    slidesPerView: 7,
    slidesPerGroup: 7,
  },
  [Breakpoints.extraLarge]: {
    slidesPerView: 8,
    slidesPerGroup: 8,
  },
};

const WatchPage = () => {
  const { mediaType, id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getMediaDetails({ mediaType, id });
      setData(response.data);
      setLoading(false);
    })();
  }, [mediaType, id]);

  if (loading) {
    return null;
  }

  const formatedDuration = getUTCRuntime(data.runtime);

  return (
    <Page className="watch-page">
      <MediaInfo
        title={data.title || data.name}
        mediaType={MediaTypeNames[mediaType]}
        backdropSrc={getBackdropUrl('original', data.backdrop_path)}
        releaseDate={format(parseISO(data.release_date || data.first_air_date), 'yyyy')}
        duration={
          data.runtime && (
            data.runtime > 60
              ? format(formatedDuration, 'H ч. mm мин.')
              : `${getMinutes(formatedDuration)} мин.`
          )
        }
        genres={data.genres}
        overview={data.overview}
      />

      <Collection
        title="Актеры"
        breakpoints={collectionBreakpoints}
      >
        {data.credits.cast.map((cast) => (
          <ActorCard
            key={cast.id}
            id={cast.id}
            name={cast.name}
            character={cast.character}
            photo={cast.profile_path}
          />
        ))}
      </Collection>

      <Similar title="Вам понравится">
        {data.similar.results.map((similar) => (
          <Card
            key={similar.id}
            id={similar.id}
            mediaType={mediaType}
            title={similar.name || similar.title}
            posterPath={similar.poster_path}
          />
        ))}
      </Similar>
    </Page>
  );
};

export default WatchPage;
