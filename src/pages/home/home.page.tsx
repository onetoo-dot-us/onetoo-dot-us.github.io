import Nav from '../../components/nav/nav.component';
import React, { useState } from 'react';
import AudioList from '../../features/stream-audio/audio-list/audio-list';
import VideoList from '../../features/stream-video/video-list/video-list';
import TextList from '../../features/view-text/text-list/text-list';

export default function HomePage() {
  const [showsAudioList, setShowsAudioList] = useState(false);
  const [showsTextList, setShowsTextList] = useState(false);
  const [showsVideoList, setShowsVideoList] = useState(false);

  const smallNav = (
    <ul>
      <li onClick={handleClickAudio}>Audio</li>
      <li onClick={handleClickText}>Text</li>
      <li onClick={handleClickVideo}>Video</li>
    </ul>
  );

  function handleClickAudio() {
    setShowsAudioList(!showsAudioList);

    if (showsAudioList) {
      setShowsTextList(false);
      setShowsVideoList(false);
    }
  }

  function handleClickText() {
    setShowsTextList(!showsTextList);

    if (showsTextList) {
      setShowsAudioList(false);
      setShowsVideoList(false);
    }
  }

  function handleClickVideo() {
    setShowsVideoList(!showsVideoList);

    if (showsVideoList) {
      setShowsAudioList(false);
      setShowsTextList(false);
    }
  }

  return (
    <>
      <Nav smallNav={smallNav} />
      <main>
        {showsAudioList && <AudioList></AudioList>}
        {showsTextList && <TextList></TextList>}
        {showsVideoList && <VideoList></VideoList>}
      </main>
    </>
  );
}
