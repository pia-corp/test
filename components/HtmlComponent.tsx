import React from 'react';

interface HtmlComponentProps {
    content: string;
}

const HtmlComponent: React.FC<HtmlComponentProps> = ({content}) => {
    return <div dangerouslySetInnerHTML={{__html: content}} />;
};

export default HtmlComponent;
