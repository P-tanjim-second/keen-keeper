import React, { useState } from 'react';
import { AllAction } from './Context';

const ContextProvider = ({children}) => {
    const [actions, setActions] = useState([])

    const data = {
        actions,
        setActions
    }

    return (
        <AllAction value={data}>{children}</AllAction>
    );
};

export default ContextProvider;