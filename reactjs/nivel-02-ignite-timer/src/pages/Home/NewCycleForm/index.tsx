import { FormContainer, TaskInput, MinutesAmountInput } from './styles';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../contexts/CyclesContext';

const Index = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Project 01" />
        <option value="Project 02" />
        <option value="Project 03" />
        <option value="Project 04" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  );
};

export default Index;
