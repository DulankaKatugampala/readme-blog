<template>
  <div>
    <form @submit.prevent="createNewPost">
      <div class="field">
        <label>Author name</label>
        <input type="text" v-model="this.postData.author" />
      </div>

      <div class="field">
        <label>Title</label>
        <input type="text" v-model="this.postData.title" />
      </div>

      <div class="field">
        <label>Post image</label>
        <input type="text" v-model="this.postData.img" />
      </div>

      <div class="field">
        <label>Article</label>
        <textarea v-model="this.postData.article"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addNewArticle",
  data() {
    return {
      postData: this.createNewPostObject,
    };
  },
  methods: {
    createNewPostObject() {
      return {
        id: String(Math.floor(Math.random() * 10000000)),
        title: "",
        featured: "false",
        img: "http://placeimg.com/640/360/any",
        article: "",
        timestamp: String(new Date().getTime()),
        author: {
          name: "",
        },
      };
    },
    createNewPost() {
      this.$store.dispatch("createNewBlogPost", this.postData).then(() => {
        this.$router.push({
          name: "article-view",
          params: { id: this.postData.id },
        });
        this.postData = this.createNewPostObject();
      });
    },
  },
  created(){
    this.postData = this.createNewPostObject();
  }
};
</script>

<style scoped>
</style>