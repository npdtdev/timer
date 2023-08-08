import { observer } from 'mobx-react';
import { IAppTimer } from '@/stores/appTimer';

interface TimerViewProps {
  timer: IAppTimer;
}

const TimerDisplay = observer(({ timer }: TimerViewProps) => {
  const handleSubstract = () => {
    if (timer.seconds - 1 <= 0) {
      return;
    }
    timer.setSeconds(timer.seconds - 1);
  };

  const handleAdd = () => {
    timer.setSeconds(timer.seconds + 1);
  };
  if (timer.isPaused) {
    return (
      <>
        <div className='flex flex-row h-10 overflow-hidden rounded-lg bg-transparent mt-1 flex-nowrap justify-center'>
          <button
            className='transition px-4 bg-purple-200/50 text-xl hover:bg-purple-300/50 active:bg-purple-400/50 rounded-l-lg backdrop-blur-lg w-12 border-purple-300 border'
            onClick={handleSubstract}
          >
            -
          </button>
          <input
            className='w-12 font-light text-center bg-transparent border-purple-300 border-y'
            value={timer.seconds}
            min={0}
            onChange={(ev) => {
              timer.setSeconds(+ev.currentTarget.value);
            }}
            type='number'
            disabled={!timer.isPaused}
          />

          <button
            className='transition px-4 bg-purple-200/50 text-xl hover:bg-purple-300/50 active:bg-purple-400/50 rounded-r-lg backdrop-blur-lg w-12 border-purple-300 border'
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        {timer.elapsed > 0 && (
          <div className='flex justify-center mt-0.5'>
            <span className='text-xs text-gray-500 mx-auto '>
              Seconds left: {timer.secondsLeft}
            </span>
          </div>
        )}
      </>
    );
  }
  return (
    <div className='flex justify-center'>
      <span className='text-2xl font-light '>{timer.secondsLeft}</span>
    </div>
  );
});

export default TimerDisplay;
