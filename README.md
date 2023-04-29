## mui-chip-select

A React component that helps you display selectable options with MUI chip.

## Installation:

`npm install mui-chip-select`

or

`yarn add mui-chip-select`

## Usage:

**Add `MuiChipSelect` to your component like this:**

```
import React, { useState } from 'react';
import { MuiChipSelect } from 'mui-chip-select';

function App() {

  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleSelectionChange(newSelection: any) {
    setSelectedOptions(newSelection);
  }

  const customChipProps = {
    sx: {
      backgroundColor: 'orange'
    },
  };

  const options = ['Mango', 'Orange', 'Carrot']

  return (
    <div className="App">
        <p>Please select all that applies</>
        <MuiChipSelect options={options} onChange={handleSelectionChange} chipProps={customChipProps }/>
    </div>
  );
}

export default App;

```

Options can also be an array of objects:

```
  const options = [
    {
      label: "Mango",
      value: 'd5b3dd96-6657-4e3f-82d1-1046d61c2f99'
    },
    {
      label: "Orange",
      value: '7ab12239-4b03-4898-bfed-a3de7d7e8c95'
    },
    {
      label: "Carrot",
      value: '0e822307-2054-4a4d-ad0f-18a652d5b3df'
    }
  ];
```

## Props

Common props you may want to specify include:

| Name      | Type                                | Required | Description                                                                                                                                         |
| --------- | ----------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| options   | Array of strings or objects         | Yes      | An array of options to be displayed as chips. Can be either an array of strings or an array of objects with label and value properties..            |
| onChange  | (selected: Option[]) => void        | Yes      | A callback function that gets triggered when an option is selected or unselected. The function receives an array of selected options as an argument |
| chipProps | `React.ComponentProps<typeof Chip>` | No       | Props to be passed to the Chip component.Can be used to customize the appearance and behavior of the chip container.                                |
| className | `string`                            | No       | A class name to be added to the `Chip` wrapper.Can be used to add custom CSS styles to the container.                                               |

## License

MIT Licensed. Copyright (c) Chiamaka Umeh 2023.
