import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';


function App() {
  Amplify.configure(awsConfig);
  return (
    <div className="App">
      <Authenticator>
        <h2>Hello World!</h2>
      </Authenticator>
    </div>
  );
}

export default App;
