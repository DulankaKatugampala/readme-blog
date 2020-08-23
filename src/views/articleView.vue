<template>
  <div class="post">
    <div class="post-image">
      <img :src="blogImg" />
    </div>
    <h2 class="post-title">{{ blogPostData.title }}</h2>
    <h6 class="posted-date">{{ date }}</h6>
    <postAuthor isCenter="true" :authorName="blogPostData.author.name"></postAuthor>
    <div class="post-preview" v-html="blogPostData.article"></div>
  </div>
</template>

<script>
import postAuthor from "@/components/postAuthor.vue";
import blogService from "@/services/blogService.js";

export default {
  name: "articleView",
  data() {
    return {
      blogPostData: [],
    };
  },
  props: {
    id: {
        type: String,
        required: true
    }
  },
  components: {
    postAuthor,
  },
  computed: {
    date() {
      let dateObj = new Date(Number(this.blogPostData.timestamp));
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${dateObj.getDate()} ${
        months[dateObj.getMonth()]
      } ${dateObj.getFullYear()}`;
    },
    blogImg(){
      return 'http://placeimg.com/640/360/any';
    }
  },
  created() {
      blogService.getBlogPost(this.id)
      .then((response) => {
          this.blogPostData = response.data;
          console.log(this.blogPostData);
      }).error((error) => {
          console.log(error);
      })
  },
};
</script>

<style scoped>
.post-image img {
  width: 100%;
  height: auto;
}
.post .post-image img {
  border-radius: 0 0 30px 30px;
}
.post .post-title {
  margin: 30px 0;
  text-align: center;
  font-family: "Bree Serif", serif;
  font-size: 35px;
  line-height: 40px;
  text-transform: uppercase;
}
.post .posted-date {
  text-align: center;
  font-family: "Comfortaa", cursive;
  margin: 13px 0;
  font-size: 13px;
  line-height: 150%;
}
.post .post-preview {
  margin: 30px 0 15px 0;
  font-size: 18px;
  line-height: 30px;
  font-family: "Comfortaa", cursive;
  font-weight: 300;
}

@media screen and (max-width: 1024px) {
  .post-preview {
    text-align: center !important;
  }
}
</style>