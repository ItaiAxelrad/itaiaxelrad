import Terrain from '@components/three/Terrain';

export default function Page({ params }) {
  return (
    <div className='max-w-2xl my-8 p-2'>
      <h2 className='text-2xl text-center my-6'>{params.name}</h2>
      <p>Some info goes here...</p>
      <div className='h-96 w-full m-6 relative'>
        <Terrain />
      </div>
    </div>
  );
}
