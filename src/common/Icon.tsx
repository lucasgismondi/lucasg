import React from 'react';
import MaterialIcon from '@material-ui/core/Icon';

interface Props {
    fontSize?: number;
    name: string;
    color?: string;
}

const Icon: React.FC<Props> = ({ fontSize = 1.2, name, color }) => {
    return (
        <MaterialIcon className="material-icons-outlined" style={{ fontSize: `${fontSize}em`, color }}>
            {name}
        </MaterialIcon>
    );
};

export default Icon;
