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

export type Tier = {
  label: Bilingual;
  price: string;
  unit: Bilingual;
  note?: Bilingual;
};

export type Service = {
  slug: string;
  name: Bilingual;
  tagline: Bilingual;
  /** Collapsed-card anchor price — the ONE number the visitor sees before tapping. */
  anchor: { price: string; unit: Bilingual };
  /** Full pricing ladder, revealed when the card is expanded. */
  tiers: Tier[];
  /** Amenities / equipment surfaced inside the expanded state. Ordered by importance. */
  amenities: Bilingual[];
  image: ImageMetadata;
};

export type TeamMember = {
  name: string;
  role: Bilingual;
  bio: Bilingual;
  image: ImageMetadata;
};

export type Stat = {
  number: string;
  label: Bilingual;
};

export type TashgheelPillar = {
  name: Bilingual;
  description: Bilingual;
};

export const site = {
  name: { en: 'Masahet Nour', ar: 'مساحة نور' } satisfies Bilingual,
  tagline: { en: 'A Place with a Soul', ar: 'مكانٌ لهُ رُوح' } satisfies Bilingual,
  shortDescription: {
    en: "Masahet Nour is a 24/7 coworking space in Tripoli, Lebanon. A vibrant hub where individuals, companies, and students come together to work, create, and grow. More than just a workspace, it's a supportive community built on collaboration, connection, and shared success.",
    ar: 'مساحة نور مساحة عملٍ مشتركة تعمل على مدار الساعة في طرابلس، لبنان. مركزٌ نابضٌ يلتقي فيه الأفراد والشركات والطلاب ليعملوا ويُبدعوا وينمو. وهي أكثر من مجرد مكانٍ للعمل؛ إنها مجتمعٌ داعم قائمٌ على التعاون والتواصل والنجاح المشترك.',
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
      en: 'A 24/7 coworking space in Tripoli, Lebanon. A vibrant hub where individuals, companies, and students come together to work, create, and grow — more than just a workspace, a supportive community built on collaboration, connection, and shared success.',
      ar: 'مساحة عملٍ مشتركة تعمل على مدار الساعة في طرابلس، لبنان. مركزٌ نابضٌ يلتقي فيه الأفراد والشركات والطلاب ليعملوا ويُبدعوا وينمو — أكثر من مجرد مكانٍ للعمل، مجتمعٌ داعم قائمٌ على التعاون والتواصل والنجاح المشترك.',
    } satisfies Bilingual,
    image: hero,
  },

  about: {
    eyebrow: { en: 'About Masahet Nour', ar: 'عن مساحة نور' } satisfies Bilingual,
    title: {
      en: "We're passionate about helping you grow and make an impact.",
      ar: 'نحن شغوفون بمساعدتك على النمو وإحداث الأثر.',
    } satisfies Bilingual,
    body: {
      en: 'Masahet Nour — which translates to "Space of Light" — was named after the leader Nour al-Din al-Zinki, who supported many leaders throughout history and enforced values wherever he traveled with his skills and knowledge. He was a light illuminating the path for all who desired to work and strive for the advancement of their society. Nour al-Din al-Zinki believed in the big role that education plays in building upcoming generations, and founded the Nouri School to spread the light of knowledge and Islamic values in his society. Masahet Nour is a social and co-working workspace aimed at creating a conducive environment for its users to meet their professional and social needs.',
      ar: 'مساحة نور — التي تعني حرفيًا «مكان النور» — سُمّيت تيمّنًا بالقائد نور الدين الزنكي، الذي ساند كثيرًا من القادة عبر التاريخ وأرسى القيم أينما حلّ بعلمه ومعرفته. كان نورًا يضيء الطريق لكل من رغب في العمل والسعي لنهضة مجتمعه. آمن نور الدين الزنكي بالدور الكبير للتعليم في بناء الأجيال القادمة، فأسس المدرسة النورية لنشر نور العلم والقيم الإسلامية في مجتمعه. ومساحة نور هي مكانٌ اجتماعي ومساحة عمل مشتركة، هدفها أن توفّر بيئةً ملائمة لمستخدميها يلبّون فيها احتياجاتهم المهنية والاجتماعية.',
    } satisfies Bilingual,
    community: {
      en: "At Masahet Nour we're not just creating a space; we're building a community tool, meant to link local and international companies with the awesome young talents in Tripoli, boosting their chances of landing exciting new opportunities.",
      ar: 'في مساحة نور لا نبني مجرد مكانٍ للعمل؛ بل نبني أداةً مجتمعية تهدف إلى ربط الشركات المحلية والدولية بالمواهب الشابة الرائعة في طرابلس، وتعزيز فرصهم في الظفر بفرصٍ جديدة ومثيرة.',
    } satisfies Bilingual,
    image: storyImage,
  },

  services: [
    {
      slug: 'coworking',
      name: { en: 'Coworking Space', ar: 'مساحة العمل المشتركة' },
      // Differentiator tagline: the three things competitors in Tripoli
      // rarely lead with. The prayer room especially.
      tagline: {
        en: 'Prayer room · 24/7 power · High-speed wifi',
        ar: 'غرفة صلاة · كهرباء على مدار الساعة · إنترنت عالي السرعة',
      },
      // Anchor on the MONTHLY rate, not the daily, so visitors don't
      // mentally multiply $10 × 30 and bounce.
      anchor: { price: '$150', unit: { en: '/ month', ar: '/ شهر' } },
      tiers: [
        {
          label: { en: 'Monthly', ar: 'شهري' },
          price: '$150',
          unit: { en: '/ month', ar: '/ شهر' },
          note: {
            en: '24/7 desk access · 10 hrs meeting room · 10 hrs Zoom pod',
            ar: 'وصول للمكتب ٢٤/٧ · ١٠ ساعات قاعة اجتماعات · ١٠ ساعات مقصورة زووم',
          },
        },
        {
          label: { en: 'Weekly', ar: 'أسبوعي' },
          price: '$40',
          unit: { en: '/ week', ar: '/ أسبوع' },
          note: {
            en: 'One week of access, shared facilities, community events',
            ar: 'أسبوع كامل من الوصول، ومرافق مشتركة، وفعاليات المجتمع',
          },
        },
        {
          label: { en: 'Daily', ar: 'يومي' },
          price: '$10',
          unit: { en: '/ day', ar: '/ يوم' },
          note: {
            en: 'One day of access, 2 hrs meeting room or Zoom pod',
            ar: 'يوم واحد من الوصول، ساعتان في قاعة اجتماعات أو مقصورة زووم',
          },
        },
      ],
      amenities: [
        { en: 'Prayer room', ar: 'غرفة صلاة' },
        { en: '24/7 electricity', ar: 'كهرباء على مدار الساعة' },
        { en: 'High-speed wifi', ar: 'إنترنت عالي السرعة' },
        { en: 'Coffee by NewTown', ar: 'قهوة بالتعاون مع نيوتاون' },
        { en: 'Shared kitchen', ar: 'مطبخ مشترك' },
        { en: 'Library & lounge', ar: 'مكتبة وصالة' },
        { en: 'Community events', ar: 'فعاليات المجتمع' },
      ],
      image: coworking,
    },
    {
      slug: 'private-offices',
      name: { en: 'Private Offices', ar: 'مكاتب خاصة' },
      tagline: {
        en: 'A room of your own — for teams that need privacy and quiet.',
        ar: 'غرفة خاصة لفرق العمل التي تحتاج للخصوصية والهدوء.',
      },
      anchor: { price: '$600', unit: { en: '/ month', ar: '/ شهر' } },
      tiers: [
        {
          label: { en: 'Standard', ar: 'قياسي' },
          price: '$600',
          unit: { en: '/ month', ar: '/ شهر' },
          note: {
            en: '24/7 access · 8 hrs meeting room · 8 hrs Zoom pod · admin services',
            ar: 'وصول ٢٤/٧ · ٨ ساعات قاعة اجتماعات · ٨ ساعات مقصورة زووم · خدمات إدارية',
          },
        },
        {
          label: { en: 'Premium suite', ar: 'جناح مميز' },
          price: '$1,400',
          unit: { en: '/ month', ar: '/ شهر' },
          note: {
            en: '2 private rooms · private restroom · private kitchenette · 10/20 hrs rooms',
            ar: 'غرفتان خاصتان · حمام خاص · مطبخ صغير خاص · ١٠/٢٠ ساعة قاعات',
          },
        },
      ],
      amenities: [
        { en: '24/7 electricity', ar: 'كهرباء على مدار الساعة' },
        { en: 'High-speed wifi', ar: 'إنترنت عالي السرعة' },
        { en: 'Admin services', ar: 'خدمات إدارية' },
        { en: 'Lounge & library', ar: 'صالة ومكتبة' },
        { en: 'Shared kitchen', ar: 'مطبخ مشترك' },
        { en: 'Maintenance & cleaning', ar: 'صيانة وتنظيف' },
      ],
      image: office,
    },
    {
      slug: 'meeting-rooms',
      name: { en: 'Meeting Rooms', ar: 'قاعات اجتماعات' },
      tagline: {
        en: 'Three sizes, all equipped — book by the hour.',
        ar: 'ثلاثة أحجام، جميعها مجهزة — احجز بالساعة.',
      },
      anchor: { price: '$10', unit: { en: '/ hour', ar: '/ ساعة' } },
      tiers: [
        {
          label: { en: 'Small · 1–2 people', ar: 'صغيرة · ١-٢ أشخاص' },
          price: '$10',
          unit: { en: '/ hour', ar: '/ ساعة' },
          note: {
            en: 'Private, quiet, video-call ready',
            ar: 'خاصة وهادئة، جاهزة لمكالمات الفيديو',
          },
        },
        {
          label: { en: 'Medium · 3–5 people', ar: 'متوسطة · ٣-٥ أشخاص' },
          price: '$15',
          unit: { en: '/ hour', ar: '/ ساعة' },
          note: {
            en: 'Screen, whiteboard, video conferencing',
            ar: 'شاشة، لوحة بيضاء، مؤتمرات فيديو',
          },
        },
        {
          label: { en: 'Large · 6–10 people', ar: 'كبيرة · ٦-١٠ أشخاص' },
          price: '$20',
          unit: { en: '/ hour', ar: '/ ساعة' },
          note: {
            en: 'Large screen, whiteboard, full video conference setup',
            ar: 'شاشة كبيرة، لوحة بيضاء، تجهيزات مؤتمرات فيديو كاملة',
          },
        },
      ],
      amenities: [
        { en: 'High-speed wifi', ar: 'إنترنت عالي السرعة' },
        { en: 'Power outlets', ar: 'مقابس كهربائية' },
        { en: 'Comfortable seating', ar: 'مقاعد مريحة' },
      ],
      image: meetingRoom,
    },
    {
      slug: 'training-venues',
      name: { en: 'Training Venues', ar: 'قاعات تدريب' },
      tagline: {
        en: 'Workshops, classes, and events for up to 80 people.',
        ar: 'ورش عمل ودورات وفعاليات تتسع لما يصل إلى ٨٠ شخصًا.',
      },
      anchor: { price: '$100', unit: { en: '/ half day', ar: '/ نصف يوم' } },
      tiers: [
        {
          label: { en: 'Medium · up to 50 people', ar: 'متوسطة · حتى ٥٠ شخصًا' },
          price: '$100 / $200',
          unit: { en: 'half / full day', ar: 'نصف / يوم كامل' },
        },
        {
          label: { en: 'Large · up to 80 people', ar: 'كبيرة · حتى ٨٠ شخصًا' },
          price: '$150 / $300',
          unit: { en: 'half / full day', ar: 'نصف / يوم كامل' },
        },
      ],
      amenities: [
        { en: '24/7 electricity', ar: 'كهرباء على مدار الساعة' },
        { en: 'High-speed wifi', ar: 'إنترنت عالي السرعة' },
        { en: 'Admin services', ar: 'خدمات إدارية' },
        { en: 'Lounge access', ar: 'وصول للصالة' },
        { en: 'Shared kitchen', ar: 'مطبخ مشترك' },
        { en: 'Maintenance & cleaning', ar: 'صيانة وتنظيف' },
      ],
      image: training,
    },
    {
      slug: 'zoom-pods',
      name: { en: 'Zoom Pods', ar: 'مقصورات زووم' },
      tagline: {
        en: 'Six private pods for video calls. No noise, no interruptions.',
        ar: 'ست مقصورات خاصة لمكالمات الفيديو. بلا ضجيج وبلا انقطاع.',
      },
      anchor: { price: '$5', unit: { en: '/ hour', ar: '/ ساعة' } },
      tiers: [
        {
          label: { en: 'Hourly · 6 pods available', ar: 'بالساعة · ٦ مقصورات متاحة' },
          price: '$5',
          unit: { en: '/ hour', ar: '/ ساعة' },
          note: {
            en: 'Private, sound-isolated, video-call ready',
            ar: 'خاصة ومعزولة صوتيًا، جاهزة لمكالمات الفيديو',
          },
        },
      ],
      amenities: [
        { en: '24/7 electricity', ar: 'كهرباء على مدار الساعة' },
        { en: 'High-speed wifi', ar: 'إنترنت عالي السرعة' },
        { en: 'Shared kitchen', ar: 'مطبخ مشترك' },
        { en: 'Maintenance & cleaning', ar: 'صيانة وتنظيف' },
      ],
      image: zoomPod,
    },
    {
      slug: 'social-space',
      name: { en: 'Social Space', ar: 'المساحة الاجتماعية' },
      tagline: {
        en: 'A lounge to meet, talk, and share a coffee.',
        ar: 'صالة للقاء والحديث ومشاركة فنجان قهوة.',
      },
      anchor: { price: '$2', unit: { en: '/ day', ar: '/ يوم' } },
      tiers: [
        {
          label: { en: 'Daily lounge access', ar: 'وصول يومي للصالة' },
          price: '$2',
          unit: { en: '/ day', ar: '/ يوم' },
          note: {
            en: 'Internet voucher or coffee purchase',
            ar: 'قسيمة إنترنت أو شراء قهوة',
          },
        },
      ],
      amenities: [
        { en: 'Prayer room', ar: 'غرفة صلاة' },
        { en: 'High-speed wifi', ar: 'إنترنت عالي السرعة' },
        { en: 'Shared kitchen', ar: 'مطبخ مشترك' },
      ],
      image: socialSpace,
    },
  ] satisfies Service[],

  story: {
    eyebrow: { en: 'Our Story', ar: 'قصتنا' } satisfies Bilingual,
    title: {
      en: 'Tripoli needs a space of light.',
      ar: 'طرابلس بحاجة إلى مساحةٍ من النور.',
    } satisfies Bilingual,
    body: {
      en: 'Masahet Nour was not a spontaneous idea. It is the accumulation of 15 years of experience and research working with youth in Tripoli and the North. Since the launch of LASeR in 2009, our goals evolved from supporting Masters and PhD students to offering university and school scholarships, to youth empowerment programs that help young and upcoming people enhance their skills, grow their personalities, and unlock their full potential. In the last couple of years, LASeR embarked on a new mission and launched Tashghīl, offering three months of technical training, soft-skills training, and career coaching to bridge the gap between the skills of fresh graduates and the needs of the job market. All these programs, scholarships, and experiences led us to one conclusion: Tripoli needs a space of light, where our youth can learn, work, connect, and shine brighter than ever — and this is why Masahet Nour, which translates to "Space of Light" in English, was created.',
      ar: 'مساحة نور لم تكن فكرةً عفوية؛ بل هي حصيلة خمسة عشر عامًا من التجربة والبحث في العمل مع شباب طرابلس والشمال. منذ انطلاق لازر عام ٢٠٠٩، تطوّرت أهدافنا من دعم طلاب الماجستير والدكتوراه، إلى تقديم المنح الجامعية والمدرسية، إلى برامج لتمكين الشباب تساعدهم على شحذ مهاراتهم وبناء شخصياتهم واكتشاف كامل طاقاتهم. وفي السنوات الأخيرة، دخلت لازر ميدانًا جديدًا فأطلقت «تشغيل»، الذي يقدّم ثلاثة أشهر من التدريب التقني وتدريب المهارات الشخصية والتوجيه المهني، بهدف ردم الهوّة بين مهارات الخريجين الجدد واحتياجات سوق العمل. كل هذه البرامج والمنح والتجارب قادتنا إلى نتيجةٍ واحدة: طرابلس بحاجة إلى مساحةٍ من النور يتعلّم فيها شبابنا ويعملون ويتواصلون ويتألقون أكثر من أي وقتٍ مضى — ولهذا وُلدت مساحة نور.',
    } satisfies Bilingual,
    image: tashgheel,
  },

  team: {
    eyebrow: { en: 'Our People', ar: 'فريقنا' } satisfies Bilingual,
    title: { en: 'Meet the team', ar: 'تعرّف على فريقنا' } satisfies Bilingual,
    body: {
      en: 'Behind Masahet Nour is a passionate team working every day to create a space where ideas grow, connections happen, and productivity thrives.',
      ar: 'يقف خلف مساحة نور فريق شغوف يعمل كل يوم على صناعة مكانٍ تنمو فيه الأفكار، وتُعقد فيه الصلات، ويزدهر فيه العمل.',
    } satisfies Bilingual,
    members: [
      {
        name: 'Farah ElSherif',
        role: { en: 'Admin & Operations Manager', ar: 'مديرة الإدارة والعمليات' },
        bio: {
          en: 'I make sure everything at Masahet Nour runs smoothly behind the scenes — from managing the space and facilities to handling daily operations and logistics, so every member has a comfortable, seamless experience.',
          ar: 'أحرص على أن يسير كل شيء في مساحة نور بسلاسة خلف الكواليس — من إدارة المكان والمرافق إلى العمليات اليومية واللوجستيات، لأوفّر لكل عضوٍ تجربة مريحة وسلسة.',
        },
        image: farah,
      },
      {
        name: 'Fatima AlMazjoub',
        role: { en: 'Community Manager', ar: 'مديرة المجتمع' },
        bio: {
          en: 'I lead the community at Masahet Nour — building a collaborative environment, supporting members, and creating meaningful opportunities through events, partnerships, and engagement.',
          ar: 'أقود مجتمع مساحة نور — أبني بيئةً تعاونية، أدعم الأعضاء، وأصنع فرصًا حقيقية من خلال الفعاليات والشراكات والتفاعل.',
        },
        image: fatima,
      },
      {
        name: 'Anas Al Mir',
        role: { en: 'Facilities & Operations Engineer', ar: 'مهندس المرافق والعمليات' },
        bio: {
          en: 'I take care of the technical side of the space — from electricity and solar systems to fixing anything that comes up, so you can focus entirely on your work.',
          ar: 'أتولى الجانب التقني للمكان — من الكهرباء وأنظمة الطاقة الشمسية إلى إصلاح كل ما يطرأ، كي تتفرّغ بالكامل لعملك.',
        },
        image: anas,
      },
      {
        name: 'Muthana AlDandashi',
        role: { en: 'Admin & Operations Officer', ar: 'مسؤول الإدارة والعمليات' },
        bio: {
          en: "I'm usually the first person you'll meet at Masahet Nour. I support members with anything they need, handle daily coordination, and keep everything organised and running efficiently.",
          ar: 'عادةً ما أكون أول من تلتقيه في مساحة نور. أدعم الأعضاء في كل ما يحتاجون، وأتولى التنسيق اليومي لأُبقي كل شيء منظّمًا وفعّالًا.',
        },
        image: muthana,
      },
      {
        name: 'Tarek Ossman',
        role: { en: 'Social Media Officer', ar: 'مسؤول التواصل الاجتماعي' },
        bio: {
          en: 'I bring Masahet Nour to life online — through content, stories, and campaigns that showcase our community, events, and daily moments, and connect us with a wider audience.',
          ar: 'أُحيي مساحة نور على الشبكة — عبر المحتوى والقصص والحملات التي تعرض مجتمعنا وفعالياتنا ولحظاتنا اليومية، وتصلنا بجمهورٍ أوسع.',
        },
        image: tarek,
      },
      {
        name: 'Safa Khalaf',
        role: { en: 'Corporate Partnerships Coordinator', ar: 'منسقة الشراكات المؤسسية' },
        bio: {
          en: 'I connect Masahet Nour with companies and organisations, opening doors for our community through partnerships, jobs, and collaborations.',
          ar: 'أصل مساحة نور بالشركات والمؤسسات، وأفتح أبوابًا لمجتمعنا عبر الشراكات وفرص العمل والتعاون.',
        },
        image: safa,
      },
    ] satisfies TeamMember[],
  },

  laser: {
    eyebrow: { en: 'About LASeR', ar: 'عن لازر' } satisfies Bilingual,
    title: {
      en: 'The Lebanese Association for Scientific Research',
      ar: 'الجمعية اللبنانية للأبحاث العلمية',
    } satisfies Bilingual,
    body: {
      en: 'The Lebanese Association for Scientific Research (LASeR) is a non-profit organization founded in Tripoli, Lebanon in 2009 by 40 university professors who believed in the reform of the education sector and giving more students access to university education. LASeR offers scholarships, interest-free educational loans, institutional support for universities and schools, and creates linkages to the job market through a variety of hands-on trainings and workshops.',
      ar: 'الجمعية اللبنانية للأبحاث العلمية (لازر) منظمةٌ غير ربحية تأسست في طرابلس، لبنان عام ٢٠٠٩ على يد أربعين أستاذًا جامعيًا آمنوا بإصلاح قطاع التعليم وإتاحة التعليم الجامعي لعددٍ أكبر من الطلاب. تقدّم لازر منحًا دراسية، وقروضًا تعليمية بلا فوائد، ودعمًا مؤسسيًا للجامعات والمدارس، وتبني جسورًا مع سوق العمل من خلال تدريباتٍ وورش عملٍ تطبيقية متنوعة.',
    } satisfies Bilingual,
    goalsTitle: { en: 'Our Goals', ar: 'أهدافنا' } satisfies Bilingual,
    goalsBody: {
      en: "We believe that no dream should perish because of a lack of funding! Education is the tool that develops society, develops countries, and changes the lives of people forever. We've all been there, and we know it. That's why we are doing our best to support education, in order to provide the youth with the power to align with the accelerated changes the world is going through.",
      ar: 'نؤمن بأنه لا ينبغي لأي حلمٍ أن يذوي بسبب نقص التمويل! التعليم هو الأداة التي تنهض بالمجتمع، وتنهض بالدول، وتغيّر حياة الناس إلى الأبد. جميعنا مررنا بذلك، ونعرفه جيدًا. لهذا نبذل قصارى جهدنا لدعم التعليم، لنمنح الشباب القوة اللازمة لمواكبة التغيّرات المتسارعة التي يشهدها العالم.',
    } satisfies Bilingual,
    pullQuote: {
      en: 'No dream should perish because of a lack of funding.',
      ar: 'لا ينبغي لأي حلمٍ أن يذوي بسبب نقص التمويل.',
    } satisfies Bilingual,
    stats: [
      { number: '40', label: { en: 'founding professors', ar: 'أستاذًا مؤسسًا' } },
      { number: '2009', label: { en: 'founded in Tripoli', ar: 'تأسست في طرابلس' } },
      { number: '15+', label: { en: 'years empowering youth', ar: 'عامًا من تمكين الشباب' } },
    ] satisfies Stat[],
  },

  tashgheel: {
    eyebrow: { en: 'About Tashghīl', ar: 'عن تشغيل' } satisfies Bilingual,
    title: {
      en: 'Bridging the gap between the skills of fresh graduates and the needs of the job market.',
      ar: 'ردم الهوّة بين مهارات الخريجين الجدد واحتياجات سوق العمل.',
    } satisfies Bilingual,
    body: {
      en: 'Tashghīl aims to provide selected candidates with technical and digital business skills to prepare them for employment in different fields. After the training — both soft and hard skills — trainees do a 3-month corporate or project internship under the supervision of a mentor appointed by LASeR, who follows up on them and helps them achieve the goals of the internship.',
      ar: 'يهدف «تشغيل» إلى تزويد مرشّحين مختارين بالمهارات التقنية ومهارات الأعمال الرقمية لإعدادهم لسوق العمل في مجالاتٍ متعددة. بعد التدريب — على المهارات الشخصية والتقنية معًا — يخوض المتدرّبون تدريبًا مهنيًا لثلاثة أشهر داخل شركةٍ أو على مشروع، تحت إشراف مرشدٍ تعيّنه لازر ليتابعهم ويساعدهم على تحقيق أهداف التدريب.',
    } satisfies Bilingual,
    pillars: [
      {
        name: { en: 'Soft Skills Training', ar: 'تدريب المهارات الشخصية' },
        description: {
          en: 'Career readiness: personality test, build your CV, interviews. Business skills: communication, teamwork. Human interaction: problem-solving, time management.',
          ar: 'الجاهزية المهنية: اختبار الشخصية، كتابة السيرة الذاتية، المقابلات. مهارات الأعمال: التواصل والعمل الجماعي. التعامل الإنساني: حلّ المشكلات وإدارة الوقت.',
        },
      },
      {
        name: { en: 'Technical Skills Training', ar: 'تدريب المهارات التقنية' },
        description: {
          en: '3 months of technical skills training in one of the domains that the program covers.',
          ar: 'ثلاثة أشهر من التدريب التقني في أحد المجالات التي يغطّيها البرنامج.',
        },
      },
      {
        name: { en: 'Career Coaching', ar: 'التوجيه المهني' },
        description: {
          en: 'Trainees receive coaching to improve their skills, knowledge, and performance during the program. This phase ensures their readiness for a successful career.',
          ar: 'يتلقّى المتدرّبون توجيهًا لتطوير مهاراتهم ومعرفتهم وأدائهم خلال البرنامج. تضمن هذه المرحلة جاهزيتهم لمسيرةٍ مهنية ناجحة.',
        },
      },
      {
        name: { en: 'Mentorship', ar: 'الإرشاد' },
        description: {
          en: 'Students have a personalized internship journey designed specifically for their majors and profiles. They receive support from mentors and regular follow-up on their performance, allowing them to identify areas where they can improve and grow.',
          ar: 'يحصل الطلاب على رحلة تدريبٍ شخصية مصمَّمة خصيصًا لاختصاصاتهم وملفّاتهم. يتلقّون دعمًا من المرشدين ومتابعةً منتظمة لأدائهم، ما يتيح لهم اكتشاف مواطن التحسّن والنمو.',
        },
      },
      {
        name: { en: 'Internships', ar: 'التدريب المهني' },
        description: {
          en: 'Talented trainees do a 3-month corporate or project internship under the supervision of a mentor appointed by LASeR, gaining experience in real-case scenarios. During the internship, they receive a small income source paid in fresh dollars, and LASeR provides the logistics and IT infrastructure — electricity, internet connection, laptops — needed for the internships when required.',
          ar: 'يخوض المتدرّبون الموهوبون تدريبًا مهنيًا لثلاثة أشهر داخل شركةٍ أو على مشروع، تحت إشراف مرشدٍ تعيّنه لازر، فيكتسبون خبرةً في سيناريوهاتٍ واقعية. يحصلون خلال التدريب على مصدر دخلٍ صغير يُدفع بالدولار الطازج، وتوفّر لهم لازر ما يلزم من كهرباء واتصالٍ بالإنترنت وأجهزة حاسوب عند الحاجة.',
        },
      },
      {
        name: { en: 'Volunteering', ar: 'العمل التطوّعي' },
        description: {
          en: 'The project will assist students in identifying suitable volunteering opportunities and establishing connections with relevant volunteering organizations.',
          ar: 'يساعد البرنامج الطلاب على اكتشاف فرصٍ تطوّعية مناسبة، وربطهم بالمنظمات التطوّعية المعنيّة.',
        },
      },
    ] satisfies TashgheelPillar[],
  },

  footer: {
    copyright: {
      en: 'Masahet Nour. All rights reserved.',
      ar: 'مساحة نور. جميع الحقوق محفوظة.',
    } satisfies Bilingual,
  },

  nav: [
    { href: '#about', label: { en: 'About', ar: 'من نحن' } satisfies Bilingual },
    { href: '#spaces', label: { en: 'Spaces', ar: 'المساحات' } satisfies Bilingual },
    { href: '#story', label: { en: 'Story', ar: 'القصة' } satisfies Bilingual },
    { href: '#laser', label: { en: 'LASeR', ar: 'لازر' } satisfies Bilingual },
    { href: '#tashgheel', label: { en: 'Tashghīl', ar: 'تشغيل' } satisfies Bilingual },
    { href: '#team', label: { en: 'Team', ar: 'الفريق' } satisfies Bilingual },
    { href: '#visit', label: { en: 'Visit', ar: 'زرنا' } satisfies Bilingual },
  ],
} as const;

export type Site = typeof site;
