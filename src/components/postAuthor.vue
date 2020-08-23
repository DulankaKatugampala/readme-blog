<template>
  <div class="flex flex-align-center flex-row post-author" :class="{'flex-justify-center' : isCenter}">
    <div class="author-image">
      <img :src="authorImg" />
    </div>
    <div class="author-name">{{ authorName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      default: "Unknown"
    },
    authorImg: {
      type: String,
      default: require('@/assets/profile_image.png')
    },
    isCenter: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="css" scoped>
.author-image img {
  width: 35px;
  height: auto;
}
.author-name {
  margin-left: 13px;
  font-family: "Comfortaa", cursive;
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
}
.author-image {
  height: auto;
  display: inherit;
}
</style>