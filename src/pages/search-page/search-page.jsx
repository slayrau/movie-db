import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { MediaType } from 'src/utils/const';

import SearchOperation from 'src/redux/operations/search';
import DiscoverSelector from 'src/redux/selectors/discover';
import DiscoverActionCreator from 'src/redux/actions/discover';
import { useQuery } from 'src/hooks';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import LoadMoreButton from 'src/components/load-more-button';
import Select from 'src/components/select';

import './style.scss';

const SearchPage = () => {
  const isSubmitedRef = useRef(false);
  const urlQuery = useQuery();
  const history = useHistory();
  const dispatch = useDispatch();
  const discover = useSelector(DiscoverSelector.discover);
  const timeoutRef = useRef();

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

  useEffect(() => {
    return () => dispatch(DiscoverActionCreator.resetResults());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page className="search-page">
      <Formik
        initialValues={{
          query: urlQuery.get('term') || '',
          mediaType: urlQuery.get('type') || MediaType.movie,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, submitForm, handleChange, setFieldValue }) => {
          if (!isSubmitedRef.current) {
            submitForm();
            isSubmitedRef.current = true;
          }

          return (
            <div className="container">
              <Form>
                <div className="search-page__row">
                  <Select
                    title=""
                    data={[
                      { id: MediaType.movie, name: 'Фильмы' },
                      { id: MediaType.tv, name: 'Сериалы' },
                    ]}
                    selectedId={values.mediaType}
                    onSelectClick={(event) => {
                      setFieldValue('mediaType', event.target.id);
                      urlQuery.set('type', event.target.id);
                      history.replace({ search: urlQuery.toString() });
                      submitForm();
                    }}
                    column
                  />

                  <Field
                    className="search-page__input"
                    name="query"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder={getPlaceholder(values.mediaType)}
                    onChange={(event) => {
                      handleChange(event);

                      clearTimeout(timeoutRef.current);

                      timeoutRef.current = setTimeout(() => {
                        if (event.target.value) {
                          urlQuery.set('term', event.target.value);
                          submitForm();
                        } else {
                          urlQuery.delete('term');
                          dispatch(DiscoverActionCreator.resetResults());
                        }

                        history.replace({ search: urlQuery.toString() });
                      }, 400);
                    }}
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
                    releaseDate={item.release_date || item.first_air_date}
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
          );
        }}
      </Formik>
    </Page>
  );
};

export default SearchPage;
