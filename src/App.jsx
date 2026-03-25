import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import Tasks from './pages/Tasks';
import Home from './pages/Home';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { App as CapacitorApp } from '@capacitor/app';
import { useEffect } from 'react';

function App() {
  const isNative = Capacitor.isNativePlatform();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isNative) {
      StatusBar.setBackgroundColor({ color: '#000000' });
      StatusBar.setStyle({ style: Style.Dark });
    }
  }, [isNative]);

  useEffect(() => {
    if (!isNative) return;

    const listener = CapacitorApp.addListener('backButton', () => {
      if (location.pathname === '/') {
        CapacitorApp.exitApp();
      } else {
        navigate(-1);
      }
    });

    return () => {
      listener.then((handle) => handle.remove());
    };
  }, [isNative, location.pathname, navigate]);

  return (
    <div style={{ paddingTop: isNative ? '29px' : '0px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;