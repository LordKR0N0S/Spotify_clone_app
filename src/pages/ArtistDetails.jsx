import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCoreArtists';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) { return <Loader title="Loading artist details" />; }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
    </div>
  );
};

export default ArtistDetails;
