module.exports = {
  friendlyName: 'Sign in user',
  description: 'Sign in user',
  inputs: {
    email: {
      description: 'Users email related to its account',
      type: 'string',
      required: true
    },
    password: {
      description: 'Users password',
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'User signed in successfully'
    },
    invalidCredentials: {
      description: 'Invalid user credentials',
      responseType: 'badRequest'
    }
  },
  fn: async function (inputs, exits) {
    if (inputs.email === 'sebastian.montero@gmail.com') {
      return exits.success({ name: 'Sebastian' });
    } else {
      return exits.invalidCredentials({ msg: 'Email or password are invalid' });
    }
  }
};
