import Button from "../components/elements/Button";
import Input from "../components/elements/Input";

const AuthPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex gap-6 p-5 bg-milk md:shadow-md md:shadow-crow/30">
                <div className="hidden md:w-xs md:block">
                    <img src="/img/auth/auth-image.jpg" alt="auth image" />
                </div>
                <div className="w-full max-w-xs">
                    <h1 className="font-semibold text-3xl mb-2">
                        Furni<span className="text-cerulean">Pay</span>.
                    </h1>
                    <p>
                        Welcome, please sign in to see our furniture collections
                    </p>

                    <div className="mt-5">
                        <Button variantButton="flex justify-center items-center gap-3 text-milk w-full h-9 mb-3 bg-cerulean rounded-sm cursor-pointer">
                            <img src="/icons/google.svg" alt="" className="w-5 bg-milk rounded-full" />
                            Sign in with Google
                        </Button>
                        <Button variantButton="flex justify-center items-center gap-3 text-milk w-full h-9 mb-3 bg-cerulean rounded-sm cursor-pointer">
                            <img src="/icons/facebook.svg" alt="" className="w-[1.4rem] p-[2px] bg-milk rounded-full" />
                            Sign in with Facebook
                        </Button>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div className="flex-shrink w-full h-px bg-crow"></div>
                        <span className="">Or</span>
                        <div className="flex-shrink w-full h-px bg-crow"></div>
                    </div>

                    <form className="mt-4">
                        <Input type="email" name="email"
                            id="email" placeholder="Email"
                            variantInput="w-full h-8 px-3 mb-3 border border-crow/50 rounded-sm"
                        />
                        <Input type="password" name="password"
                            id="password" placeholder="Password"
                            variantInput="w-full h-8 px-3 border border-crow/50 rounded-sm"
                        />
                        <Button variantButton="text-milk w-full h-9 mt-4 bg-cerulean rounded-sm cursor-pointer" >
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;