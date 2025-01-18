

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperPaginationStyleDirective } from '../shared/swiper-pagination-style.directive';

@Component({
  selector: 'app-announcement-slider',
  imports: [CommonModule,SwiperPaginationStyleDirective],
  templateUrl: './announcement-slider.component.html',
  styleUrl: './announcement-slider.component.scss'
})
export class AnnouncementSliderComponent implements OnInit {
  sliders: any[] = [
    {
      title: 'Egypt',
      slogan: 'Investment expertise you can trust',
      pragraph:
        'Investing in Egypt presents numerous opportunities and advantages due to its unique geographical location, large population, and growing economy.',
      imgPath: 'assets/images/banner/slide-1.png',
      vedioPath: '',
    },
    {
      title: 'Egypt',
      slogan: 'Investment expertise you can trust',
      pragraph:
        'Investing in Egypt presents numerous opportunities and advantages due to its unique geographical location, large population, and growing economy.',
      imgPath: 'assets/images/banner/slide-2.png',
      vedioPath: '',
    },
    {
      title: 'Egypt',
      slogan: 'Investment expertise you can trust',
      pragraph:
        'Investing in Egypt presents numerous opportunities and advantages due to its unique geographical location, large population, and growing economy.',
      imgPath: 'assets/images/banner/slide-3.jpg',
      vedioPath: '',
    },
    {
      title: 'Egypt',
      slogan: 'Investment expertise you can trust',
      pragraph:
        'Investing in Egypt presents numerous opportunities and advantages due to its unique geographical location, large population, and growing economy.',
      imgPath: 'assets/images/banner/slide-4.jpg',
      vedioPath: '',
    },
    {
      title: 'Egypt',
      slogan: 'Investment expertise you can trust',
      pragraph:
        'Investing in Egypt presents numerous opportunities and advantages due to its unique geographical location, large population, and growing economy.',
      imgPath: 'assets/images/banner/slide-4.jpg',
      vedioPath: '',
    },
    // {
    //   title: 'Egypt',
    //   slogan: 'Investment expertise you can trust',
    //   pragraph:
    //     'Investing in Egypt presents numerous opportunities and advantages due to its unique geographical location, large population, and growing economy. ',
    //   imgPath: '',
    //   vedioPath: 'assets/images/banner/viedo-1.mp4',
    // },
  ];

  ngOnInit() {
    new Swiper('.swiper-container', {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: false,
    });
  }
}





