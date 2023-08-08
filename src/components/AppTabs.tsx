import { TimerTabsContext } from '@/stores/timerTabs';
import * as Tabs from '@radix-ui/react-tabs';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import TimerView from '@/views/TimerView';
import { Icon } from '@iconify/react';
import Note from '@/components/timer/Note';
import './appTabs.css';

const AppTabs = observer(() => {
  const tabs = useContext(TimerTabsContext);

  const [value, setValue] = useState('home');

  useEffect(() => {
    if (value == '-1') {
      const t = tabs.addTab();
      setValue(t);
    }
  }, [value]);
  const handleClose = (id: string) => {
    tabs.closeTab(id);
    setValue(tabs.tabs.at(-1)?.id ?? 'home');
  };
  const handleStart = () => {
    if (tabs.tabs.length <= 0) {
      const newTab = tabs.addTab();
      setValue(newTab);
    } else {
      setValue(tabs.tabs.at(0)?.id ?? 'home');
    }
  };

  return (
    <Tabs.Root
      className='flex mx-auto w-full flex-col mt-4 px-4  max-w-sm bg-mesh '
      value={value}
      onValueChange={(val) => setValue(val)}
    >
      <Tabs.List className='flex shrink-0  divide-x border divide-purple-100 rounded-xl mx-auto  max-w-full overflow-scroll bg-white/20 backdrop-blur-lg border-purple-300'>
        <Tabs.Trigger
          className={`transition flex items-center justify-center px-4 py-2 bg-purple-50  hover:bg-purple-100 active:bg-purple-200 text-purple-700 ${
            tabs.tabs.length == 0 ? 'grow' : ''
          } `}
          value='home'
        >
          <Icon icon='mdi-home' />
        </Tabs.Trigger>
        {tabs.tabs.map((el, idx) => (
          <Tabs.Trigger
            key={el.id}
            className={`transition w-16 min-w-[4rem] flex grow items-center justify-center p-2 group space-x-2 border-b hover:bg-purple-100/50  backdrop-blur-lg active:bg-purple-400/20  ${
              value == el.id ? 'border-b-purple-800 text-purple-600 bg-purple-200/50 ' : ''
            } `}
            value={el.id}
          >
            <span className='text-xs font-light'>{idx + 1}</span>
            {el.id == value && (
              <Icon
                className='text-purple-600 group-hover:text-purple-500 group-hover:active:text-purple-700 '
                onClick={() => {
                  handleClose(el.id);
                }}
                icon={'mdi-window-close'}
              />
            )}
            {el.id != value && el.timer.hasFinished && <Icon className='' icon={'mdi-check'} />}
          </Tabs.Trigger>
        ))}
        <Tabs.Trigger
          value='-1'
          className='w-8 flex-shrink-0 bg-purple-50 hover:bg-purple-100 text-purple-600'
        >
          <Icon icon={'mdi-clock-plus-outline'} className='mx-auto' />
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className='grow-1 p-4 min-h-[18rem]' value='home'>
        <div className='flex flex-col '>
          <p className='text-sm font-light'>
            Your average timer app. Create many individual timers, add notes, and other functions.
          </p>
          <button
            className='px-5 py-2 border border-purple-300 rounded-xl mx-auto mt-3  bg-purple-50  hover:bg-purple-100 active:bg-purple-200 text-purple-700'
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </Tabs.Content>
      <Tabs.Content className='grow-1 p-4 min-h-[18rem]' value='-1'></Tabs.Content>
      {tabs.tabs.map((el) => (
        <Tabs.Content key={el.id} className='grow-1 p-4 min-h-[18rem] ' value={el.id}>
          <TimerView timer={el.timer} />
          <Note id={el.id} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
});

export default AppTabs;
