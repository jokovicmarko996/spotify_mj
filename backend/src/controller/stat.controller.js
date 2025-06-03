import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";

// only admin can get those stats
export const getStats = async (req, res, next) => {
  try {
    // losija opija za fetch jednog po jednog
    // const totalSongs = await Song.countDocuments();
    // const totalUsers= await User.countDocuments();
    // const totalAlbums = await Album.countDocuments();

    // Using Promise.all to run multiple queries concurrently and wait for all of them to complete before sending the response.
    const [totalSongs, totalAlbums, totalUsers, uniqueArtists] =
      await Promise.all([
        Song.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),

				// aggregation to get unique artists from both songs and albums
				// $unionWith is used to combine the results of two collections (songs and albums) and then group by artist
        Song.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },
          {
            $group: {
              _id: "$artist",
            },
          },
          {
            $count: "count",
          },
        ]),
      ]);

    res.status(200).json({
      totalAlbums,
      totalSongs,
      totalUsers,
      totalArtists: uniqueArtists[0]?.count || 0,
    });
  } catch (error) {
    next(error);
  }
};
