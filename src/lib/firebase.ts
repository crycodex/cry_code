import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function isFirebaseConfigValid(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.projectId &&
      firebaseConfig.appId
  );
}

let db: Firestore | null = null;

if (isFirebaseConfigValid()) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    if (typeof window !== "undefined") {
      getAnalytics(app);
    }
  } catch {
    db = null;
  }
}

export { db };
export const isFirebaseAvailable = (): boolean => db !== null;

export const VISITAS_DOC_ID =
  import.meta.env.PUBLIC_FIREBASE_VISITAS_DOC_ID ?? "JkHSLw8wOc5J7QRrnKS3";
export const VISITAS_COLLECTION =
  import.meta.env.PUBLIC_FIREBASE_VISITAS_COLLECTION ?? "visitas";
