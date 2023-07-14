import Heading from '@components/Heading';

export default function Page({ params }) {
  return (
    <div className='max-w-2xl my-16 p-2'>
      <Heading>{params.name}</Heading>
      <p>Some info goes here...</p>
    </div>
  );
}
