import { format } from 'date-fns';
import React, { useState } from 'react'
import { useInterval } from 'react-use';
import { TerminalDateTimeWrapper } from './styles';

const TerminalDateTime = () => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <TerminalDateTimeWrapper>{format(date, 'HH:mm:ss MM/dd/yyyy')}</TerminalDateTimeWrapper>
  );
}

export default TerminalDateTime