import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="song_img"
        src={
          track?.images?.coverart
            ? track?.images?.coverart
            : 'https://thumbs.dreamstime.com/b/music-note-isolated-png-high-quality-illustration-sign-transparent-background-graphic-element-your-related-design-file-105223240.jpg'
        }
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
