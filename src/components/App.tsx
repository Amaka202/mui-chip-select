import React, { useState } from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

type Option = string | { label: string; value: string }

interface MuiChipSelectProps {
  options: Option[]
  onChange: (selected: Option[]) => void
  chipProps?: React.ComponentProps<typeof Chip>
  className?: string
}

function MuiChipSelect({ options, onChange, chipProps, className }: MuiChipSelectProps) {
  const [selected, setSelected] = useState<Option[]>([])

  function handleChipClick(option: Option) {
    let newSelected: Option[] = []

    if (typeof option === 'string') {
      const selectedIndex = selected.indexOf(option)

      if (selectedIndex === -1) {
        newSelected = [...selected, option]
      } else if (selectedIndex === 0) {
        newSelected = selected.slice(1)
      } else if (selectedIndex === selected.length - 1) {
        newSelected = selected.slice(0, -1)
      } else if (selectedIndex > 0) {
        newSelected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)]
      }
    } else {
      const selectedIndex = selected.findIndex((opt) =>
        typeof opt === 'string' ? opt === option.label : opt.value === option.value,
      )

      if (selectedIndex === -1) {
        newSelected = [...selected, option]
      } else if (selectedIndex === 0) {
        newSelected = selected.slice(1)
      } else if (selectedIndex === selected.length - 1) {
        newSelected = selected.slice(0, -1)
      } else if (selectedIndex > 0) {
        newSelected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)]
      }
    }

    setSelected(newSelected)
    onChange(newSelected)
  }

  const optionList = options.map((option) => (typeof option === 'string' ? { label: option, value: option } : option))

  return (
    <Stack direction='row' spacing={1} className={className}>
      {optionList.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          clickable
          icon={<CheckCircleIcon />}
          onClick={() => handleChipClick(option)}
          color={
            selected.findIndex((opt) =>
              typeof opt === 'string' ? opt === option.label : opt.value === option.value,
            ) !== -1
              ? 'primary'
              : 'default'
          }
          {...chipProps}
        />
      ))}
    </Stack>
  )
}

export default MuiChipSelect
