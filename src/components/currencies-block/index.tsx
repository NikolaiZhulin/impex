import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import { PopularCurrencyItem } from 'src/components/currency-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Keyboard, Scrollbar, Navigation, Pagination,
} from 'swiper/modules';
import { ArrowButton } from '@components/arrow-button';
import styles from './styles.module.scss';

export type Props = {
  title: ReactNode
  className?: string
}

export const CurrenciesBlock: FC<Props> = (props) => {
  const { title, className } = props;

  return (
    <div className={cn(styles.container, className)}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <Swiper
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          navigation={{
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
            disabledClass: styles['swiper-button-disabled'],
          }}
          aria-disabled
          id="swiper1"
          scrollbar
          breakpoints={{
            861: {
              slidesPerView: 3,
            },
            601: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
            <PopularCurrencyItem icon="/images/icons/ruble.svg" slug="BTC" price={37.083} name="Bitcoin" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.buttonsWrapper}>
        <ArrowButton id="swiper-button-prev" direction="left" />
        <ArrowButton id="swiper-button-next" direction="right" />
      </div>
    </div>
  );
};
