import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.scss';
import TopBar from './components/top-bar/top-bar';
import Button from '@material-ui/core/Button';
import { useStores } from './store/contexts.store';

const App: React.FC = () => {
  const { store } = useStores();

  return (
    <div className="App">
      <header className="App-header">
        <TopBar></TopBar>
        <Button onClick={store.increment}>Click</Button>
      </header>
    </div>
  );
}

export default observer(App);
