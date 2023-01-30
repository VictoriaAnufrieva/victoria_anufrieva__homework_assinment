import { CountryList } from './components/CountryList';
import { FilteringBar } from './components/FilteringBar';
import { SortingBar } from './components/SortingBar';
import { ListParamsProvider } from './context/ListParams';


export function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 flex flex-col gap-3">
        <h1 className="font-bold uppercase font-xl">Countries List</h1>
        <ListParamsProvider>
          <div className="flex justify-between">
            <FilteringBar />
            <SortingBar />
          </div>
          <CountryList />
        </ListParamsProvider>
      </div>
    </div>
  );
}
