import { fetcchFromTMDB } from "../services/tmdb.service.js";

export async function getTrandingMovie(req, res) {
  try {
   const data = await fetcchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US")
   const randomMovies=data.results[Math.floor(Math.random() * data.results.length)];
    res.json({success:true,content:randomMovies});
  } catch (error) {
    res.status(500).json({success:false, message: "error from controller"+ error.message });
  }
}

export async function getMovieTrailers(req, res) {

}