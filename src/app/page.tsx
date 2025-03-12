import { DefaultButton, IconButton, OutlineButton } from '@/components/Button';
import { Bars3Icon } from '@heroicons/react/16/solid';

export default function Home() {
  return (
    <main className='container'>
      <h1 className='text-orange-500 text-3xl'>ここから始めるけーちーブログ</h1>
      <div className='flex gap-5'>
        <DefaultButton type='button' title='テスト' />
        <OutlineButton type='button' title='テスト' />
        <IconButton type='button'>
          <Bars3Icon />
        </IconButton>
      </div>
    </main>
  );
}
