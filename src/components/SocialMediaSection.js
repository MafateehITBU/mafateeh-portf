import React, { useState, useEffect } from 'react';

const SocialMediaSection = () => {
  const [activeSector, setActiveSector] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

  const sectors = [
    { id: 'all', name: 'All Posts' },
    { id: 'medical', name: 'Medical Sector' },
    { id: 'service', name: 'Service Sector' },
    { id: 'stores', name: 'Stores Sector' },
    { id: 'trading', name: 'Trading Sector' },
    { id: 'fashion', name: 'Fashion Sector' },
    { id: 'school', name: 'School Sector' },
    { id: 'industrial', name: 'Industrial Sector' },
  ];

  // Add your social media posts with full Cloudinary URLs for each sector
  const getPostsForSector = (sectorId) => {
    switch (sectorId) {
      case 'medical':
        return [
          
          {
            id: 7,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071463/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%AA%D9%82%D8%B3%D9%8A%D8%B7_nqvrhn.jpg',
            title: 'Medical Post 7'
          },
          {
            id: 1,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071464/Artboard_4_nqp2g6.png',
            title: 'Medical Post 1'
          },
          {
            id: 2,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071464/Artboard_12_wcimeg.png',
            title: 'Medical Post 2'
          },
          {
            id: 3,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071464/%D8%B9%D8%B1%D8%B6_%D8%AA%D9%82%D9%88%D9%8A%D9%85_%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86_%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A_juphnd.jpg',
            title: 'Medical Post 3'
          },
          {
            id: 4,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071464/Artboard_7_t2k5ec.png',
            title: 'Medical Post 4'
          },
          {
            id: 12,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071457/Artboard_16_g2xbpl.png',
            title: 'Medical Post 12'
          },
          {
            id: 5,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071463/%D8%B9%D8%B1%D8%B6_%D8%AA%D9%82%D9%88%D9%8A%D9%85_%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86_%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D9%81_2_copy_hoxvbb.jpg',
            title: 'Medical Post 5'
          },
          {
            id: 6,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071463/%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3_aabvam.jpg',
            title: 'Medical Post 6'
          },
          {
            id: 8,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071460/Artboard_14_oumavs.png',
            title: 'Medical Post 8'
          },
          {
            id: 9,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071459/Artboard_2_etue7i.png',
            title: 'Medical Post 9'
          },
          {
            id: 10,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071458/Kids_ckgio6.jpg',
            title: 'Medical Post 10'
          },
          {
            id: 11,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071458/Artboard_15_fwdys0.png',
            title: 'Medical Post 11'
          },
          {
            id: 13,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071457/Artboard_8_1_bg4yr2.png',
            title: 'Medical Post 13'
          },

        ];
      case 'service':
        return [
          {
            id: 1,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071499/Artboard_13_dojjio.png',
            title: 'Service Post 1'
          },
          {
            id: 2,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071478/Artboard_5_gg4olc.png',
            title: 'Service Post 2'
          },
          {
            id: 3,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071476/Artboard_11_grggfg.png',
            title: 'Service Post 3'
          },
          {
            id: 4,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071476/Artboard_12_dhxdqy.png',
            title: 'Service Post 4'
          },
          {
            id: 5,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071476/Artboard_6_npss1p.png',
            title: 'Service Post 5'
          },
          {
            id: 6,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071475/Artboard_1_hrknpa.jpg',
            title: 'Service Post 6'
          },
          {
            id: 7,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071475/%D9%82%D9%88%D8%A7%D9%86%D9%8A%D9%86_%D8%A7%D9%84%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9_copy_vdwnpa.jpg',
            title: 'Service Post 7'
          },
          {
            id: 8,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071475/%D9%85%D9%86_%D8%A7%D8%B9%D8%AA%D8%B1%D8%A7%D8%B6_%D8%A7%D9%84%D9%89_%D8%A7%D9%86%D8%B5%D8%A7%D9%81_zvfmck.jpg',
            title: 'Service Post 8'
          },
          {
            id: 9,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071474/Artboard_1_pkks6w.png',
            title: 'Service Post 9'
          },
          {
            id: 10,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071474/%D9%81%D9%87%D9%85_%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9_copy_btbcbg.jpg',
            title: 'Service Post 10'
          },
          {
            id: 11,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071473/%D8%B1%D9%8A%D8%A7%D8%AF%D8%A9_%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9_mguzog.jpg',
            title: 'Service Post 11'
          },
          {
            id: 12,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071473/%D8%A7%D9%84%D9%86%D8%AA%D8%A7%D8%A6%D8%AC_%D8%AA%D8%AA%D8%AD%D8%AF%D8%AB_%D8%B9%D9%86_%D9%85%D8%AF%D9%89_aqe3do.jpg',
            title: 'Service Post 12'
          },
          {
            id: 13,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071473/%D8%AF%D9%82%D8%A9_%D8%A7%D9%84%D8%A7%D8%B1%D9%82%D8%A7%D9%85_%D8%A7%D9%85%D8%A7%D9%86_copy_zsskpa.jpg',
            title: 'Service Post 13'
          },
          {
            id: 14,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071468/%D9%84%D9%85%D8%A7_%D9%8A%D8%B5%D9%8A%D8%B1_%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%81_bqwglm.jpg',
            title: 'Service Post 14'
          },
          {
            id: 15,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071468/WhatsApp_Image_2025-11-24_at_11.52.59_AM_ovzqiy.jpg',
            title: 'Service Post 15'
          },
          {
            id: 16,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071467/WhatsApp_Image_2025-11-24_at_11.53.11_AM_cdsdfu.jpg',
            title: 'Service Post 16'
          },
          {
            id: 17,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071467/WhatsApp_Image_2025-11-24_at_11.54.29_AM_fidlug.jpg',
            title: 'Service Post 17'
          },
          {
            id: 18,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071466/WhatsApp_Image_2025-11-24_at_11.55.12_AM_wquehw.jpg',
            title: 'Service Post 18'
          },
          {
            id: 19,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071465/WhatsApp_Image_2025-11-24_at_11.52.24_AM_xz3fbr.jpg',
            title: 'Service Post 19'
          },
          {
            id: 20,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071465/WhatsApp_Image_2025-11-24_at_11.52.25_AM_kdlf6o.jpg',
            title: 'Service Post 20'
          },
          {
            id: 21,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071465/WhatsApp_Image_2025-11-24_at_11.52.25_AM_1_atyhgt.jpg',
            title: 'Service Post 21'
          }
        ];
      case 'stores':
        return [
          {
            id: 1,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071438/Gaming_Headset_copy_lviebc.jpg',
            title: 'Product Post 1'
          },
          {
            id: 2,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071437/Laptop_Bag3_egtmix.png',
            title: 'Product Post 2'
          },
          {
            id: 3,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071436/Fujifilm_Instax_1_qxp67h.jpg',
            title: 'Product Post 3'
          },
          {
            id: 4,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071436/%D8%A7%D9%84%D8%B3%D9%8A%D9%86%D9%85%D8%A7_%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9_1_pfhzln.jpg',
            title: 'Product Post 4'
          },
          {
            id: 5,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071436/%D8%A7%D9%84%D8%B3%D9%8A%D9%86%D9%85%D8%A7_%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9_4_mytufz.jpg',
            title: 'Product Post 5'
          }
        ];
      case 'industrial':
        return [
          {
            id: 1,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071454/%D8%B3%D9%81%D8%B1%D8%AA%D9%83_%D8%AC%D8%A7%D9%87%D8%B2%D8%A9_plfews.jpg',
            title: 'Industrial Post 1'
          },
           {
            id: 12,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071450/%D9%85%D8%B3%D9%8A%D8%B7%D9%8A%D8%B1%D9%8A%D9%86_nxrdkn.jpg',
            title: 'Industrial Post 12'
          }, {
            id: 13,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071450/%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9_2_aik894.png',
            title: 'Industrial Post 13'
          }, {
            id: 4,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071453/orange_post_n3ldnj.jpg',
            title: 'Industrial Post 4'
          }, {
            id: 19,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071446/%D8%B7%D8%A8%D9%82_3_gwqvvq.png',
            title: 'Industrial Post 19'
          }, {
            id: 20,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071446/%D8%B7%D8%A8%D9%82_2_pgmkeh.jpg',
            title: 'Industrial Post 20'
          },   {
            id: 25,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071444/25-3_zbhapo.png',
            title: 'Industrial Post 25'
          },  {
            id: 23,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071444/12-3_tdkyem.png',
            title: 'Industrial Post 23'
          },{
            id: 22,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071445/%D9%84%D8%AA%D8%BA%D9%84%D9%8A%D9%81_2_estq7q.png',
            title: 'Industrial Post 22'
          }, {
            id: 24,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071444/%D9%85%D9%86_%D8%A8%D8%B1%D8%A7_%D9%88%D8%A7%D8%AD%D8%AF_3_jlamzr.png',
            title: 'Industrial Post 24'
          },{
            id: 5,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071453/04_d2j86d.jpg',
            title: 'Industrial Post 5'
          }, {
            id: 6,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071453/12_xc7l8w.jpg',
            title: 'Industrial Post 6'
          },{
            id: 11,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071451/%D8%A7%D8%AE%D8%AA%D8%B1_%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%B9%D8%A7%D8%B4_bqkqag.jpg',
            title: 'Industrial Post 11'
          }, {
            id: 8,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071452/05-3_t19tqg.jpg',
            title: 'Industrial Post 8'
          }, {
            id: 9,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071451/Who_We_Help_copy_sa87bn.jpg',
            title: 'Industrial Post 9'
          }, {
            id: 10,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071451/From_Jordan_to_the_World_tm0lqr.jpg',
            title: 'Industrial Post 10'
          },  {
            id: 14,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071449/Disposables_utwmiq.jpg',
            title: 'Industrial Post 14'
          }, {
            id: 15,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071449/wafflelab_CLOCK_1_pkfazo.png',
            title: 'Industrial Post 15'
          }, {
            id: 16,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071449/%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9_3_l8k8t4.png',
            title: 'Industrial Post 16'
          },  {
            id: 7,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071453/05_d8kkpu.jpg',
            title: 'Industrial Post 7'
          },{
            id: 2,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071454/077_vgeff1.jpg',
            title: 'Industrial Post 2'
          }, {
            id: 3,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071454/06_pwlf8b.jpg',
            title: 'Industrial Post 3'
          },{
            id: 17,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071448/%D8%A7%D9%84%D8%AA%D8%BA%D9%84%D9%8A%D9%81_4_u1wbuv.png',
            title: 'Industrial Post 17'
          }, {
            id: 18,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071447/%D8%AC%D8%A7%D9%87%D8%B2%D9%8A%D9%86_%D9%84%D9%84%D8%A8%D8%B1%D8%AF1_vrdnlm.jpg',
            title: 'Industrial Post 18'
          },{
            id: 21,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071446/%D8%AD%D9%85%D9%84_%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%821_sewrqs.jpg',
            title: 'Industrial Post 21'
          }, {
            id: 26,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071443/7_stqlki.png',
            title: 'Industrial Post 26'
          }, {
            id: 27,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071443/5-3_fsis4n.png',
            title: 'Industrial Post 27'
          }, {
            id: 28,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071443/3_cz0vi5.png',
            title: 'Industrial Post 28'
          }, {
            id: 29,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071442/5_dzkj8j.png',
            title: 'Industrial Post 29'
          }, {
            id: 30,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071442/%D9%85%D8%B4%D9%83%D9%84_%D8%A7%D9%84%D8%A7%D8%AE%D8%B6%D8%B1_rrnnpy.jpg',
            title: 'Industrial Post 30'
          }, {
            id: 31,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071441/i_waffle_you_2_1_z7mgtq.png',
            title: 'Industrial Post 31'
          }, {
            id: 32,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071441/lemon_wei26v.jpg',
            title: 'Industrial Post 32'
          }, {
            id: 33,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071440/game_posts_1_duyvfu.png',
            title: 'Industrial Post 33'
          }, {
            id: 34,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071440/10_tabuie.jpg',
            title: 'Industrial Post 34'
          }, {
            id: 36,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071439/0331_ndsxul.jpg',
            title: 'Industrial Post 36'
          }, {
            id: 37,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071438/001_upzpak.jpg',
            title: 'Industrial Post 37'
          }, {
            id: 38,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071438/28_6_vwlqp3.jpg',
            title: 'Industrial Post 38'
          },
        ];
      case 'trading':
        return [
          {
            id: 1,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071457/WhatsApp_Image_2025-11-24_at_11.55.51_AM_cuxlnu.jpg',
            title: 'Trading Post 1'
          },
          {
            id: 2,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071456/WhatsApp_Image_2025-11-24_at_12.01.46_PM_vwwokl.jpg',
            title: 'Trading Post 2'
          },
          {
            id: 3,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071456/WhatsApp_Image_2025-11-24_at_11.56.13_AM_ljslid.jpg',
            title: 'Trading Post 3'
          },
          {
            id: 4,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071455/WhatsApp_Image_2025-11-24_at_12.01.02_PM_voqgzs.jpg',
            title: 'Trading Post 4'
          },
          {
            id: 5,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071455/WhatsApp_Image_2025-11-24_at_12.01.52_PM_xr1cup.jpg',
            title: 'Trading Post 5'
          }
        ];
      case 'fashion':
        return [
          {
            id: 1,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071520/Artboard_6_b9uwun.png',
            title: 'Fashion Post 1'
          },
          {
            id: 2,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071505/Artboard_5_okrtxz.png',
            title: 'Fashion Post 2'
          },
          {
            id: 3,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071505/Artboard_4_wedzv9.jpg',
            title: 'Fashion Post 3'
          },
          {
            id: 4,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071504/14_ecszrr.png',
            title: 'Fashion Post 4'
          },
          {
            id: 5,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071504/13_x8wub2.png',
            title: 'Fashion Post 5'
          },
          {
            id: 6,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071503/15_da2qwz.png',
            title: 'Fashion Post 6'
          }
        ];
      case 'school':
        return [
          {
            id: 1,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071436/Artboard_1_fdzwnx.jpg',
            title: 'School Post 1'
          },
          {
            id: 2,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071435/Artboard_3_hkyfy4.png',
            title: 'School Post 2'
          },
          {
            id: 3,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071435/Artboard_2_wp4ajq.png',
            title: 'School Post 3'
          },
          {
            id: 4,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071435/Artboard_9_dwmpih.png',
            title: 'School Post 4'
          },
          {
            id: 5,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071434/Artboard_11_hh3d1w.png',
            title: 'School Post 5'
          },
          {
            id: 6,
            url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764071434/Artboard_12_rm0jna.png',
            title: 'School Post 6'
          }
        ];
      default:
        // All posts - combine all sectors
        return [
          ...getPostsForSector('medical'),
          ...getPostsForSector('service'),
          ...getPostsForSector('stores'),
          ...getPostsForSector('trading'),
          ...getPostsForSector('industrial'),
          ...getPostsForSector('fashion'),
          ...getPostsForSector('school'),
        ];
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const currentPosts = getPostsForSector(activeSector);

  // Reset to 8 images for every sector
  useEffect(() => {
    setVisibleCount(8);
  }, [activeSector]);


  const handleImageClick = (post) => {
    setSelectedImage(post);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="social-media" className="social-media-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Social Media Portfolio</h2>
          <p className="section-subtitle">
            Engaging content across multiple industries and sectors
          </p>
        </div>

        <div className="sector-filters">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              className={`filter-button ${activeSector === sector.id ? 'active' : ''}`}
              onClick={() => setActiveSector(sector.id)}
            >
              {sector.name}
            </button>
          ))}
        </div>

        <div className="posts-grid">
          {currentPosts.slice(0, visibleCount).map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => handleImageClick(post)}
            >
              <div className="post-image-wrapper">
                <img
                  src={post.url ? post.url.replace('/upload/', '/upload/w_600,q_auto,f_auto/') : post.url}
                  alt={post.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Social+Media+Post';
                  }}
                />
                <div className="post-overlay">
                  <span className="view-icon">👁️</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {currentPosts.length > visibleCount && (
          <div className="show-more-container">
            <button
              className="show-more-button"
              onClick={() => setVisibleCount(prev => prev + 4)}
            >
              Show More
            </button>
          </div>
        )}

        {visibleCount >= currentPosts.length && currentPosts.length > 8 && (
          <div className="show-more-container">
            <button
              className="show-more-button"
              onClick={() => setVisibleCount(8)}
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img
              src={selectedImage.url ? selectedImage.url.replace('/upload/', '/upload/w_1200,q_auto,f_auto/') : selectedImage.url}
              alt={selectedImage.title}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialMediaSection;

