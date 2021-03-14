import React from 'react';

import BlogA from './blog/merged/a';
import BlogB from './blog/merged/b';
import BlogC from './blog/merged/c';
import BlogD from './blog/merged/d';
import BlogE from './blog/merged/e';

import ContactA from './contact/merged/a';
import ContactB from './contact/merged/b';
import ContactC from './contact/merged/c';

import ContentA from './content/merged/a';
import ContentB from './content/merged/b';
import ContentC from './content/merged/c';
import ContentD from './content/merged/d';
import ContentE from './content/merged/e';
import ContentF from './content/merged/f';
import ContentG from './content/merged/g';
import ContentH from './content/merged/h';

import CTAA from './cta/merged/a';
import CTAB from './cta/merged/b';
import CTAC from './cta/merged/c';
import CTAD from './cta/merged/d';

import EcommerceA from './ecommerce/merged/a';
import EcommerceB from './ecommerce/merged/b';
import EcommerceC from './ecommerce/merged/c';

import FeatureA from './feature/merged/a';
import FeatureB from './feature/merged/b';
import FeatureC from './feature/merged/c';
import FeatureD from './feature/merged/d';
import FeatureE from './feature/merged/e';
import FeatureF from './feature/merged/f';
import FeatureG from './feature/merged/g';
import FeatureH from './feature/merged/h';

import FooterA from './footer/merged/a';
import FooterB from './footer/merged/b';
import FooterC from './footer/merged/c';
import FooterD from './footer/merged/d';
import FooterE from './footer/merged/e';

import GalleryA from './gallery/merged/a';
import GalleryB from './gallery/merged/b';
import GalleryC from './gallery/merged/c';

import HeaderA from './header/merged/a';
import HeaderB from './header/merged/b';
import HeaderC from './header/merged/c';
import HeaderD from './header/merged/d';

import HeroA from './hero/merged/a';
import HeroB from './hero/merged/b';
import HeroC from './hero/merged/c';
import HeroD from './hero/merged/d';
import HeroE from './hero/merged/e';
import HeroF from './hero/merged/f';

import PricingA from './pricing/merged/a';
import PricingB from './pricing/merged/b';

import StatisticA from './statistic/merged/a';
import StatisticB from './statistic/merged/b';
import StatisticC from './statistic/merged/c';

import StepA from './step/merged/a';
import StepB from './step/merged/b';
import StepC from './step/merged/c';

import TeamA from './team/merged/a';
import TeamB from './team/merged/b';
import TeamC from './team/merged/c';

import TestimonialA from './testimonial/merged/a';
import TestimonialB from './testimonial/merged/b';
import TestimonialC from './testimonial/merged/c';

export default function getBlock({theme = 'indigo'}) {
  return {
    Blog: {
      BlogA: <BlogA theme={theme} />,
      BlogB: <BlogB theme={theme} />,
      BlogC: <BlogC theme={theme} />,
      BlogD: <BlogD theme={theme} />,
      BlogE: <BlogE theme={theme} />
    },
    Contact: {
      ContactA: <ContactA theme={theme} />,
      ContactB: <ContactB theme={theme} />,
      ContactC: <ContactC theme={theme} />,
    },
    Content: {
      ContentA: <ContentA theme={theme} />,
      ContentB: <ContentB theme={theme} />,
      ContentC: <ContentC theme={theme} />,
      ContentD: <ContentD theme={theme} />,
      ContentE: <ContentE theme={theme} />,
      ContentF: <ContentF theme={theme} />,
      ContentG: <ContentG theme={theme} />,
      ContentH: <ContentH theme={theme} />
    },
    CTA: {
      CTAA: <CTAA theme={theme} />,
      CTAB: <CTAB theme={theme} />,
      CTAC: <CTAC theme={theme} />,
      CTAD: <CTAD theme={theme} />
    },
    Ecommerce: {
      EcommerceA: <EcommerceA theme={theme} />,
      EcommerceB: <EcommerceB theme={theme} />,
      EcommerceC: <EcommerceC theme={theme} />
    },
    Feature: {
      FeatureA: <FeatureA theme={theme} />,
      FeatureB: <FeatureB theme={theme} />,
      FeatureC: <FeatureC theme={theme} />,
      FeatureD: <FeatureD theme={theme} />,
      FeatureE: <FeatureE theme={theme} />,
      FeatureF: <FeatureF theme={theme} />,
      FeatureG: <FeatureG theme={theme} />,
      FeatureH: <FeatureH theme={theme} />
    },
    Footer: {
      FooterA: <FooterA theme={theme} />,
      FooterB: <FooterB theme={theme} />,
      FooterC: <FooterC theme={theme} />,
      FooterD: <FooterD theme={theme} />,
      FooterE: <FooterE theme={theme} />
    },
    Gallery: {
      GalleryA: <GalleryA theme={theme} />,
      GalleryB: <GalleryB theme={theme} />,
      GalleryC: <GalleryC theme={theme} />
    },
    Header: {
      HeaderA: <HeaderA theme={theme} />,
      HeaderB: <HeaderB theme={theme} />,
      HeaderC: <HeaderC theme={theme} />,
      HeaderD: <HeaderD theme={theme} />
    },
    Hero: {
      HeroA: <HeroA theme={theme} />,
      HeroB: <HeroB theme={theme} />,
      HeroC: <HeroC theme={theme} />,
      HeroD: <HeroD theme={theme} />,
      HeroE: <HeroE theme={theme} />,
      HeroF: <HeroF theme={theme} />
    },
    Pricing: {
      PricingA: <PricingA theme={theme} />,
      PricingB: <PricingB theme={theme} />
    },
    Statistic: {
      StatisticA: <StatisticA theme={theme} />,
      StatisticB: <StatisticB theme={theme} />,
      StatisticC: <StatisticC theme={theme} />
    },
    Step: {
      StepA: <StepA theme={theme} />,
      StepB: <StepB theme={theme} />,
      StepC: <StepC theme={theme} />
    },
    Team: {
      TeamA: <TeamA theme={theme} />,
      TeamB: <TeamB theme={theme} />,
      TeamC: <TeamC theme={theme} />
    },
    Testimonial: {
      TestimonialA: <TestimonialA theme={theme} />,
      TestimonialB: <TestimonialB theme={theme} />,
      TestimonialC: <TestimonialC theme={theme} />
    }
  }
}

