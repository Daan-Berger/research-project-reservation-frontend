<template>
  <div class="home">
    <h1>Welkom bij de Mosselsouper van Chiro Wilduraantjes!</h1>
    <img src="@/assets/research_project_mosselsouper.jpg" alt="Mosselsouper" class="img"/>
    <p>Plaats hier uw reservatie!</p>
    <router-link to="/reservation" class="btn">Reserveer</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.btn {
  margin-top: auto;
  padding: 10px 20px;
  background-color: hwb(224 5% 14%);
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #e3d21d;
}


</style>