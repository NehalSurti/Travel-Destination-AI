import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: 'CODE',
      verificationEmailSubject: 'Welcome to the Travel Destination Generator!',
      verificationEmailBody: (createCode) =>
        `Your verification code is: ${createCode()}. Please enter this code to verify your email address and complete your registration.`,
    }
  },
});
