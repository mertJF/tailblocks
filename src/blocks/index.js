import React from 'react';

import LightBlogA from './blog/light/a';
import LightBlogB from './blog/light/b';
import LightBlogC from './blog/light/c';
import LightBlogD from './blog/light/d';
import LightBlogE from './blog/light/e';

import DarkBlogA from './blog/dark/a';
import DarkBlogB from './blog/dark/b';
import DarkBlogC from './blog/dark/c';
import DarkBlogD from './blog/dark/d';
import DarkBlogE from './blog/dark/e';

import LightContactA from './contact/light/a';
import LightContactB from './contact/light/b';
import LightContactC from './contact/light/c';

import DarkContactA from './contact/dark/a';
import DarkContactB from './contact/dark/b';
import DarkContactC from './contact/dark/c';

import LightContentA from './content/light/a';
import LightContentB from './content/light/b';
import LightContentC from './content/light/c';
import LightContentD from './content/light/d';
import LightContentE from './content/light/e';
import LightContentF from './content/light/f';
import LightContentG from './content/light/g';
import LightContentH from './content/light/h';

import DarkContentA from './content/dark/a';
import DarkContentB from './content/dark/b';
import DarkContentC from './content/dark/c';
import DarkContentD from './content/dark/d';
import DarkContentE from './content/dark/e';
import DarkContentF from './content/dark/f';
import DarkContentG from './content/dark/g';
import DarkContentH from './content/dark/h';

import LightCTAA from './cta/light/a';
import LightCTAB from './cta/light/b';
import LightCTAC from './cta/light/c';
import LightCTAD from './cta/light/d';

import DarkCTAA from './cta/dark/a';
import DarkCTAB from './cta/dark/b';
import DarkCTAC from './cta/dark/c';
import DarkCTAD from './cta/dark/d';

import LightEcommerceA from './ecommerce/light/a';
import LightEcommerceB from './ecommerce/light/b';
import LightEcommerceC from './ecommerce/light/c';

import DarkEcommerceA from './ecommerce/dark/a';
import DarkEcommerceB from './ecommerce/dark/b';
import DarkEcommerceC from './ecommerce/dark/c';


import LightFeatureA from './feature/light/a';
import LightFeatureB from './feature/light/b';
import LightFeatureC from './feature/light/c';
import LightFeatureD from './feature/light/d';
import LightFeatureE from './feature/light/e';
import LightFeatureF from './feature/light/f';
import LightFeatureG from './feature/light/g';
import LightFeatureH from './feature/light/h';

import DarkFeatureA from './feature/dark/a';
import DarkFeatureB from './feature/dark/b';
import DarkFeatureC from './feature/dark/c';
import DarkFeatureD from './feature/dark/d';
import DarkFeatureE from './feature/dark/e';
import DarkFeatureF from './feature/dark/f';
import DarkFeatureG from './feature/dark/g';
import DarkFeatureH from './feature/dark/h';

import LightFooterA from './footer/light/a';
import LightFooterB from './footer/light/b';
import LightFooterC from './footer/light/c';
import LightFooterD from './footer/light/d';
import LightFooterE from './footer/light/e';

import DarkFooterA from './footer/dark/a';
import DarkFooterB from './footer/dark/b';
import DarkFooterC from './footer/dark/c';
import DarkFooterD from './footer/dark/d';
import DarkFooterE from './footer/dark/e';

import LightGalleryA from './gallery/light/a';
import LightGalleryB from './gallery/light/b';
import LightGalleryC from './gallery/light/c';

import DarkGalleryA from './gallery/dark/a';
import DarkGalleryB from './gallery/dark/b';
import DarkGalleryC from './gallery/dark/c';

import LightHeaderA from './header/light/a';
import LightHeaderB from './header/light/b';
import LightHeaderC from './header/light/c';
import LightHeaderD from './header/light/d';

import DarkHeaderA from './header/dark/a';
import DarkHeaderB from './header/dark/b';
import DarkHeaderC from './header/dark/c';
import DarkHeaderD from './header/dark/d';

import LightHeroA from './hero/light/a';
import LightHeroB from './hero/light/b';
import LightHeroC from './hero/light/c';
import LightHeroD from './hero/light/d';
import LightHeroE from './hero/light/e';
import LightHeroF from './hero/light/f';

import DarkHeroA from './hero/dark/a';
import DarkHeroB from './hero/dark/b';
import DarkHeroC from './hero/dark/c';
import DarkHeroD from './hero/dark/d';
import DarkHeroE from './hero/dark/e';
import DarkHeroF from './hero/dark/f';

