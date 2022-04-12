import { format } from 'date-fns';
import { useState } from 'react'
import { useInterval } from 'react-use';
import { TerminalDateTimeContainer } from './styles';

const TerminalDateTime = () => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <TerminalDateTimeContainer>
      {format(date, 'HH:mm:ss MM/dd/yyyy')}
    </TerminalDateTimeContainer>
  );
}

export default TerminalDateTime