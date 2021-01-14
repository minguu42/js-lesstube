const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchYouTubeVideos = async (keyword) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=12&key=${YOUTUBE_API_KEY}`);
    return await response.json();
};
