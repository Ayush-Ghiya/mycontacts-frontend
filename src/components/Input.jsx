import React from 'react'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md'

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'

  return (
    <div className="relative mb-2 mx-8 md:mx-12">
        
        <label htmlFor={id} className="leading-7 text-sm text-gray-600 capitalize dark:text-gray-400">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
  
      
        <input
          id={id}
          type={type}
          className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
          placeholder={placeholder}
          {...register(name, validation)}
        />
       
      
    </div>
  )
}
const InputError = ({ message }) => {
  return (
    <motion.p
      className="absolute -right-6 top-0 dark:bg-red-950 dark:text-red-100 flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}