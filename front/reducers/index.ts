import { combineReducers } from "redux";
import user, { UserState } from "./user";
import post, { PostState } from "./post";

export interface StoreState {
  user: UserState;
  post: PostState;
}

const rootReducer = combineReducers<StoreState>({
  user,
  post
});

export default rootReducer;
