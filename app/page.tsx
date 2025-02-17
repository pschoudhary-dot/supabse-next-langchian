// app/page.tsx
import AuthForm from './components/AuthForm';
import UploadDocument from './components/UploadDocument';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to the App</h1>
      {/* Render the auth form */}
      <AuthForm />
      {/* Render the upload only after authentication; for simplicity, it's rendered here */}
      <UploadDocument />
    </div>
  );
}
