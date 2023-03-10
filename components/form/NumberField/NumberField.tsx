import { useContext } from 'react'

// * context * //
import { FormContext } from '../FormContainer'

// * utils & types * //
import { FormContextType, FormDataType, FormErrorsType } from '../types'
import { renderError } from '../utils'

import styles from './NumberField.module.scss'

interface Props {
  name: string
  label: string
  placeholder: string
  min: string
  max?: string
}

export default function NumberField({
  name,
  label,
  placeholder,
  min,
  max,
}: Props) {
  const {
    handleInputChange,
    activeFormData: { data, errors },
    focusedField
  } = useContext(FormContext) as FormContextType

  return (
    <div className={styles.container}>
      <label htmlFor={`${name}-input`}>{label}</label>
      <input
        id={name}
        name={name}
        type={'number'}
        min={min}
        max={max ?? undefined}
        placeholder={placeholder}
        onChange={handleInputChange}
        autoFocus={focusedField === name}
        value={data[name as keyof FormDataType]}
        className={
          errors[name as keyof FormErrorsType] ? styles.errorInput : ''
        }
      />
      <p className={styles.errorMessage}>
        {renderError('number', name, data, errors)}
      </p>
    </div>
  )
}
