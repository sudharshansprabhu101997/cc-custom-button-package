import React from 'react';
import { Button } from '../lib';

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <h1>Hello React</h1>
    <Button label="Primary Button" className="btn-primary" />
    <Button label="Dark Button" className="btn-dark" />
    <Button label="Light Button" className="btn-light" />
    <Button label="Success Button" className="btn-success" />
    <Button label="Danger Button" className="btn-danger" />
    <Button label="Warning Button" className="btn-warning" />
    <Button label="Info Button" className="btn-info" />
  </div>
);

export default App;
