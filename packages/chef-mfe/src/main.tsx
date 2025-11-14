import React from 'react';
import ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';
import './index.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the error boundary for your microfrontend here.
    return <div>Error</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
