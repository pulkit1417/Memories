import { useState } from 'react';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  User
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import {signin , signup} from '../../actions/Auth'
import { useNavigate } from 'react-router-dom';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Input = ({ 
  name, 
  label, 
  type, 
  handleChange, 
  handleShowPassword, 
  half, 
  value,
  Icon 
}) => {
  const [showText, setShowText] = useState(false);

  const toggleVisibility = () => {
    if (handleShowPassword) {
      handleShowPassword();
      setShowText(!showText);
    }
  };

  return (
    <div className={`relative ${half ? 'w-full' : 'w-full'}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={toggleVisibility}
          >
            {showText ? 
              <EyeOff className="h-5 w-5 text-gray-400" /> : 
              <Eye className="h-5 w-5 text-gray-400" />
            }
          </button>
        )}
        <input
          name={name}
          type={type === 'password' ? (showText ? 'text' : 'password') : type}
          id={name}
          onChange={handleChange}
          required
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder={label}
          value={value}
        />
      </div>
    </div>
  );
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div className="-mt-28 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
            <Lock className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 mb-2 text-center text-3xl font-extrabold text-gray-900">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
      </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="flex space-x-4">
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                  Icon={User}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                  Icon={User}
                />
              </div>
            )}

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              Icon={Mail}
            />

            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
              handleShowPassword={handleShowPassword}
              Icon={Lock}
            />

            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
                Icon={Lock}
              />
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={switchMode}
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;