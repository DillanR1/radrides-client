const url = `https://infinite-lake-54694.herokuapp.com/api/v1/posts`;

class PostModel {
 

 

  static createPost = (post, carId) => {
    return fetch(`${url}/${carId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
    .then((response) => response.json()); 
    
} 


  
}

export default PostModel
