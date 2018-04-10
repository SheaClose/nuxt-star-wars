<template>
  <section class="container">
    <div>
      <h1>
        The following is a series of tests using custom filters.
      </h1>
      <h3>
        <p>Text without filter: {{ test }}</p>
        <p>UpperCase first letter: {{ test | upperCase}}</p>
        <p>LowerCase first letter: {{ test | lowerCase}}</p>
        <p>UpperCase All: {{ test | upperCaseAll }}</p>
        <p>To CamelCase: {{ test | toCamelCase }}</p>
        
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      test: "LeEt SpEaK AlL ThE ThInGs!"
    };
  },
  components: {}
};
</script>

<style >
.container {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  margin-bottom: 40px;
}

p {
  margin: 10px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
