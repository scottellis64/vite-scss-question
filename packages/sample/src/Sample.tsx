import './sample.scss';

import '@vsq/styles';

export interface SampleProps {
  name: string;
  sharedStyle: string;
}

export const Sample = (props: SampleProps) => {
  const { name, sharedStyle } = props;
  return (
    <div className={'SampleRoot'}>
      <h1 className={sharedStyle}>I am the {name} component</h1>
    </div>
  );
};
