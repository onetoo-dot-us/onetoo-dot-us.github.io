import './AudioPlayer.css';

interface IAudioPlayerProps {
  title: string;
  src: string;
}

const AudioPlayer = ({ title, src }: IAudioPlayerProps) => {
  return (
    <>
      <iframe
        className='audio-player--iframe'
        title={title}
        src={src}
        frameBorder='0'
      ></iframe>
    </>
  );
};

export default AudioPlayer;
