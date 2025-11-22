import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations.js";

const initialState = {
  user: JSON.parse(localStorage.getItem("profile")) || null,
  isSaving: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // === REGISTER (Save data to Firestore) ===
      .addCase(registerUser.pending, (state) => {
        state.isSaving = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSaving = false;
        state.error = null;

        // Save data locally (optional)
        localStorage.setItem("profile", JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isSaving = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import {
//   getCurrentUser,
//   loginUser,
//   logoutUser,
//   registerUser,
// } from "./operations.js";

// const initialState = {
//   user: JSON.parse(localStorage.getItem("profile")) || {
//     email: null,
//     displayName: null,
//     uid: null,
//   },
//   isLoggedIn: !!localStorage.getItem("profile"),
//   isRefreshing: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // === REGISTER ===
//       .addCase(registerUser.pending, (state) => {
//         state.isRefreshing = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//         state.error = null;
//         localStorage.setItem("profile", JSON.stringify(action.payload));
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isRefreshing = false;
//         state.error = action.payload;
//       })

//       // === LOGIN ===
//       .addCase(loginUser.pending, (state) => {
//         state.isRefreshing = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.user = {
//           email: action.payload.email,
//           displayName: action.payload.displayName,
//           uid: action.payload.uid,
//         };
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//         state.error = null;
//         localStorage.setItem("profile", JSON.stringify(state.user));
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isRefreshing = false;
//         state.error = action.payload;
//       })

//       // === LOGOUT ===
//       .addCase(logoutUser.pending, (state) => {
//         state.isRefreshing = true;
//         state.error = null;
//       })
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.user = { email: null, displayName: null, uid: null };
//         state.isLoggedIn = false;
//         state.isRefreshing = false;
//         state.error = null;
//         localStorage.removeItem("profile");
//       })
//       .addCase(logoutUser.rejected, (state, action) => {
//         state.isRefreshing = false;
//         state.error = action.payload;
//       })

//       // === GET CURRENT USER ===
//       .addCase(getCurrentUser.pending, (state) => {
//         state.isRefreshing = true;
//         state.error = null;
//       })
//       .addCase(getCurrentUser.fulfilled, (state, action) => {
//         state.user = action.payload
//           ? {
//               email: action.payload.email,
//               displayName: action.payload.displayName,
//               uid: action.payload.uid,
//             }
//           : { email: null, displayName: null, uid: null };
//         state.isLoggedIn = !!action.payload;
//         state.isRefreshing = false;
//         state.error = null;
//       })
//       .addCase(getCurrentUser.rejected, (state, action) => {
//         state.isRefreshing = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
