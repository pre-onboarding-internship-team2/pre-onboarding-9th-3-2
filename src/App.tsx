import AreaBarChart from './components/AreaBarChart';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AreaBarChart />
    </QueryClientProvider>
  );
}

export default App;
