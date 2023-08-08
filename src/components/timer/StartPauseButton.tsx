import { IAppTimer } from '@/stores/appTimer';
import { observer } from 'mobx-react';

interface StartPauseButtonProps {
  timer: IAppTimer;
}

const StartPauseButton = observer(({ timer }: StartPauseButtonProps) => {
  const handleStart = () => {
    timer.start();
  };
  const handlePause = () => {
    timer.pause();
  };
  if (timer.isPaused) {
    return (
      <button
        className='transition bg-purple-200 hover:bg-purple-300 active:bg-purple-400 px-3 py-1.5 rounded-lg text-sm border-purple-300 border text-purple-900'
        onClick={handleStart}
      >
        {timer.elapsed == 0 ? 'Start' : 'Resume'}
      </button>
    );
  } else {
    return (
      <button
        className='transition bg-purple-200 hover:bg-purple-300 active:bg-purple-400 px-3 py-1.5 rounded-lg text-sm border-purple-300 border text-purple-900'
        onClick={handlePause}
      >
        Pause
      </button>
    );
  }
});

export default StartPauseButton;
