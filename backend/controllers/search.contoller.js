import { fetcchFromTMDB } from "../services/tmdb.service";

export async function searchPerson(req, res) {

    //fetch('https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1', options)
    const {query} = req.params;
    try
    {

        const response = await fetcchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
        
        if(response.results.length === 0)
        {
            return res.status(404).send(null);
            // return res.status(404).json({success:false, message: "No person found"});
        }

        // for getting the seach history of the user of the person
        // user data is getting from the protectRoute middleware

        await User.findByIdUpdate(req.user._id,{
            $push:{
                searchHistory: {
                    // $each: [{type: 'person', query: query}],
                    // $position: 0,
                    // $slice: 10
                    id: response.results[0].id,
                    image: response.results[0].profile_path,
                    title:response.results[0].name,
                    SearchType: 'person',
                    createdAt: new Date()

                }
            }
        }
        )

        res.status(200).json({success:true, contect: response.results});
    }
    catch (error) {
        res.status(500).json({success:false, message: "error from searchPerson"+ error.message });
    }
}


export async function searchMovie(req, res) {
    const {query} = req.params;
    try{

        const response = await fetcchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
    
        if(response.results.length === 0)
        {
            return res.status(404).send(null);
          
        }
        await User.findByIdUpdate(req.user._id,{
            $push:{
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title:response.results[0].title,
                    SearchType: 'movie',
                    createdAt: new Date()

                }
            }
        }
        )
        res.status(200).json({success:true, contect: response.results});

    }
    catch (error) {
        console.log("erros in seachmovies contoeller: ",error.message);
        res.status(500).json({success:false, message: "error from searchMovie"+ error.message });
    }
}

export async function searchTv(req, res) {
const {query} = req.params;

    try{
        const response= await fetcchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);
   
        if(response.results.length === 0)
        {
            return res.status(404).send(null);
        }
        await User.findByIdUpdate(req.user._id,{
            $push:{
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title:response.results[0].name,
                    SearchType: 'tv',
                    createdAt: new Date()

                }
            }
        }
        )
    }
    catch (error) {
        console.log("erros in seachmovies contoeller: ",error.message);
        res.status(500).json({success:false, message: "error from searchTv"+ error.message });
    }

}

export async function getSearchHistory(req, res) {
    try{
        // const user = await user.findById(req.user._id);
        res.status(200).json({success:true, content: req.user.searchHistory});
    }
    catch (error) {
        res.status(500).json({success:false, message: "error from getSearchHistory"+ error.message });
    }
}


export async function removeItemFromSearchHistory(req, res) {
    const {id} = req.params;
    try{
        await User.findByIdAndUpdate(req.user._id,{
            $pull:{
                searchHistory: {
                    _id: id
                }
            }
        })
        res.status(200).json({success:true, message: "Item removed from search history"});
    }
    catch (error) {
        res.status(500).json({success:false, message: "error from removeItemFromSearchHistory"+ error.message });
    }
}

export async function clearSearchHistory(req, res) {
}

export async function getSearchHistory(req, res) {  }
