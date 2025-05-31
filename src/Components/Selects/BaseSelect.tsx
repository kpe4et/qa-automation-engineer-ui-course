import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export interface SelectOption<Value extends string> {
  title: string;
  value: Value;
  testId: string;
}

type BaseSelectProps<Value extends string> = {
  sx?: SxProps<Theme>;
  label: string;
  value: Value;
  options: SelectOption<Value>[];
  onSelect: (value: Value) => void;
  testId: string;
};

export const BaseSelect = <Value extends string>(props: BaseSelectProps<Value>) => {
  const { sx, label, value, options, onSelect, testId } = props;

  const onSelectValue = (event: SelectChangeEvent) => {
    onSelect(event.target.value as Value);
  };

  return (
    <FormControl sx={sx} size="small" fullWidth>
      <InputLabel data-test-id={`${testId}-select-label`}>{label}</InputLabel>
      <Select value={String(value || '')} label={label} onChange={onSelectValue} data-test-id={`${testId}-select`}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value || ''} data-test-id={`${testId}-select-${option.testId}-option`}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
