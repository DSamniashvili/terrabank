import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { Carousel } from 'components/index';
import Images from 'theme/Images';

const data = [
  {
    title: 'common:onboarding.templates',
    desc: 'common:onboarding.buildTemplates',
    image: Images().onboarding,
  },
  {
    title: 'common:onboarding.templates',
    desc: 'common:onboarding.buildTemplates',
    image: Images().onboarding,
  },
  {
    title: 'common:onboarding.templates',
    desc: 'common:onboarding.buildTemplates',
    image: Images().onboarding,
  },
];

interface OnboardingScreenBaseProps {
  handleLogin?: () => Promise<void>;
}

const OnboardingScreenBase: FC<OnboardingScreenBaseProps> = ({ handleLogin }) => {
  return <Carousel data={data} onSkip={handleLogin} onTimeout={handleLogin} withTimer />;
};

export const OnboardingScreen = withLoginScreen<OnboardingScreenBaseProps>(OnboardingScreenBase);
