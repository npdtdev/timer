import { IAppTimer } from '@/stores/appTimer';
import { observer } from 'mobx-react';

interface ResetButtonProps {
  timer: IAppTimer;
}

const ResetButton = observer(({ timer }: ResetButtonProps) => {
  const handleReset = () => {
    timer.restart();
  };
  if (timer.isPaused) {
    return (
      <button
        className='transition bg-red-200 hover:bg-red-300 active:bg-red-400 px-3 py-1.5 rounded-lg text-sm border-red-300 border text-red-900'
        onClick={handleReset}
      >
        Reset
      </button>
    );
  }
  return <></>;
});

export default ResetButton;
