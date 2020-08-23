<template>
  <router-link tag="div" :to="{ name: 'article-view', params:{id:this.postData.id} }">
    <div class="blog-post flex flex-column">
    <div class="post-image">
      <img :src="postData.img" />
    </div>
    <div class="post-details">
      <h2 class="post-title">{{ postData.title }}</h2>
      <h6 class="posted-date">{{ date }}</h6>
      <p class="post-preview">{{ articlePreview }}</p>
      <postAuthor :authorName="postData.author.name" :authorImg="postData.author.img"></postAuthor>
    </div>
  </div>
  </router-link>
</template>

<script>
import postAuthor from "@/components/postAuthor.vue";

export default {
  props: {
    postData: {
      type: Object,
    },
  },
  components: {
    postAuthor,
  },
  computed: {
    date() {
      let dateObj = new Date(Number(this.postData.timestamp));
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
    },
    articlePreview(){
        return `${this.postData.article.slice(0,150)}...`;
    }
  },
};
</script>

<style lang="css" scoped>
.post-image img {
  width: 100%;
  height: auto;
  border-radius: 30px;
}
.post-details {
  padding: 8px;
}
.post-title {
  font-family: "Bree Serif", serif;
  font-size: 35px;
  margin: 5px 0;
  line-height: 40px;
  text-transform: uppercase;
}
.posted-date {
  font-family: "Comfortaa", cursive;
  margin: 13px 0;
  font-size: 13px;
  line-height: 150%;
}
.post-preview {
  font-size: 14px;
  font-family: "Comfortaa", cursive;
  line-height: 150%;
  font-weight: 300;
  margin: 0 0 15px 0;
}
</style>