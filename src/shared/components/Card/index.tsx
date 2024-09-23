import React, {PropsWithChildren} from 'react';
import "./styles.scss";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({children, className, ...props}: PropsWithChildren<CardProps>) => {
    return (
        <div className={`card ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;