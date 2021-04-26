import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProfileImg } from 'src/utils/helpers';
import { MediaType } from 'src/utils/const';

import Operation from 'src/redux/operations/person';
import ActionCreator from 'src/redux/actions/person';
import Selector from 'src/redux/selectors/person';

import PageSpinner from 'src/components/page-spinner';
import Image from 'src/components/image';
import Title from 'src/components/title';

import SocialLinks from './components/social-links';
import PersonInfo from './components/person-info';
import PersonBio from './components/person-bio';
import CreditsList from './components/credits-list';
import './style.scss';

const PersonPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(Selector.person);

  useEffect(() => {
    dispatch(Operation.getPerson(id));

    return () => dispatch(ActionCreator.resetPerson());
  }, []);

  return (
    <main className="person-page page">
      {loading
        ? (
          <PageSpinner size="regular" />
        ) : (
          <div className="container">
            <div className="person-page__content">
              <div className="person-page__column person-page__column--left">
                <section className="person-page__person-profile">
                  <div className="person-page__person-photo-wrapper">
                    <Image src={getProfileImg('h632', data.profile_path)} />
                  </div>
                  <SocialLinks links={data.external_ids} />
                  <PersonInfo
                    gender={data.gender}
                    birthday={data.birthday}
                    placeOfBirth={data.place_of_birth}
                  />
                </section>
              </div>

              <div className="person-page__column person-page__column--right">
                <section className="person-page__main-content">
                  <Title level={1}>{data.name}</Title>
                  {data.biography && <PersonBio biography={data.biography} />}
                  <CreditsList
                    tv={data.tv_credits.cast}
                    movie={data.movie_credits.cast}
                  />
                </section>
              </div>
            </div>
          </div>
        )}
    </main>
  );
};

export default PersonPage;
