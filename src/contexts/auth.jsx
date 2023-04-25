import { useContext, createContext } from "react";
// import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);

  const signIn = async (email, password) => {
    try {
      // made a request to the api to get the user
      setUser(user);
      setSigned(true);
      await AsyncStorage.setItem("@token", 'test');
    } catch (error) {
      console.log(error);
    }
  }

  const checkSigned = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        // made a request to the api to check if the token is valid
        setSigned(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkSigned();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,
        // signUp,
        // getUser,
        // signOut,
        // setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
