import { observer } from 'mobx-react';
import { IAppTimer } from '@/stores/appTimer';

interface TimerOptionsProps {
  timer: IAppTimer;
}

const TimerOptions = observer(({ timer }: TimerOptionsProps) => {
  const handleSetTime = (n: number) => {
    timer.setSeconds(n);
  };

  if (timer.isPaused) {
    return (
      <div className='flex flex-row  mt-4 flex-nowrap text-xs space-x-2 justify-center font-light'>
        <button
          className='px-2 py-1 rounded-2xl border-purple-300 border hover:bg-purple-200/20 active:bg-purple-300/20 text-purple-900'
          onClick={() => {
            handleSetTime(60);
          }}
        >
          1 min
        </button>
        <button
          className='px-2 py-1 rounded-2xl border-purple-300 border hover:bg-purple-200/20 active:bg-purple-300/20 text-purple-900'
          onClick={() => {
            handleSetTime(120);
          }}
        >
          2 min
        </button>
        <button
          className='px-2 py-1 rounded-2xl border-purple-300 border hover:bg-purple-200/20 active:bg-purple-300/20 text-purple-900'
          onClick={() => {
            handleSetTime(300);
          }}
        >
          5 min
        </button>
        <button
          className='px-2 py-1 rounded-2xl border-purple-300 border hover:bg-purple-200/20 active:bg-purple-300/20 text-purple-900'
          onClick={() => {
            handleSetTime(600);
          }}
        >
          10 min
        </button>
      </div>
    );
  }
  return <></>;
});

export default TimerOptions;
