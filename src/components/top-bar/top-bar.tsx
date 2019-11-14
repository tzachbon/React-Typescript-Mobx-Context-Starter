import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStores } from '../../store/contexts.store';

interface ITopBarProps {
}

const TopBar: React.FunctionComponent<ITopBarProps> = (props) => {
    const { store } = useStores();

    return (
        <div>
            {store.count}
        </div>
    );
};

export default observer(TopBar);
