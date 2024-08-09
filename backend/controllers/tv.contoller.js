import { fetcchFromTMDB } from "../services/tmdb.service.js";

export async function getTrandingTv(req, res) {
      try {
      const data = await fetcchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US")
      const randomMovies=data.results[Math.floor(Math.random() * data.results.length)];
        res.json({success:true,content:randomMovies});
      } catch (error) {
        res.status(500).json({success:false, message: "Tv series  from controller"+ error.message });
      }
}

export async function getTvTrailers(req, res) {

      const{id}=req.params;
      try {

        const data = await fetcchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
        res.json({success:true,trailer:data.results});
      }
      
      catch (error) {
        if(error.message.includes("404")){
          res.status(404).json({success:false, message: "Tv series not found"});
      }
      }
}

export async function getTvDetails(req, res) {
    const {id}=req.params;
      try{
        const data = await fetcchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
        res.json({success:true,content:data});

      }
      catch (error) {
        if(error.message.includes("404")){
          res.status(404).json({success:false, message: "Tv  series  not found"});
      }
      }
}

export async function getSimilarTv(req, res) {
      const {id}=req.params;
      try{
        const data = await fetcchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
        res.json({success:true,content:data.results});
      }
      catch (error) {
        if(error.message.includes("404")){
          res.status(404).json({success:false, message: "Tv series  not found"});
      }
      }
}

export async function getTvByCatogeory(req, res) {
    const {catogeory}=req.params;
    try {

      const data = await fetcchFromTMDB(`https://api.themoviedb.org/3/tv/${catogeory}?language=en-US&page=1`);
      res.json({success:true,content:data.results});
    }
    catch (error) {
      res.status(500).json({success:false, message: "error from controller"+ error.message });
    }

}