import React, {JSX} from "react";

export type IRouter = {
    name?: string;
    path: string;
    loader?:
        | React.LazyExoticComponent<() => JSX.Element>
        | React.LazyExoticComponent<React.MemoExoticComponent<() => JSX.Element>>
        | React.LazyExoticComponent<React.FC<any>>
        | React.LazyExoticComponent<React.NamedExoticComponent<any>>;
    exact?: boolean;
}