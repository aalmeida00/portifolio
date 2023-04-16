import React, { memo } from 'react'

const titles = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
};



interface ITitle {
  children: React.ReactNode;
  tag: string;
  [key: string]: any;
}

const Title = ({ children, tag, props }: ITitle) => {
  const ValidTag = tag in titles ? tag : 'h1';

  return (  
    <ValidTag className="text-6xl" {...props}>
      {children}
    </ValidTag>
  )
}
export default memo(Title)