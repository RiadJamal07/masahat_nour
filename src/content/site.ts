/**
 * Site content — single source of truth.
 *
 * All copy lives here in bilingual form so components stay layout-only
 * and we can localize without touching markup.
 */

import type { ImageMetadata } from 'astro';

import hero from '~/assets/images/IMG_9463.jpg';
import coworking from '~/assets/images/Hani_coworking_space_picture.png';
import office from '~/assets/images/IMG_4658.jpg';
import meetingRoom from '~/assets/images/20250421_124038124_iOS.jpg';
import socialSpace from '~/assets/images/IMG_9466.jpg';
import training from '~/assets/images/14.jpg';
import zoomPod from '~/assets/images/IMG_9443.jpg';
import storyImage from '~/assets/images/IMG_9461.jpg';
import tashgheel from '~/assets/images/LASER_tashghil_2_Launching0925.jpg';
import farah from '~/assets/images/_MG_6774.jpg';
import fatima from '~/assets/images/_MG_6770.jpg';
import anas from '~/assets/images/_MG_6782.jpg';
import muthana from '~/assets/images/_MG_6779.jpg';
import tarek from '~/assets/images/_MG_6788.jpg';
import safa from '~/assets/images/_MG_6785.jpg';

type Bilingual = { en: string; ar: string };

export type Service = {
  slug: string;
  name: Bilingual;
  tagline: Bilingual;
  price: string;
  priceUnit: Bilingual;
  image: ImageMetadata;
};

export type TeamMember = {
  name: string;
  role: Bilingual;
  image: ImageMetadata;
};

