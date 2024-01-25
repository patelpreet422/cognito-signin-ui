import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import "./styles.css";
import { fetchAuthSession } from "@aws-amplify/auth";
import awsExports from "./aws-exports";

Amplify.configure({
  aws_cognito_region: "ap-south-1", // (required) - Region where Amazon Cognito project was created
  aws_user_pools_id: "ap-south-1_h1l0zAs0z", // (optional) -  Amazon Cognito User Pool ID
  aws_user_pools_web_client_id: "prmgtpc40eb83264pcmjadnf1", // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
  aws_mandatory_sign_in: "false" // (optional) - Users are not allowed to get the aws credentials unless they are signed in
});

export function App({ signOut, user }) {
  // fetchAuthSession()
  // .then(data => console.table(data));

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer,
  }
});
