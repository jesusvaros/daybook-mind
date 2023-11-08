import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return <SignUp afterSignUpUrl={"/new-user"} redirectUrl={"/new-user"} />;
}

export default SignUpPage;
 