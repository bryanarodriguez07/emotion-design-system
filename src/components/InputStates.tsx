import React from 'react';
import './InputStates.css';

interface InputFieldProps {
  state: 'default' | 'filled' | 'hover' | 'focus' | 'disabled' | 'error';
  label?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ state, label }) => {
  const labelClass = `is-inp-label is-inp-label--${state}`;
  const inputClass = `is-inp is-inp--${state}`;

  const getValue = () => {
    if (state === 'filled' || state === 'focus' || state === 'error') return 'Input text';
    if (state === 'disabled') return '';
    return '';
  };

  const getPlaceholder = () => {
    if (state === 'disabled') return 'Disabled';
    return 'Placeholder';
  };

  return (
    <div className="is-field-wrap">
      {label && <div className={labelClass}>Label</div>}
      <input
        className={inputClass}
        placeholder={getPlaceholder()}
        value={getValue()}
        disabled={state === 'disabled'}
        readOnly={state !== 'disabled'}
        onChange={() => {}}
      />
      {state === 'error' && <div className="is-error-msg">Error message</div>}
    </div>
  );
};

const STATES: {
  id: 'default' | 'filled' | 'hover' | 'focus' | 'disabled' | 'error';
  label: string;
}[] = [
  { id: 'default', label: 'Default' },
  { id: 'filled', label: 'Filled' },
  { id: 'hover', label: 'Hover' },
  { id: 'focus', label: 'Focus' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'error', label: 'Error' },
];

const InputStates: React.FC = () => {
  return (
    <div className="is-wrap">
      <div className="is-col-headers">
        <div className="is-spacer" />
        <div className="is-col-header">No label</div>
        <div className="is-col-header">With label</div>
      </div>

      {STATES.map(({ id, label }, i) => (
        <React.Fragment key={id}>
          <div className={`is-row ${id === 'error' ? 'is-row--error' : ''}`}>
            <div className={`is-row-label ${id === 'error' ? 'is-row-label--error' : ''}`}>
              {label}
            </div>
            <div className="is-cell">
              <div className="is-cell-inner">
                <InputField state={id} />
              </div>
            </div>
            <div className="is-cell">
              <div className="is-cell-inner">
                <InputField state={id} label />
              </div>
            </div>
          </div>
          {i < STATES.length - 1 && <div className="is-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InputStates;
