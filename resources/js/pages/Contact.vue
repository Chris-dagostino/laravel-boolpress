<template>
  <div class="container" >
    <div class="row" >
      <div class="col-12" >

        <form @submit.prevent="sendForm">

          <div v-if="success" class="alert alert-success">
              Email inviata con successo!!
          </div>

          <div class="form-group">
              <label for="name">Come ti chiami?</label>
              <input type="text" class="form-control" :class="{'is-invalid':errors.name}" id="name" name="name" v-model="name">
              <p v-for="(error, index) in errors.name" :key="'error_name'+index" class="invalid-feedback">
                  {{error}}
              </p>
          </div>

          <div class="form-group">
              <label for="email">Inserisci la tua email</label>
              <input type="email" class="form-control" :class="{'is-invalid':errors.email}" id="email" name="email" v-model="email">
              <p v-for="(error, index) in errors.email" :key="'error_email'+index" class="invalid-feedback">
                  {{error}}
              </p>
          </div>

          <div class="form-group">
              <label for="message">Cosa vuoi dirci?</label>
              <textarea class="form-control" :class="{'is-invalid':errors.message}" id="message" rows="10" name="message" v-model="message"></textarea>
              <p v-for="(error, index) in errors.message" :key="'error_message'+index" class="invalid-feedback">
                  {{error}}
              </p>
          </div>

          <button type="submit" class="btn btn-primary"  >{{sendingInProgress?'invio in corso...':'invia'}}</button>


        </form>

      </div>

    </div>
    <h1>Contattaci</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam atque nostrum dolore doloribus nisi voluptatibus, repellendus sed, officiis aspernatur id labore est voluptates aperiam deserunt laboriosam ipsam animi et.</p>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name:'',
      email:'',
      message:'',
      sendingInProgress: false,
      errors: {},
      success: false,
    }
  },
  methods: {
    sendForm() {

      this.sendingInProgress = true;

      axios.post('/api/contacts',{
        'name': this.name,
        'email': this.email,
        'message': this.message,
      }).then(response=>{

        this.sendingInProgress = false;

        if (response.data.errors) {
          this.errors = response.data.errors;
          this.success = false;

        }else{

          this.success = true;
          this.name = '';
          this.email = '';
          this.message = '';
          this.errors = {};

        }
        
      });
    }
  }

}
</script>

<style>

</style>