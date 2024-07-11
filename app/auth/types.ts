// LOGIN ACCOUNT

export type LoginAdminRequest = {
  email: string;
  password: string;
};

export type LoginAdminResponse = {
  token: string;
  isSuccess: boolean;
};

// SEND OTP

export type SendOTPRequest = {
  email: string
}

export type SendOTPResponse = {
  message: string;
  isSuccess: boolean;
}

// VERIFY OTP

export type VerifyOTPRequest = {
  email: string;
  otp: string;
}

export type VerifyOTPResponse = {
  message: string;
  isSuccess: boolean;
}

//