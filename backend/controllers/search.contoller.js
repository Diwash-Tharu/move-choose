import { fetcchFromTMDB } from "../services/tmdb.service";

export async function searchPerson(req, res) {

    //fetch('https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1', options)
    const {query} = req.params;
    try
    {
        const response = await fetcchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
        
        
    }
    catch (error) {
        res.status(500).json({success:false, message: "error from searchPerson"+ error.message });
    }
}
export async function searchMovie(req, res) {


}export async function searchTv(req, res) {


}
