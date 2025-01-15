import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import '../src/components/AdvanceSearch/login.css'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div>
            <Head title="Log in" />

            {/* {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}

             <div className="login-container">
      <div className="login-card">
        {/* Image Section */}
        <div
          className="login-image"
          style={{
            backgroundImage: `url('http://www.gerardgorman.com/uploads/1/7/8/0/17808/1a_orig.jpeg')`,
          }}
        ></div>

        {/* Login Form Section */}
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          <form className="login-form"  onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
                                <input
                                    
                        value={data.email}
                                    type="email"
                                      onChange={(e) => setData('email', e.target.value)}
                id="email"
                placeholder="username@gmail.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                                    type="password"
                                     value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                id="password"
                placeholder="Password"
                className="form-input"
                
                
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
                                </label>
                                {canResetPassword && (
                        <Link
                            href={route('password.request')}
                           className="forgot-password"
                                    >
                            Forgot your password?
                        </Link>
                    )}
            </div>
            <button className="login-button">Sign In</button>
            <div className="login-divider">or continue with</div>
            <div className="social-login">
              <button className="social-button">
                <img
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="Google"
                />
              </button>
              <button className="social-button">
                <img
                  src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                  alt="Facebook"
                />
              </button>
              <button className="social-button">
                <img
                  src="https://img.icons8.com/?size=100&id=60688&format=png&color=000000"
                  alt="Email"
                />
              </button>
            </div>
          </form>
          <p className="login-footer">
            By proceeding, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div> 


        </div>
    );
}
