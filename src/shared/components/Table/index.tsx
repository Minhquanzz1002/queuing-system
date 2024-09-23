import React from 'react';
import {ConfigProvider, Table as TableAntd, TableProps as AntdTableProps} from "antd";
import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";

type TableProps<RecordType> = AntdTableProps<RecordType>

const Table = <RecordType extends object = any>(props: TableProps<RecordType>) => {
    const itemRender = (page: number, type: "prev" | "next" | "page" | "jump-prev" | "jump-next", element: React.ReactNode) : React.ReactNode  => {
        if (type === 'prev') {
            return <CaretLeftFilled style={{color: '#A9A9B0'}} />;
        }
        if (type === 'next') {
            return <CaretRightFilled style={{color: '#A9A9B0'}} />;
        }
        return element;
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        headerBg: '#FF9138',
                        headerColor: 'white',
                        borderColor: '#FFF2E7',
                        cellFontSize: 14,
                    },
                    Pagination: {
                        itemActiveBg: '#FF7506',
                        itemActiveColorDisabled: 'white',
                        itemBg: 'none',
                    }
                },
                token: {
                    fontSize: 16,
                    fontWeightStrong: 700,
                }
            }}
        >
            <TableAntd {...props} rowHoverable={false} pagination={{itemRender}} rowClassName={(record, index) => index % 2 === 0 ? '' : 'bg-orange-50'}/>
        </ConfigProvider>
    );
};

export default Table;