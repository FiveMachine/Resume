import React from 'react'

const StructuredData: React.FC = () => {
  // Declarar cada variable de datos estructurados primero
  const webPageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://huevoaoki.com/#webpage',
    url: 'https://huevoaoki.com/',
    name: 'Portfolio de Huevo Aoki',
    description:
      'Huevo Aoki, développeur frontend React, Next.js et TypeScript. Découvrez mon portfolio et projets.',
    datePublished: '2024-11-06T00:00:00+00:00',
    dateModified: '2024-11-06T00:00:00+00:00',
    inLanguage: 'fr-FR',
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://huevoaoki.com/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://huevoaoki.com/',
      },
    ],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://huevoaoki.com/#website',
    url: 'https://huevoaoki.com/',
    name: 'Portfolio de Huevo Aoki',
    description: 'Développeur frontend React, Next.js et TypeScript.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://huevoaoki.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'fr-FR',
  }

  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://huevoaoki.com/#person',
    name: 'Huevo Aoki',
    description:
      'Développeur frontend spécialisé en React, Next.js et TypeScript.',
    url: 'https://huevoaoki.com/',
    image: {
      '@type': 'ImageObject',
      url: 'https://huevoaoki.com/path/to/your/profile-image.jpg',
      caption: 'Huevo Aoki',
    },
    email: 'mailto:votreemail@domaine.com',
    jobTitle: 'Développeur Frontend',
    telephone: '0695916727',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dijon',
      addressRegion: "Côte-d'Or",
      postalCode: '21000',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.linkedin.com/in/votreprofil/',
      'https://github.com/votreutilisateur',
    ],
  }

  const creativeWorkSeriesData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWorkSeries',
    name: 'Portfolio de Huevo Aoki',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '36',
    },
  }

  {
    /** const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Huevo Aoki',
    image: '', // Reemplaza con la URL de tu imagen si la tienes
    '@id': '', // Puedes asignar un ID único si lo deseas
    url: 'https://huevoaoki.com',
    telephone: '0695916727',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '', // Añade tu dirección si lo deseas
      addressLocality: 'Dijon',
      postalCode: '21000',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.linkedin.com/in/huevo-1206/',
      // Puedes agregar otros perfiles si lo deseas
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
    ],
  }*/
  }

  // Ahora, crea la lista después de haber declarado todas las variables
  const structuredDataList = [
    webPageData,
    breadcrumbData,
    websiteData,
    personData,
    creativeWorkSeriesData,
  ]

  return (
    <>
      {structuredDataList.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}

export default StructuredData
