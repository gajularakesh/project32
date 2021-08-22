export default function validateInfo(user) {
    let errors = {};
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!user.username) {
      errors.username = 'Email required';
    } else if (!/^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/.test(user.username)) {
      errors.email = 'Email address is invalid';
    }
    if (!user.password) {
      errors.password = 'Password is required';
    } else if (user.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    return errors;
  }