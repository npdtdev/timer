import { observer } from 'mobx-react';
import { IAppTimer } from '@/stores/appTimer';
import ResetButton from '@/components/timer/ResetButton';
import StartPauseButton from '@/components/timer/StartPauseButton';
import TimerDisplay from '@/components/timer/TimerDisplay';
import TimeOptions from '@/components/timer/TimeOptions';

interface TimerViewProps {
  timer: IAppTimer;
}

const TimerView = observer(({ timer }: TimerViewProps) => {
  return (
    <>
      <div className='mt-4'>
        <TimerDisplay timer={timer} />
        <TimeOptions timer={timer} />
      </div>

      <div className='flex flex-row flex-nowrap space-x-4 mt-8 justify-center'>
        <ResetButton timer={timer} />
        <StartPauseButton timer={timer} />
      </div>
    </>
  );
});

export default TimerView;
