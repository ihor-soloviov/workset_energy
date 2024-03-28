import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

const Job = ({ params: { id } }: Props) => {
  return <div>child: {id}</div>;
};

export default Job;
