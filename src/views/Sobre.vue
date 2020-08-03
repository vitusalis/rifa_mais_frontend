<template>
  <div class="about">
    <h1>Quem somos nós</h1>
    <h5 class="text-secondary">bla bla bla bla bla</h5>
  </div>
</template>

<script>
export default {
  name: "Sobre"
};
</script>

<style lang="scss" scoped>
@import "../../public/css/variables.scss";
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 769px) {
}

.about {
  text-align: center;
  min-height: 80vh;
  margin: $section-margin 10px;
}
</style>