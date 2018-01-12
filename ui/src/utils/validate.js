/* Check if user has entered a value */
export const isEmpty = (value) => {
  if (value && value.trim()) {
    return false;
  }

  return true;
};

const empty = value => value === undefined || value === null || value === '';

// Check if user has entered a value
export function required(error, key, value, errorFieldName) {

  /* Showing error message for checkbox */
  if(Array.isArray(value) && !value.length) {
    error[key] = `You can't leave this empty`;
  } else {
      if(empty(value)) {
        error[key] = `You can't leave this empty.`;
    }
  }
}

// Email Validation
export function validateEmail(error, key, value) {
  const trimmedValue = value.trim();
  const validEmail = /^[a-z0-9!#$%&'+/=^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9]))+\.(?:[A-Z.]{2,8})\b$/i;

  if (!validEmail.test(trimmedValue)) {
    return error[key] = `Please enter a valid email address.`;
  }
}


// Phone number validation Validation
export function validatePhone(error, key, value) {
  const trimmedValue = value.trim();
  const validPhone = /^[{0-9}$&+, :;=@#|'"\\\[\]. ^()%!{}-]{6,20}$/;

  if (!validPhone.test(trimmedValue)) {
    return error[key] = `Please enter a valid Contact Number.`;
  }
}


/* dont allow *,<,>,? this special character */
export function genericValidation(error, key, value, errMsgLabel) {
  let format = /[*<>]/;
  if(format.test(value.trim())) {
    return error[key] = `Please enter a valid ${errMsgLabel}.`;
  }
}

export function minLength(error, key, value, errMsgLabel, min=1) {
 if (value.length < min) {
   return error[key] = `Please enter a valid ${errMsgLabel}.`;
 }
}

export function maxLength(error, key, value, errMsgLabel, max=100) {
 if (value.length > max) {
   return error[key] = `Please enter a valid ${errMsgLabel}.`;
 }
}

// Name Validation
export function validateName(error, key, value) {
  let format = !/^[A-Za-z.' -]+$/g;
  if(format.test(value)) {
    return error[key] = `Please enter valid name`;
  }
}