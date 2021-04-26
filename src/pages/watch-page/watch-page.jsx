import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { format, getMinutes, parseISO } from 'date-fns';

import { actorsBreakpoints, videosBreakpoints } from 'src/utils/settings';
import { getBackdropUrl, getUTCRuntime, getMediaTypeName } from 'src/utils/helpers';

import Selector from 'src/redux/selectors/details';
import ActionCreator from 'src/redux/actions/details';
import Operation from 'src/redux/operations/details';

import Page from 'src/components/page';
import PageSpinner from 'src/components/page-spinner';
import Collection from 'src/components/collection';
import Card from 'src/components/card';
import VideoPlayer from 'src/components/video-player';
import ActorCard from 'src/components/actor-card';

// OWN COMPONENTS
import MediaInfo from './components/media-info';
import Similar from './components/similar';
import './style.scss';

const WatchPage = () => {
  const { mediaType, id } = useParams();
  const history = useHistory();
  const { data, loading, error } = useSelector(Selector.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operation.getDetails({ mediaType, id }));

    return () => dispatch(ActionCreator.resetDetails());
  }, [dispatch, mediaType, id]);

  if (error) {
    history.replace(`/${mediaType}`);
    return null;
  }

  const formatedDuration = getUTCRuntime(data.runtime);
  const releasedDate = (data.release_date || data.first_air_date) ? format(parseISO(data.release_date || data.first_air_date), 'yyyy') : '';

  return (
    <Page className="watch-page">
      {loading
        ? (
          <PageSpinner size="regular" />
        ) : (
          <>
            <MediaInfo
              title={data.title || data.name}
              mediaType={mediaType}
              mediaTypeName={getMediaTypeName(mediaType)}
              backdropSrc={getBackdropUrl('original', data.backdrop_path)}
              releaseDate={releasedDate}
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

            {!!data.videos.results.length && (
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

            {!!data.credits.cast.length && (
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
            )}

            {!!data.similar.results.length && (
              <Similar title="Вам понравится">
                {data.similar.results.map((similar) => (
                  <Card
                    key={similar.id}
                    id={similar.id}
                    mediaType={mediaType}
                    title={similar.title || similar.name}
                    posterPath={similar.poster_path}
                    releaseDate={similar.release_date || similar.first_air_date}
                    voteAverage={similar.vote_average}
                  />
                ))}
              </Similar>
            )}
          </>
        )}
    </Page>
  );
};

export default WatchPage;
