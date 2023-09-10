/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
    name: 'username',
    label: 'username',
    type: 'text',
    id: 'username',
    placeholder: 'Enter your username ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }
  export const contact_name_validation = {
    name: 'name',
    label: 'Name',
    type: 'text',
    id: 'name',
    placeholder: 'Enter contact name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
      minLength:{
        value: 3,
        message: '3 characters min',
      }
    },
  }
  
  export const desc_validation = {
    name: 'description',
    label: 'description',
    multiline: true,
    id: 'description',
    placeholder: 'write description ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 200,
        message: '200 characters max',
      },
    },
  }
  
  export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'Enter a password ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 6,
        message: 'min 6 characters',
      },
    },
  }
  
  export const num_validation = {
    name: 'phone',
    label: 'number',
    type: 'number',
    id: 'phone',
    placeholder: 'Enter contact number...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      
    },
  }
  
  export const email_validation = {
    name: 'email',
    label: 'email',
    type: 'email',
    id: 'email',
    placeholder: 'Enter an email',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Not valid',
      },
    },
  }
  