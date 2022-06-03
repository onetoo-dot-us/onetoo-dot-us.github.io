import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function HomePage() {
  return (
    <div>
      <header>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand>
              <h1>Onetoo</h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
        <h2>About Onetoo</h2>
        <aside>Open. Source. Creative. Systems.</aside>
        <h2>Creative Systems</h2>
        <aside>Produce. Reduce. Reuse. Repurpose. Recycle. Consume.</aside>
        <h3>Creative Systems: Audio</h3>
        <ul>
          <li>Produce single or many audio tracks.</li>
          <li>Reduce audio tracks to single audio track.</li>
          <li>Reuse audio track to produce new audio tracks.</li>
          <li>
            Repurpose new audio tracks by reducing to new single audio track.
          </li>
          <li>Recycle new single audio track by adding support for looping.</li>
          <li>Consume single or many audio tracks.</li>
        </ul>
      </main>
      {/**
       * TODO: Create Pipeline component, which is a visual representation of the audio creative system and its works-in-progress using:
       *   - Google Drive links to access audio tracks.
       *   - React components to render audio player per audio track.
       *   - cipher--still-talkin-bout-me to create proof-of-concept.
       */}
    </div>
  );
}
