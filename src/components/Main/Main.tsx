import { ArrowButtons } from "../Header/ArrowButtons";
import { Profile } from "../Header/Profile";
import { PlaylistLink } from "./PlaylistLink";
import { Recommended } from "./Recommended";

const playlistArea = [
  {
    playlistImage: "/LikedSongs.png",
    playlistName: "Liked Soungs",
    key: "playlist",
  },
  {
    playlistImage: "/AlbumCapa.png",
    playlistName: "Neffex Playlist",
    key: "playlist",
  },
  {
    playlistImage: "/AlbumElectronic.png",
    playlistName: "Dance / Electronic Mix",
    key: "playlist",
  },
  {
    playlistImage: "/CapaImage.png",
    playlistName: "K/ DA",
    key: "playlist",
  },
  {
    playlistImage: "/AlbumElectronic.png",
    playlistName: "Dance / Electronic Mix",
    key: "playlist",
  },
  {
    playlistImage: "/LikedSongs.png",
    playlistName: "Liked Soungs",
    key: "playlist",
  },
];

const recommendedArea = [
  {
    recommendedImage: "/WeeklyMotivation.png",
    recommendedStrong: "Weekly Motivation",
    recommendedSpan: "Ben Ina Scott",
  },
  {
    recommendedImage: "/MeditationSelf.png",
    recommendedStrong: "Meditation Self",
    recommendedSpan: "Ibn Hussain Aleen",
  },
  {
    recommendedImage: "/WordsBeyond.png",
    recommendedStrong: "Weekly Motivation",
    recommendedSpan: "Samuel Scott",
  },
  {
    recommendedImage: "/TheAlexa.png",
    recommendedStrong: "The Alexa Show",
    recommendedSpan: "Adriana Tom",
  },
  {
    recommendedImage: "/TheStories.png",
    recommendedStrong: "The Stories of Ma...",
    recommendedSpan: "Lexus",
  },
];

export function Main() {
  return (
    <div className="flex-1 p-6">
      <div className="flex items-center gap-3 justify-between">
        <ArrowButtons />
        <Profile />
      </div>
      
      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {playlistArea.map((item) => {
          return (
            <PlaylistLink
              image={item.playlistImage}
              strong={item.playlistName}
              key={item.key}
            />
          );
        })}
      </div>

      <h2 className="font-semibold text-2xl mt-10">Shows you might like</h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        {recommendedArea.map((item) => {
          return (
            <Recommended
              image={item.recommendedImage}
              strong={item.recommendedStrong}
              span={item.recommendedSpan}
              key={item.recommendedImage}
            />
          );
        })}
      </div>
    </div>
  );
}
