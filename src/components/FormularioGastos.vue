<template>
  <section class="src-components-formulario-gastos">
    <div class="jumbotron">
      <h2>Gastos</h2>

      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- ---------------------------------- -->
        <!--            CAMPO NOMBRE            -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            autocomplete="off"
            v-model="formData.nombre"
            name="nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />
          <!-- mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo debe menos de {{ nombreMaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no permite espacios intermedios
            </div>
          </field-messages>
        </validate>

        <br />

        <!-- ---------------------------------- -->
        <!--            CAMPO Descripción            -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="descripcion">Descripción</label>
          <input
            type="text"
            id="descripcion"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.descripcion"
            name="descripcion"
            required            
          />
          <!-- mensajes de validación -->
          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
          </field-messages>
        </validate>

        <br />


        <!-- ---------------------------------- -->
        <!--            CAMPO Importe            -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="importe">Importe</label>
          <input
            type="number"
            id="importe"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.importe"
            name="importe"
            required
            no-negativo
          />
          <!-- mensajes de validación -->
          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="no-negativo" class="alert alert-danger mt-1">
              Este campo no permite negativo
            </div>
          </field-messages>
        </validate>

        <button class="btn btn-success my-3" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>
      <hr />


        <!-- ---------------------------------- -->
        <!--            CAMPO Presupuesto            -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="presupuesto">Presupuesto</label>
          <input type="number" id="presupuesto" class="form-control" autocomplete="off" v-model="presupuesto" name="presupuesto"/>
        </validate>

        <br />


      <div class="table-responsive">
        <table class="table">
          <tr :style="{color: colorDefecto}">
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Importe</th>
            <th>Fecha de gasto</th>
          </tr>
          <tr v-for="(gasto, index) in gastos" :key="index" :style="{color: colorDefecto}">
            <td>{{ gasto.nombre }}</td>
            <td>{{ gasto.descripcion }}</td>
            <td>${{ gasto.importe }}</td>
            <td>{{ gasto.fechaCreacion }}</td>
          </tr>
          <tr :style="{color: calcularSaldo().color}">
            <td></td>
            <td>Gasto Total</td>
            <td>${{ this.gastoTotal }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script >
export default {
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      nombreMinLength: 3,
      nombreMaxLength: 15,
      gastos: [],
      gastoTotal:0,
      presupuesto: "",
      colorDefecto : "#ffffff",
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        descripcion: null,
        importe: null,        
        fechaCreacion: null,
      };
    },
    enviar() {
      let gasto = { ...this.formData };
      gasto.fechaCreacion = new Date().toLocaleString();
      this.gastoTotal = this.gastoTotal+ Number(gasto.importe);
      this.gastos.push(gasto);
      this.formData = this.getInitialData();
      this.formState._reset();
    },
    calcularSaldo() {      
      let color = "#080";
      if (this.presupuesto == "" || this.presupuesto>=this.gastoTotal) {     
      if (this.gastoTotal <= 1000) color = "#00d604";
      if (this.gastoTotal > 1000 && this.gastoTotal<=5000) color = "#f900c2";
      if (this.gastoTotal > 5000) color = "#f88e00";
    }
    
    else {
      color = "red"
    }
      return {        
        color,
      };
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(52, 49, 52);
  color: white;
}
</style>
