import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { getUserMetadata } from "../../utils/getUsersMetaData.js";

// Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    const {
      email,
      password,
      displayName,
      country,
      dialect,
      gender,
      // brands,
      cause,
      thoughts,
      howDidYouHear,
      wantAmbassador,
      wantCollaborate,
      collabNote,
    } = userData;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName });

      const metadata = await getUserMetadata();

      const userDoc = {
        uid: user.uid,
        email: user.email,
        displayName,
        country: country || "",
        dialect: dialect || "",
        gender: gender || "",
        // brands: brands || [],
        cause: cause || "",
        thoughts: thoughts || "",
        howDidYouHear: howDidYouHear || "",
        wantAmbassador: !!wantAmbassador,
        wantCollaborate: !!wantCollaborate,
        collabNote: wantCollaborate ? collabNote || "" : "",
        createdAt: new Date().toISOString(),
        source: metadata.source,
        countryDetected: metadata.country || "",
        city: metadata.city || "",
        device: metadata.platform || "",
        browserLanguage: metadata.language || "",
      };

      await setDoc(doc(db, "users", user.uid), userDoc);

      return { ...userDoc };
    } catch (error) {
      console.error("Register error:", error);
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Try signing in!");
      } else {
        toast.error("Registration failed. Please try again.");
      }
      return rejectWithValue(error.message);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem(
        "profile",
        JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
        })
      );
      toast.success("Login successful! 👋");
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      };
    } catch (error) {
      toast.error("Login failed. ");
      return rejectWithValue(error.message);
    }
  }
);

// Logout
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      localStorage.removeItem("profile");
      toast.success("You have logged out. See you soon! 👋");
      return true;
    } catch (error) {
      toast.error("Logout failed. Try again.");
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            unsubscribe();
            if (user) {
              resolve({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
              });
            } else {
              resolve(null);
            }
          },
          (error) => reject(rejectWithValue(error.message))
        );
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
