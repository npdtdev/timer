import { TimerTabsContext } from '@/stores/timerTabs';
import { observer } from 'mobx-react';
import { useContext } from 'react';

interface NoteProps {
  id: string;
}

const Note = observer(({ id }: NoteProps) => {
  const tabs = useContext(TimerTabsContext);

  const t = tabs.tabs.filter((el) => el.id == id).at(0);

  if (!t) {
    return <></>;
  }
  return (
    <div className='flex items-center mt-4 mx-auto space-x-2 w-full'>
      <label htmlFor='note' className='text-xs'>
        Note
      </label>
      <input
        name='note'
        id='note'
        placeholder='You can write a note'
        className='max-w-sm text-gray-800 font-light border-transparent rounded-2xl bg-transparent focus:bg-purple-200/10 px-3 py-2 text-sm grow placeholder:font-light '
        value={t.note}
        onChange={(ev) => {
          tabs.setNote(id, ev.target.value);
        }}
      />
    </div>
  );
});

export default Note;
