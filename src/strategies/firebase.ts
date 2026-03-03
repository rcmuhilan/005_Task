import admin from "firebase-admin";
import serviceAccount from "../muhilan-firebase.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;
