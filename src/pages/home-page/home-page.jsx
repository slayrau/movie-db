import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MediaType from 'src/utils/const/media-type';
import { actorsBreakpoints } from 'src/utils/settings';

import Operation from 'src/redux/operations/trending';
import ActionCreator from 'src/redux/actions/trending';
import Selector from 'src/redux/selectors/trending';

import Page from 'src/components/page';
import Collection from 'src/components/collection';
import CardSkeleton from 'src/components/card-skeleton';
import Card from 'src/components/card';
import ActorCard from 'src/components/actor-card';
import './style.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const trending = useSelector(Selector.trending);

  useEffect(() => {
    dispatch(Operation.getTrending());

    return () => {
      dispatch(ActionCreator.resetTrendings());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const preloadingCards = new Array(20).fill(0);

  return (
    <Page>
      <div className="page__row">
        <Collection title="Популярные фильмы">
          {trending.loading
            ? (
              preloadingCards.map((_, i) => <CardSkeleton key={i} />)
            ) : (
              trending[MediaType.movie].map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  mediaType={card.media_type}
                  title={card.title || card.name}
                  posterPath={card.poster_path}
                  releaseDate={card.release_date || card.first_air_date}
                  voteAverage={card.vote_average}
                />
              ))
            )}
        </Collection>
      </div>

      <div className="page__row">
        <Collection title="Популярные сериалы">
          {trending.loading
            ? (
              preloadingCards.map((_, i) => <CardSkeleton key={i} />)
            ) : (
              trending[MediaType.tv].map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  mediaType={card.media_type}
                  title={card.title || card.name}
                  posterPath={card.poster_path}
                  releaseDate={card.release_date || card.first_air_date}
                  voteAverage={card.vote_average}
                />
              ))
            )}
        </Collection>
      </div>

      <div className="page__row">
        <Collection
          title="Популярные актеры"
          breakpoints={actorsBreakpoints}
        >
          {trending.loading
            ? (
              preloadingCards.map((_, i) => <CardSkeleton actor key={i} />)
            ) : (
              trending[MediaType.person].map((card) => (
                <ActorCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  character={card.character}
                  photo={card.profile_path}
                />
              ))
            )}
        </Collection>
      </div>
    </Page>
  );
};

export default HomePage;
