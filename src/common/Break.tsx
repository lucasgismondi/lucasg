import React from 'react';

interface Props {
    numBreaks?: number;
}

const Break: React.FC<Props> = ({ numBreaks = 2 }) => {
    return (
        <>
            {Array(numBreaks)
                .fill(0)
                .map((_, i) => (
                    <br key={i} />
                ))}
        </>
    );
};

export default Break;
