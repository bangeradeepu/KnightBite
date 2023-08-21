import React from 'react'
import { components } from 'react-select'

const Option = (props) => {
  const { label, options, isSelected, innerProps } = props
  const isMainOption = options && options.length > 0

  return (
    <div>
      <components.Option {...props}>
        {isMainOption ? (
          <h5
            style={{
              fontWeight: 'Regular',
              margin: 0,
              padding: '5px 0',
              background: '#fffff',
            }}
          >
            {label}
          </h5>
        ) : (
          <div {...innerProps}>
            <input
              type='checkbox'
              checked={isSelected}
              onChange={() => null}
              style={{ marginRight: '1px' }}
            />
            <label>{label}</label>
          </div>
        )}
      </components.Option>
    </div>
  )
}

const colourOptions = [
  {
    label: 'Mangalore',
    options: [
      { value: 'KnightBite', label: 'Knight Bite' },
      { value: 'pancake', label: 'Pancake' },
      { value: 'Chicken Bite', label: 'Chicken Bite' },
      { value: 'Cake', label: 'Cake' }, // Added "Pancake" sub-option
    ],
  },
  {
    label: 'Bangalore',
    options: [
      { value: 'SandwichBite', label: 'Sandwich Bite' },
      { value: 'masalaBite', label: 'Masala Bite' },
      { value: 'KnightBite', label: 'Knight Bite' },
      { value: 'pancake', label: 'Pancake' }, // Added "Pancake" sub-option
    ],
  },
]

export { colourOptions, Option }

