import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('/serviceworker.js').then(() => {
        navigator.serviceWorker.ready.then(registration => {
          registration.active.postMessage({ action: 'start-timer' });

          navigator.serviceWorker.addEventListener('message', event => {
            if (event.data.action === 'open-timer-window') {
              window.timerWindow = window.open('/timer.html', 'Timer', 'width=600,height=600');
              window.timerWindow.onbeforeunload = () => {
                const timerElement = window.timerWindow.document.getElementById('timer-value');
                if (timerElement) {
                  const timerValue = timerElement.innerText;
                  localStorage.setItem('timerValue', timerValue);
                }
              };
              navigate('/form');
            }
          });
        });
      });
    }
  }, [navigate]);

  return <div>A New Timer!</div>;
};

export default Home;
