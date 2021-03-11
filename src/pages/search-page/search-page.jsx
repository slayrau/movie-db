import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import SearchOperation from 'src/redux/operations/search';
import DiscoverSelector from 'src/redux/selectors/discover';
import DiscoverActionCreator from 'src/redux/actions/discover';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import LoadMoreButton from 'src/components/load-more-button';

import FormikSelect from './components/formik-select';
import './style.scss';

const SearchPage = () => {
  const dispatch = useDispatch();
  const discover = useSelector(DiscoverSelector.discover);

  useEffect(() => {
    return () => dispatch(DiscoverActionCreator.resetResults());
  }, []);

  const handleSubmit = ({ mediaType, query }) => {
    dispatch(SearchOperation.getSearch({ mediaType, query }));
  };

  const handleLoadMore = ({ mediaType, query }) => {
    dispatch(SearchOperation.loadMoreSearch({ mediaType, query }));
  };

  const getPlaceholder = (mediaType) => {
    const types = {
      tv: 'сериала',
      movie: 'фильма',
    };

    return `Название ${types[mediaType]}...`;
  };

  return (
    <Page className="search-page">

      <Formik
        initialValues={{
          mediaType: 'movie',
          query: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <div className="container">
            <Form>
              <div className="search-page__row">
                <FormikSelect
                  name="mediaType"
                  data={[
                    { id: 'movie', name: 'Фильмы' },
                    { id: 'tv', name: 'Сериалы' },
                  ]}
                />

                <Field
                  className="search-page__input"
                  name="query"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder={getPlaceholder(values.mediaType)}
                />
              </div>
            </Form>

            <CardGrid>
              {discover.data.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  mediaType={values.mediaType}
                  title={item.title || item.name}
                  posterPath={item.poster_path}
                />
              ))}
            </CardGrid>

            {(discover.page < discover.total_pages) && (
              <LoadMoreButton
                onLoadMoreClick={() => handleLoadMore(values)}
                disabled={discover.loading}
              />
            )}
          </div>
        )}
      </Formik>
    </Page>
  );
};

export default SearchPage;
