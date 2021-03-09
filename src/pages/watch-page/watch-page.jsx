import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format, getMinutes, parseISO } from 'date-fns';

import { getMediaDetails } from 'src/api';
import { MediaTypeNames } from 'src/utils/const';
import { actorsBreakpoints, videosBreakpoints } from 'src/utils/settings';
import { getBackdropUrl, getUTCRuntime } from 'src/utils/helpers';

import Page from 'src/components/page';
import Collection from 'src/components/collection';
import Card from 'src/components/card';
import VideoPlayer from 'src/components/video-player';

// OWN COMPONENTS
import MediaInfo from './components/media-info';
import ActorCard from './components/actor-card';
import Similar from './components/similar';
import './style.scss';

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

      {data.videos && (
        <Collection
          title={`Видео | ${data.name || data.title}`}
          breakpoints={videosBreakpoints}
        >
          {data.videos.results.map((video) => (
            <VideoPlayer
              key={video.id}
              id={video.id}
              videoKey={video.key}
              name={video.name}
              site={video.site}
            />
          ))}
        </Collection>
      )}

      <Collection
        title="Актеры"
        breakpoints={actorsBreakpoints}
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
