import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { Carousel } from 'components/index';

const data = [
  {
    title: 'common:onboarding.templates',
    desc: 'common:onboarding.buildTemplates',
    color: 'green',
  },
  { title: 'common:onboarding.templates', desc: 'common:onboarding.buildTemplates', color: 'red' },
  { title: 'common:onboarding.templates', desc: 'common:onboarding.buildTemplates', color: 'blue' },
];

interface OnboardingScreenBaseProps {
  handleLogin?: () => Promise<void>;
}

const OnboardingScreenBase: FC<OnboardingScreenBaseProps> = ({ handleLogin }) => {
  return <Carousel data={data} onSkip={handleLogin} onTimeout={handleLogin} withTimer />;
};

export const OnboardingScreen = withLoginScreen<OnboardingScreenBaseProps>(OnboardingScreenBase);