export const site = {
  name: { en: 'Masahet Nour', ar: 'مساحة نور' } satisfies Bilingual,
  tagline: { en: 'A Place with a Soul', ar: 'مكانٌ لهُ رُوح' } satisfies Bilingual,
  shortDescription: {
    en: '24/7 coworking in the heart of Tripoli, Lebanon — where individuals, companies, and students come together to work, create, and grow.',
    ar: 'مساحة عمل مشتركة على مدار الساعة في قلب طرابلس، لبنان — حيث يلتقي الأفراد والشركات والطلاب للعمل والإبداع والنمو.',
  } satisfies Bilingual,

  contact: {
    phone: '+961 6 443 694',
    phoneHref: 'tel:+9616443694',
    whatsapp: '+961 81 007 858',
    whatsappHref: 'https://wa.me/96181007858',
    location: { en: 'Tripoli, Lebanon', ar: 'طرابلس، لبنان' } satisfies Bilingual,
  },

  social: {
    instagram: 'https://instagram.com/masahet.nour',
    facebook: 'https://facebook.com/masahet.nour',
    linkedin: 'https://www.linkedin.com/company/masahet-nour',
  },

  hero: {
    eyebrow: { en: 'Tripoli · Lebanon', ar: 'طرابلس · لبنان' } satisfies Bilingual,
    description: {
      en: 'A 24/7 coworking space built around community, focus, and the people of Tripoli. Quiet desks, fast internet, real coffee, and a story worth being part of.',
      ar: 'مساحة عمل مشتركة على مدار الساعة، مبنية على المجتمع والتركيز وأهل طرابلس. مكاتب هادئة، إنترنت سريع، قهوة حقيقية، وقصة تستحق أن تكون جزءًا منها.',
    } satisfies Bilingual,
    image: hero,
  },

  about: {
    eyebrow: { en: 'Why Masahet Nour', ar: 'لماذا مساحة نور' } satisfies Bilingual,
    title: {
      en: "We're passionate about helping you grow and make an impact.",
      ar: 'نحن شغوفون بمساعدتك على النمو وإحداث الأثر.',
    } satisfies Bilingual,
    body: {
      en: 'Named after Nour al-Din al-Zinki — the historical leader who founded the Nouri School to spread learning and knowledge — Masahet Nour is more than a coworking space. It is a community tool, designed to link local and international companies with the talented young people of Tripoli, and to give every member a place that supports both their professional and social lives.',
      ar: 'سميت باسم نور الدين الزنكي — القائد التاريخي الذي أسس المدرسة النورية لنشر العلم والمعرفة — ومساحة نور هي أكثر من مجرد مساحة عمل مشتركة. إنها أداة مجتمعية مصممة لربط الشركات المحلية والدولية بشباب طرابلس الموهوبين، ولمنح كل عضو مكانًا يدعم حياته المهنية والاجتماعية.',
    } satisfies Bilingual,
    image: storyImage,
  },

  services: [
    {
      slug: 'coworking',
      name: { en: 'Coworking Space', ar: 'مساحة العمل المشتركة' },
      tagline: {
        en: 'A flexible desk in a vibrant, professional environment.',
        ar: 'مكتب مرن في بيئة مهنية نابضة بالحياة.',
      },
      price: '$10',
      priceUnit: { en: '/ day', ar: '/ يوم' },
      image: coworking,
    },
    {
      slug: 'private-offices',
      name: { en: 'Private Offices', ar: 'مكاتب خاصة' },
      tagline: {
        en: 'A room of your own — for teams that need privacy and quiet.',
        ar: 'غرفة خاصة لفرق العمل التي تحتاج للخصوصية والهدوء.',
      },
      price: '$600',
      priceUnit: { en: '/ month', ar: '/ شهر' },
      image: office,
    },
    {
      slug: 'meeting-rooms',
      name: { en: 'Meeting Rooms', ar: 'قاعات اجتماعات' },
      tagline: {
        en: 'Three sizes, all equipped — book by the hour.',
        ar: 'ثلاثة أحجام، جميعها مجهزة — احجز بالساعة.',
      },
      price: '$10',
      priceUnit: { en: '/ hour', ar: '/ ساعة' },
      image: meetingRoom,
    },
    {
      slug: 'training-venues',
      name: { en: 'Training Venues', ar: 'قاعات تدريب' },
      tagline: {
        en: 'Workshops, classes, and events for up to 80 people.',
        ar: 'ورش عمل ودورات وفعاليات تتسع لما يصل إلى ٨٠ شخصًا.',
      },
      price: '$100',
      priceUnit: { en: '/ half day', ar: '/ نصف يوم' },
      image: training,
    },
    {
      slug: 'zoom-pods',
      name: { en: 'Zoom Pods', ar: 'مقصورات زووم' },
      tagline: {
        en: 'Six private pods for video calls. No noise, no interruptions.',
        ar: 'ست مقصورات خاصة لمكالمات الفيديو. بلا ضجيج وبلا انقطاع.',
      },
      price: '$5',
      priceUnit: { en: '/ hour', ar: '/ ساعة' },
      image: zoomPod,
    },
    {
      slug: 'social-space',
      name: { en: 'Social Space', ar: 'المساحة الاجتماعية' },
      tagline: {
        en: 'A lounge to meet, talk, and share a coffee.',
        ar: 'صالة للقاء والحديث ومشاركة فنجان قهوة.',
      },
      price: '$2',
      priceUnit: { en: '/ day', ar: '/ يوم' },
      image: socialSpace,
    },
  ] satisfies Service[],

  story: {
    eyebrow: { en: 'Our Story', ar: 'قصتنا' } satisfies Bilingual,
    title: {
      en: 'A space of light, born from fifteen years of believing in young people.',
      ar: 'مساحة من النور، وُلدت من خمسة عشر عامًا من الإيمان بالشباب.',
    } satisfies Bilingual,
    body: {
      en: "Masahet Nour grew out of LASeR — the Lebanese Association for Scientific Research, founded in 2009 by 40 university professors who refused to let any dream die for lack of funding. From scholarships and student loans to Tashghīl, our 3-month technical training and paid internship program, we've spent fifteen years equipping the youth of Tripoli with the skills, mentorship, and opportunity to shine. Masahet Nour is the room where it all happens.",
      ar: 'وُلدت مساحة نور من رحم لازر — الجمعية اللبنانية للأبحاث العلمية، التي أسسها عام ٢٠٠٩ أربعون أستاذًا جامعيًا رفضوا أن يموت أي حلم بسبب نقص التمويل. من المنح الدراسية والقروض الطلابية إلى تشغيل، برنامجنا التدريبي التقني والعملي على ٣ أشهر، أمضينا خمسة عشر عامًا في تجهيز شباب طرابلس بالمهارات والتوجيه والفرصة ليتألقوا. مساحة نور هي الغرفة التي يحدث فيها كل ذلك.',
    } satisfies Bilingual,
    image: tashgheel,
  },

  team: [
    { name: 'Farah ElSherif', role: { en: 'Admin & Operations Manager', ar: 'مديرة الإدارة والعمليات' }, image: farah },
    { name: 'Fatima AlMazjoub', role: { en: 'Community Manager', ar: 'مديرة المجتمع' }, image: fatima },
    { name: 'Anas Al Mir', role: { en: 'Facilities & Operations Engineer', ar: 'مهندس المرافق والعمليات' }, image: anas },
    { name: 'Muthana AlDandashi', role: { en: 'Admin & Operations Officer', ar: 'مسؤول الإدارة والعمليات' }, image: muthana },
    { name: 'Tarek Ossman', role: { en: 'Social Media Officer', ar: 'مسؤول التواصل الاجتماعي' }, image: tarek },
    { name: 'Safa Khalaf', role: { en: 'Corporate Partnerships Coordinator', ar: 'منسقة الشراكات المؤسسية' }, image: safa },
  ] satisfies TeamMember[],

  nav: [
    { href: '#about', label: { en: 'About', ar: 'من نحن' } satisfies Bilingual },
    { href: '#spaces', label: { en: 'Spaces', ar: 'المساحات' } satisfies Bilingual },
    { href: '#story', label: { en: 'Story', ar: 'القصة' } satisfies Bilingual },
    { href: '#team', label: { en: 'Team', ar: 'الفريق' } satisfies Bilingual },
    { href: '#visit', label: { en: 'Visit', ar: 'زرنا' } satisfies Bilingual },
  ],
} as const;

export type Site = typeof site;
