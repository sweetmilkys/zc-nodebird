const dummyUser = {
  nickName: "sweetmilky",
  Post: [],
  Followings: [],
  Followers: []
};

export interface UserData {
  nickName: string;
  Post: Array<object>;
  Followings: Array<string>;
  Followers: Array<string>;
}

export interface UserState {
  isLoggedIn: boolean;
  user: null | UserData;
}

export const initialState: UserState = {
  isLoggedIn: false,
  user: null
};

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

interface LogInAction {
  type: typeof LOG_IN;
  data: UserData;
}

interface LogOutAction {
  type: typeof LOG_OUT;
}

export type UserActionTypes = LogInAction | LogOutAction;

export const login = (data: UserData) => {
  return {
    type: LOG_IN,
    data
  };
};

export const logout = () => {
  return { type: LOG_OUT };
};

export const userActions = { login, logout };

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
