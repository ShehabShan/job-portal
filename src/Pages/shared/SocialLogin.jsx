import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { singInWIthGoogle } = useContext(AuthContext);

  const handleGoogleSingIn = () => {
    singInWIthGoogle();
  };

  return (
    <div className="mb-3">
      <button
        onClick={handleGoogleSingIn}
        className="btn px-12 bg-blue-500 text-white"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
