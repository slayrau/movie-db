// import React, { useEffect, useRef } from 'react';
// import SwiperCore, { Navigation, Mousewheel } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import PropTypes from 'prop-types';

// import { IconNames } from 'utils/const';
// import Icon from 'components/icon';
// import './style.scss';

// SwiperCore.use([Navigation, Mousewheel]);

// const Slider = ({ children }) => {
//   const swiperRef = useRef();
//   const prevRef = useRef();
//   const nextRef = useRef();

//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.update();
//     }
//   }, [swiperRef, children]);

//   return (
//     <div className="slider">
//       <button
//         className="slider__button slider__button--prev"
//         ref={prevRef}
//         type="button"
//         aria-label="Назад"
//       >
//         <Icon icon={IconNames.chevronLeft} />
//       </button>

//       <button
//         className="slider__button slider__button--next"
//         ref={nextRef}
//         type="button"
//         aria-label="Вперед"
//       >
//         <Icon icon={IconNames.chevronRight} />
//       </button>

//       <Swiper
//         ref={swiperRef}
//         cssMode
//         wrapperTag="ul"
//         mousewheel={{
//           forceToAxis: true,
//           releaseOnEdges: true,
//         }}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//             spaceBetween: 0,
//           },
//           320: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//             spaceBetween: 0,
//           },
//           480: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 4,
//             slidesPerGroup: 4,
//           },
//           1024: {
//             slidesPerView: 5,
//             slidesPerGroup: 5,
//           },
//           1200: {
//             slidesPerView: 6,
//             slidesPerGroup: 6,
//           },
//         }}
//         onInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;

//           setTimeout(() => {
//             swiper.update();
//           }, 0);
//         }}
//       >
//         {React.Children.map(children, (child) => (
//           <SwiperSlide tag="li">
//             {child}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// Slider.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.element).isRequired,
// };

// export default Slider;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { IconNames, Breakpoints } from 'utils/const';
import Icon from 'components/icon';
import './style.scss';

SwiperCore.use([Navigation]);

const Slider = ({ children }) => {
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
          },
          [Breakpoints.small]: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          [Breakpoints.medium]: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          [Breakpoints.large]: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          [Breakpoints.extraLarge]: {
            slidesPerView: 6,
            slidesPerGroup: 6,
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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Slider;
