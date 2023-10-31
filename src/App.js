import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openInBrowser = () => {
    // Replace 'https://example.com' with the URL you want to open in the browser
    const url = 'https://askany.com';

    // Customize the user agent (optional)
    const customUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';

    // Save the current user agent
    const originalUserAgent = window.navigator.userAgent;

    // Override the user agent
    Object.defineProperty(window.navigator, 'userAgent', {
      value: customUserAgent,
      configurable: true,
    });

    // Open the URL in the user's default browser
    window.open(url, '_blank');

    // Restore the original user agent (optional)
    Object.defineProperty(window.navigator, 'userAgent', {
      value: originalUserAgent,
      configurable: true,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={openInBrowser}>Open in Browser</button>
      </header>
    </div>
  );
}

export default App;
