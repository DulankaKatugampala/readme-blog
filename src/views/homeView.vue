<template>
  <div>
    <featuredPost :postData="featuredPost"></featuredPost>
    <div class="blog-posts">
      <blogPost v-for="post in blogPosts" :key="post.id" :postData="post"></blogPost>
    </div>
  </div>
</template>

<script>
import blogPost from "@/components/blogPost.vue";
import featuredPost from "@/components/featuredPost.vue";
import { mapState } from "vuex";

export default {
  name: "homeView",
  data() {
    return {
      featuredPost: this.$store.getters.fetchFeaturedPost[0],
    }
  },
  components: {
    blogPost,featuredPost
  },
  created() {
    this.$store.dispatch('fetchBlogPosts');
  },
  computed: {
    ...
    mapState(["blogPosts"])
  },
};
</script>

<style scoped>
.blog-posts {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 4% 3%;
  margin: 40px 0 50px;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .blog-posts {
    grid-template-columns: auto auto;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: portrait) {
  .blog-posts {
    grid-template-columns: auto;
    grid-gap: 1.5% 3%;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: landscape) {
  .blog-posts {
    grid-template-columns: auto auto;
  }
}
</style>