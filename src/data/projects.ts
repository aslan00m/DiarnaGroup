import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'al-narjis-villas',
    title: 'مجمع فلل النرجس السكني',
    category: 'stone',
    city: 'الرياض',
    status: 'completed',
    description:
      'تنفيذ واجهات حجر الرياض الفاخر والتركيب الميكانيكي مع تكسيات رخامية داخلية لمجمع يضم 14 فيلا سكنية بتصميم نيوكلاسيك راقي.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['الحجر والواجهات', 'الرخام'],
    date: '2024',
    seo: {
      title: 'مشروع مجمع فلل النرجس | ديارنا الحديثة',
      description: 'تفاصيل تنفيذ واجهات حجر الرياض ورخام المداخل لمجمع فلل النرجس بالرياض.',
    },
  },
  {
    id: '2',
    slug: 'king-fahd-business-center',
    title: 'مركز أعمال طريق الملك فهد',
    category: 'equipment',
    city: 'الرياض',
    status: 'completed',
    description:
      'توفير منظومة متكاملة من معدات الرفع الثقيلة (كرينات، سيزر لفت، ومان لفت) لتنفيذ أعمال الهيكل الفولاذي وواجهات الزجاج والكلادينج.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['تأجير المعدات الثقيلة'],
    date: '2024',
    seo: {
      title: 'مشروع مركز أعمال طريق الملك فهد | ديارنا الحديثة',
      description: 'تأجير معدات الرفع والتثبيت لتشييد مركز الأعمال على طريق الملك فهد بالرياض.',
    },
  },
  {
    id: '3',
    slug: 'hittin-palace-marble',
    title: 'قصر حطين الخاص — أعمال الرخام الفاخر',
    category: 'marble',
    city: 'الرياض',
    status: 'completed',
    description:
      'توريد وقص ليزري وتركيب أرضيات رخام ستاتوريو وإمبرادور للبهو الرئيسي، الدرج الحلزوني، وأجنحة الضيافة بمساحة تتجاوز 2500 م².',
    images: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['الرخام'],
    date: '2023',
    seo: {
      title: 'مشروع قصر حطين للرخام | ديارنا الحديثة',
      description: 'أعمال تفصيل وتركيب الرخام الفاخر لقصر حطين بالرياض بجودة وإتقان عالي.',
    },
  },
  {
    id: '4',
    slug: 'al-malqa-commercial-complex',
    title: 'مجمع الملقا التجاري',
    category: 'contracting',
    city: 'الرياض',
    status: 'ongoing',
    description:
      'المقاول الرئيسي لأعمال التشطيبات المعمارية وتنفيذ واجهات الحجر الميكانيكي وتجهيزات الموقع والمواقف لمجمع تجاري حديث.',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['المقاولات', 'الحجر والواجهات', 'المعدات الثقيلة'],
    date: '2024',
    seo: {
      title: 'مشروع مجمع الملقا التجاري | ديارنا الحديثة',
      description: 'أعمال المقاولات والواجهات لمجمع الملقا التجاري في مدينة الرياض.',
    },
  },
]
