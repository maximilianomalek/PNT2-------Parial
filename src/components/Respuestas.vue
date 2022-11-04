<template >

  <section class="src-components-respuestas">
    <div class="jumbotron">
      <h2>Respuestas</h2>

      <div class="table-responsive">
        <table class="table">
          <tr :style="{color: colorDefecto}">
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(respuesta, index) in respuestas" :key="index" :style="{color: colorDefecto}">
            <td>{{ respuesta.numero }}</td>
            <td>{{respuesta.respuestas.toString()}}</td>
          </tr>
        </table>
      </div>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas:[
        {numero:1,respuestas:["b","d"]},
        {numero:2,respuestas:["c"]},
        {numero:3,respuestas:["b","e"]},
        ],
        colorDefecto:"#ffffff"
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
    .jumbotron {
    background-color: rgb(52, 49, 52);
    color: white;
  }
</style>
