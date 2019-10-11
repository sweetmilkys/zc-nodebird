export interface PostData {
  user: {
    id: number;
    nickname: string;
  };
  content: string;
  img?: string;
}

export interface PostState {
  mainPosts: PostData[];
  imagePaths?: Array<string>;
}

export const initialState: PostState = {
  mainPosts: [
    {
      user: {
        id: 1,
        nickname: "sweetmilky"
      },
      content: "첫 번째 게시글",
      img: "https://www.danah.dev/avatar.png"
    }
  ],
  imagePaths: []
};

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

interface AddPostAction {
  type: typeof ADD_POST;
}

interface AddDummyAction {
  type: typeof ADD_DUMMY;
  data: PostData;
}

export type PostActionTypes = AddPostAction | AddDummyAction;

export const addPost = () => {
  return { type: ADD_POST };
};

export const addDummy = () => {
  return {
    type: ADD_DUMMY,
    data: {
      content: "Hello",
      user: {
        id: 1,
        nickname: "sweetmilky"
      }
    }
  };
};

export const postActions = { addPost, addDummy };

export default (state = initialState, action: PostActionTypes): PostState => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
