<template>
  <router-link tag="div" :to="{ name: 'article-view', params:{id:this.postData.id} }">
    <div class="featured-post flex flex-row">
      <div class="post-image">
        <img :src="postData.img" />
      </div>
      <div class="post-details">
        <h2 class="post-title">{{ postData.title }}</h2>
        <h6 class="posted-date">{{ date }}</h6>
        <p class="post-preview">{{ articlePreview }}</p>
        <postAuthor :author="postData.author"></postAuthor>
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
  computed: {
    date() {
      let dateObj = new Date(Number(this.postData.timestamp));
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
    articlePreview() {
      let previewText;
      if (this.postData.article) {
        previewText = `${this.postData.article.slice(0, 250)}...`;
      }
      return previewText;
    },
  },
  components: {
    postAuthor,
  },
};
</script>

<style lang="css" scoped>
.featured-post {
  width: 100%;
  padding: 25px 0 0;
}
.featured-post .post-image {
  width: 60%;
  overflow: hidden;
}
.featured-post .post-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}
.featured-post .post-details {
  width: 40%;
  padding-left: 30px;
}
.featured-post .post-title {
  font-family: "Bree Serif", serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 40px;
  margin: 0;
  line-height: 60px;
  color: #2b2b2b;
}
.featured-post h6.posted-date {
  font-family: "Comfortaa", cursive;
  font-size: 16px;
  margin: 15px 0;
  line-height: 16px;
  font-weight: 100;
}
.featured-post .post-preview {
  font-family: "Comfortaa", cursive;
  font-size: 15px;
  font-weight: 100;
  line-height: 25px;
  margin: 15px 0;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .featured-post {
    flex-direction: column;
  }
  .post-image {
    width: 100% !important;
  }
  .post-details {
    padding: 0 !important;
    width: 95% !important;
    margin: 15px auto 0;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .featured-post {
    flex-direction: column;
  }
  .post-image {
    width: 100% !important;
  }
  .post-details {
    padding: 0 !important;
    width: 95% !important;
    margin: 15px auto 0;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: portrait) {
  .featured-post {
    flex-direction: column;
  }
  .post-image {
    width: 100% !important;
  }
  .post-details {
    padding: 0 !important;
    width: 95% !important;
    margin: 15px auto 0;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: landscape) {
  .featured-post {
    flex-direction: column;
  }
  .post-image {
    width: 100% !important;
  }
  .post-details {
    padding: 0 !important;
    width: 95% !important;
    margin: 15px auto 0;
  }
}
</style>