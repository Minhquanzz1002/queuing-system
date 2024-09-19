import React, {PropsWithChildren} from 'react';

const EmptyLayout: React.FC<PropsWithChildren> = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default EmptyLayout;