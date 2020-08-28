const url = `http://localhost:4000/api/v1/posts`;

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
