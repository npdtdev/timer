import '@/App.css';
import AppTabs from '@/components/AppTabs';
import AppFooter from '@/components/AppFooter';

function App() {
  return (
    <div className='flex flex-col justify-between min-h-screen items-center h-full'>
      <div className='h-0 w-0' />
      <div>
        <h1 className='text-4xl text-center font-light'>Timer</h1>
        <AppTabs />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
