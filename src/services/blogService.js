import axios from "axios";

const apiCall = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getBlogPosts() {
    return apiCall.get("/blogposts");
  },
  getBlogPost(id) {
    return apiCall.get("/blogposts/" + id);
  },
  getFeaturedPost() {
    return apiCall.get("/blogposts?featured=true");
  },
  postBlogPost(event) {
    return apiCall.post("/blogposts/", event);
  },
};
