import React from 'react'
import ReactDOM from 'react-dom/client'
import './Style.css'
import App from '../../App.js'
import { ApolloProvider,ApolloClient, InMemoryCache } from '@apollo/client'
import Countries from './Flags.jsx'

const client = new ApolloClient ({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache ()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <Countries/>
  </ApolloProvider>
);
export default App;
