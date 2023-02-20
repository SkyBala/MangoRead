import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import axios from "axios";




export const getAccount = createAsyncThunk(
  "getLogin",
  async (logUser, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`http://134.122.75.14:8666/api/auth/profile/?limit=-1&offset=0`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const foundAccount = response?.data.find(
        (info) => info.username === logUser
      );
      dispatch(infoAccount(foundAccount));
    } catch (error) {
      console.error(error);
    }
  }
);

export const logOutAcc = createAsyncThunk(
  "logOutAcc",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(`http://134.122.75.14:8666/api/auth/logout/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenA"))}`,
        },
        body: data,
      });
      dispatch(AccountLogOut());
    } catch (error) {
      console.error(error);
    }
  }
);

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    mode: false,
    account: false,
    user: "",
    comment: "",
    ModalTabsIndex: 0,
  },
  reducers: {
    infoModalOpen: (state) => {
      state.mode = true;
    },
    infoModalClose: (state) => {
      state.mode = false;
    },
    AccountLogOut: (state) => {
      state.account = false;
    },
    infoAccount: (state, action) => {
      state.mode = false;
      state.account = true;
      state.user = action.payload;
    },
    addComment: (state, action) => {
      state.comment = action.payload;
    },
    AuthModalTabs: (state, action) => {
      state.ModalTabsIndex = action.payload;
    },
  },
});

export const {
  infoModalOpen,
  infoModalClose,
  infoAccount,
  AccountLogOut,
  addComment,
  AuthModalTabs,
} = AuthSlice.actions;

export default AuthSlice.reducer;