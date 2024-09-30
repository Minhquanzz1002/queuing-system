import React from 'react';
import {Breadcrumb as BreadcrumbAntd, BreadcrumbProps} from "antd";
import {IconChevronRight} from "@assets/icons";
import "./styles.scss";
import {ItemType} from "antd/es/breadcrumb/Breadcrumb";
import {AnyObject} from "antd/es/_util/type";
import {Link} from "react-router-dom";

const Breadcrumb = (props: BreadcrumbProps) => {
    const itemRender = (route: ItemType, _params: AnyObject, routes: ItemType[]): React.ReactNode => {
        const last = routes.indexOf(route) === routes.length - 1;
        return !last && route.href ? (
            <Link className="breadcrumb-link" to={route.href}>{route.title}</Link>
        ) : (
            <span className="breadcrumb-link">{route.title}</span>
        );
    };

    return (
        <BreadcrumbAntd
            className="breadcrumb"
            separator={<IconChevronRight style={{color: 'rgba(126, 125, 136, 1)'}}/>}
            itemRender={itemRender}
            {...props}
        />
    );
};

export default Breadcrumb;