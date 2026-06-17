import { useState } from 'react';
import PasswordGate from './PasswordGate';
import Hero from './Hero';
import Gallery from './Gallery';
import Closing from './Closing';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <div className="grain" />
      {!unlocked && <PasswordGate onUnlock={() => setUnlocked(true)} />}
      {unlocked && (
        <main>
          <Hero />
          {/* <Gallery /> */}
          <Closing />
        </main>
      )}
    </>
  );
}