import LightPricingA from './pricing/light/a';
import LightPricingB from './pricing/light/b';

import DarkPricingA from './pricing/dark/a';
import DarkPricingB from './pricing/dark/b';

import LightStatisticA from './statistic/light/a';
import LightStatisticB from './statistic/light/b';
import LightStatisticC from './statistic/light/c';

import DarkStatisticA from './statistic/dark/a';
import DarkStatisticB from './statistic/dark/b';
import DarkStatisticC from './statistic/dark/c';

import LightStepA from './step/light/a';
import LightStepB from './step/light/b';
import LightStepC from './step/light/c';

import DarkStepA from './step/dark/a';
import DarkStepB from './step/dark/b';
import DarkStepC from './step/dark/c';

import LightTeamA from './team/light/a';
import LightTeamB from './team/light/b';
import LightTeamC from './team/light/c';

import DarkTeamA from './team/dark/a';
import DarkTeamB from './team/dark/b';
import DarkTeamC from './team/dark/c';

import LightTestimonialA from './testimonial/light/a';
import LightTestimonialB from './testimonial/light/b';
import LightTestimonialC from './testimonial/light/c';

import DarkTestimonialA from './testimonial/dark/a';
import DarkTestimonialB from './testimonial/dark/b';
import DarkTestimonialC from './testimonial/dark/c';

