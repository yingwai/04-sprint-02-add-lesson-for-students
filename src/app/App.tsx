import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { useAppSelector } from './store.ts'
import { statusApp } from './app-selectors.ts'
import { STATUS_CODE } from './app-reducer.ts'

export const App = () => {
  const status = useAppSelector(statusApp)

  return (
    <div>
      {
        status === STATUS_CODE.loading &&
        <LinearLoader />
      }
      <Decks />
      <GlobalError />
    </div>
  )
}
