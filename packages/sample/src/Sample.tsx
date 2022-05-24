import './sample.scss';

export interface SampleProps {
  name: string;
}

export const Sample = (props: SampleProps) => {
  const { name } = props;
  return (
    <div className={'SampleRoot'}>
      <h1>I am the {name} component</h1>
    </div>
  );
};
