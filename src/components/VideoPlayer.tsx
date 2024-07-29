import { useParams } from 'react-router-dom';
import { videos } from '../data/home';
import { VideoGridItem } from './VideoGridItem';

const VideoPlayer = () => {
	const { id } = useParams<{ id: string }>();
  	// Find the video data by ID
  	const video = videos.find(video => video.id === id);
  	const relatedVideos = videos.filter(video => video.id !== id);

  	if (!video) return <div>Video not found</div>;

  	return (
    	<div className="flex max-w-screen-xl mx-auto p-4">
    		<div className="w-2/3 pr-4">
		      	<video controls autoPlay className="w-full rounded-lg shadow-lg">
		        	<source src={video.videoUrl} type="video/mp4" />
		      	</video>
	      		<h1 className="style-scope ytd-watch-metadata">{video.title}</h1>
	      		<p className="mt-2 text-gray-600">{video.views} views • {video.postedAt.toLocaleDateString()}</p>
    		</div>
    		<div className="w-1/3 pl-4">
		        <h2 className="mb-4 font-bold text-lg">Related Videos</h2>
		        <div className="space-y-4">
		         	{relatedVideos.map(relatedVideo => (
		            <div key={relatedVideo.id} className="flex items-center space-x-4">
		              	<img src={relatedVideo.thumbnailUrl} alt={relatedVideo.title} className="w-24 h-16 object-cover rounded-lg" />
		              	<div>
		                	<p className="font-semibold">{relatedVideo.title}</p>
		                	<p className="text-sm text-gray-600">{relatedVideo.views} views</p>
		              	</div>
		            </div>
		          	))}
		        </div>
		    </div>
    	</div>
  	);
};

export default VideoPlayer;