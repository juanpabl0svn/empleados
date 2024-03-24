import Header from "@/components/global/header";
import AuthProvider from "@/context/auth.context";

export default async function LayoutRoute({ children }) {
  return (
    <AuthProvider>
      <Header />
      {children};
    </AuthProvider>
  );
}
