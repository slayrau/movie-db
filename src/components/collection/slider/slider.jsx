import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { IconNames, Breakpoints } from 'utils/const';
import Icon from 'components/icon';
import './style.scss';

SwiperCore.use([Navigation]);

const Slider = ({ breakpoints, children }) => {
  const prevButtonRef = useRef();
  const nextButtonRef = useRef();

  return (
    <div className="slider">
      <button
        className="slider__button slider__button--prev"
        ref={prevButtonRef}
        type="button"
        aria-label="Назад"
      >
        <Icon icon={IconNames.chevronLeft} />
      </button>

      <button
        className="slider__button slider__button--next"
        ref={nextButtonRef}
        type="button"
        aria-label="Вперед"
      >
        <Icon icon={IconNames.chevronRight} />
      </button>

      <Swiper
        cssMode
        freeMode
        observer
        observeParents
        observeSlideChildren
        wrapperTag="ul"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
        }}
        breakpoints={{
          [Breakpoints.extraSmall]: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            ...breakpoints[Breakpoints.extraSmall],
          },
          [Breakpoints.small]: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            ...breakpoints[Breakpoints.small],
          },
          [Breakpoints.medium]: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            ...breakpoints[Breakpoints.medium],
          },
          [Breakpoints.large]: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            ...breakpoints[Breakpoints.large],
          },
          [Breakpoints.extraLarge]: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            ...breakpoints[Breakpoints.extraLarge],
          },
        }}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide tag="li">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  breakpoints: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Slider.defaultProps = {
  breakpoints: {
    [Breakpoints.extraSmall]: {},
    [Breakpoints.small]: {},
    [Breakpoints.medium]: {},
    [Breakpoints.large]: {},
    [Breakpoints.extraLarge]: {},
  },
};

export default Slider;