export default function getBlock({theme = 'indigo', darkMode = false}) {
  return {
    Blog: {
      BlogA: darkMode ? <DarkBlogA theme={theme} /> : <LightBlogA theme={theme} />,
      BlogB: darkMode ? <DarkBlogB theme={theme} /> : <LightBlogB theme={theme} />,
      BlogC: darkMode ? <DarkBlogC theme={theme} /> : <LightBlogC theme={theme} />,
      BlogD: darkMode ? <DarkBlogD theme={theme} /> : <LightBlogD theme={theme} />,
      BlogE: darkMode ? <DarkBlogE theme={theme} /> : <LightBlogE theme={theme} />
    },
    Contact: {
      ContactA: darkMode ? <DarkContactA theme={theme} /> : <LightContactA theme={theme} />,
      ContactB: darkMode ? <DarkContactB theme={theme} /> : <LightContactB theme={theme} />,
      ContactC: darkMode ? <DarkContactC theme={theme} /> : <LightContactC theme={theme} />,
    },
    Content: {
      ContentA: darkMode ? <DarkContentA theme={theme} /> : <LightContentA theme={theme} />,
      ContentB: darkMode ? <DarkContentB theme={theme} /> : <LightContentB theme={theme} />,
      ContentC: darkMode ? <DarkContentC theme={theme} /> : <LightContentC theme={theme} />,
      ContentD: darkMode ? <DarkContentD theme={theme} /> : <LightContentD theme={theme} />,
      ContentE: darkMode ? <DarkContentE theme={theme} /> : <LightContentE theme={theme} />,
      ContentF: darkMode ? <DarkContentF theme={theme} /> : <LightContentF theme={theme} />,
      ContentG: darkMode ? <DarkContentG theme={theme} /> : <LightContentG theme={theme} />,
      ContentH: darkMode ? <DarkContentH theme={theme} /> : <LightContentH theme={theme} />
    },
    CTA: {
      CTAA: darkMode ? <DarkCTAA theme={theme} /> : <LightCTAA theme={theme} />,
      CTAB: darkMode ? <DarkCTAB theme={theme} /> : <LightCTAB theme={theme} />,
      CTAC: darkMode ? <DarkCTAC theme={theme} /> : <LightCTAC theme={theme} />,
      CTAD: darkMode ? <DarkCTAD theme={theme} /> : <LightCTAD theme={theme} />
    },
    Ecommerce: {
      EcommerceA: darkMode ? <DarkEcommerceA theme={theme} /> : <LightEcommerceA theme={theme} />,
      EcommerceB: darkMode ? <DarkEcommerceB theme={theme} /> : <LightEcommerceB theme={theme} />,
      EcommerceC: darkMode ? <DarkEcommerceC theme={theme} /> : <LightEcommerceC theme={theme} />
    },
    Feature: {
      FeatureA: darkMode ? <DarkFeatureA theme={theme} /> : <LightFeatureA theme={theme} />,
      FeatureB: darkMode ? <DarkFeatureB theme={theme} /> : <LightFeatureB theme={theme} />,
      FeatureC: darkMode ? <DarkFeatureC theme={theme} /> : <LightFeatureC theme={theme} />,
      FeatureD: darkMode ? <DarkFeatureD theme={theme} /> : <LightFeatureD theme={theme} />,
      FeatureE: darkMode ? <DarkFeatureE theme={theme} /> : <LightFeatureE theme={theme} />,
      FeatureF: darkMode ? <DarkFeatureF theme={theme} /> : <LightFeatureF theme={theme} />,
      FeatureG: darkMode ? <DarkFeatureG theme={theme} /> : <LightFeatureG theme={theme} />,
      FeatureH: darkMode ? <DarkFeatureH theme={theme} /> : <LightFeatureH theme={theme} />
    },
    Footer: {
      FooterA: darkMode ? <DarkFooterA theme={theme} /> : <LightFooterA theme={theme} />,
      FooterB: darkMode ? <DarkFooterB theme={theme} /> : <LightFooterB theme={theme} />,
      FooterC: darkMode ? <DarkFooterC theme={theme} /> : <LightFooterC theme={theme} />,
      FooterD: darkMode ? <DarkFooterD theme={theme} /> : <LightFooterD theme={theme} />,
      FooterE: darkMode ? <DarkFooterE theme={theme} /> : <LightFooterE theme={theme} />
    },
    Gallery: {
      GalleryA: darkMode ? <DarkGalleryA theme={theme} /> : <LightGalleryA theme={theme} />,
      GalleryB: darkMode ? <DarkGalleryB theme={theme} /> : <LightGalleryB theme={theme} />,
      GalleryC: darkMode ? <DarkGalleryC theme={theme} /> : <LightGalleryC theme={theme} />
    },
    Header: {
      HeaderA: darkMode ? <DarkHeaderA theme={theme} /> : <LightHeaderA theme={theme} />,
      HeaderB: darkMode ? <DarkHeaderB theme={theme} /> : <LightHeaderB theme={theme} />,
      HeaderC: darkMode ? <DarkHeaderC theme={theme} /> : <LightHeaderC theme={theme} />,
      HeaderD: darkMode ? <DarkHeaderD theme={theme} /> : <LightHeaderD theme={theme} />
    },
    Hero: {
      HeroA: darkMode ? <DarkHeroA theme={theme} /> : <LightHeroA theme={theme} />,
      HeroB: darkMode ? <DarkHeroB theme={theme} /> : <LightHeroB theme={theme} />,
      HeroC: darkMode ? <DarkHeroC theme={theme} /> : <LightHeroC theme={theme} />,
      HeroD: darkMode ? <DarkHeroD theme={theme} /> : <LightHeroD theme={theme} />,
      HeroE: darkMode ? <DarkHeroE theme={theme} /> : <LightHeroE theme={theme} />,
      HeroF: darkMode ? <DarkHeroF theme={theme} /> : <LightHeroF theme={theme} />
    },
    Pricing: {
      PricingA: darkMode ? <DarkPricingA theme={theme} /> : <LightPricingA theme={theme} />,
      PricingB: darkMode ? <DarkPricingB theme={theme} /> : <LightPricingB theme={theme} />
    },
    Statistic: {
      StatisticA: darkMode ? <DarkStatisticA theme={theme} /> : <LightStatisticA theme={theme} />,
      StatisticB: darkMode ? <DarkStatisticB theme={theme} /> : <LightStatisticB theme={theme} />,
      StatisticC: darkMode ? <DarkStatisticC theme={theme} /> : <LightStatisticC theme={theme} />
    },
    Step: {
      StepA: darkMode ? <DarkStepA theme={theme} /> : <LightStepA theme={theme} />,
      StepB: darkMode ? <DarkStepB theme={theme} /> : <LightStepB theme={theme} />,
      StepC: darkMode ? <DarkStepC theme={theme} /> : <LightStepC theme={theme} />
    },
    Team: {
      TeamA: darkMode ? <DarkTeamA theme={theme} /> : <LightTeamA theme={theme} />,
      TeamB: darkMode ? <DarkTeamB theme={theme} /> : <LightTeamB theme={theme} />,
      TeamC: darkMode ? <DarkTeamC theme={theme} /> : <LightTeamC theme={theme} />
    },
    Testimonial: {
      TestimonialA: darkMode ? <DarkTestimonialA theme={theme} /> : <LightTestimonialA theme={theme} />,
      TestimonialB: darkMode ? <DarkTestimonialB theme={theme} /> : <LightTestimonialB theme={theme} />,
      TestimonialC: darkMode ? <DarkTestimonialC theme={theme} /> : <LightTestimonialC theme={theme} />
    }
  }
}

