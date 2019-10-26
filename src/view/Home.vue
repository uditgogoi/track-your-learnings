<template>
    <div class="home">
        <h1>Track Your Learning</h1>
        <div class="content-wrapper">
            <button class="btn add-btn">
                Add new
            </button>
            <!-- <div class="search-box">
                <input type="text" placeholder="Type topic to search" class="search-input">
                &nbsp;&nbsp;&nbsp;
                <button class="btn search-btn">Search</button>
            </div> -->
            <div class="contents">
                <div class="table-wrapper">
                    <table class="table">
                        <thead>
                            <th>Sl</th>
                            <th>Topic</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th><input type="checkbox"></th>
                        </thead>
                        <tbody>
                            <tr v-for="(task,index) in tasks" :key="index">
                                <td>{{task.id}}</td>
                                <td>{{task.topic}}</td>
                                <td>{{task.category}}</td>
                                <td><span :class="task.status ==='pending'? 'pending-analytics-head':'complete-analytics-head'">{{task.status}}</span></td>
                                <td>view</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="analytics">
                    <div class="card-analytics">
                        <h4><span class="pending-analytics-head">Pending task</span></h4>
                        <h1>{{calculatePending}}</h1>
                    </div>
                    <div class="card-analytics">
                        <h4><span class="complete-analytics-head">Completed task</span></h4>
                        <h1>{{calculateComplete}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: ()=> {
      return{
        tasks:[
          {id:1, topic:'Algo', category:'theroy', status:'pending'},
          {id:2, topic:'DS', category:'theroy', status:'pending'},
          {id:3, topic:'COA', category:'theroy', status:'complete'},
          {id:4, topic:'Python', category:'practicle', status:'pending'},
          {id:5, topic:'Integration', category:'practicle', status:'pending'},
          {id:6, topic:'FLAT', category:'practicle', status:'complete'},
        ],
      }
  },
  computed: {
        calculatePending(){ 
           return this.tasks.filter(e=> e.status === 'pending').length;    
        },

        calculateComplete() {
            return this.tasks.filter(e=> e.status === 'complete').length;
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {

}
.home h1 {
  text-align: center;
}
.content-wrapper {
  /* border: 1px solid rgba(1,1,0,0.6); */
  width: 95%;
  margin:auto;
}
a {
  color: #42b983;
}
.search-box {
  width: 75%;
  margin-top: 4rem;
}
.search-input {
  width: 45%;
  height: 38px;
  padding-left: 15px;
  padding-right: 10px;
  border-radius: 20px;
  font-size: 14px;
  border:none;
  box-shadow: 0 0 12px 1px rgb(223, 223, 223);
}
.contents {
    display: flex;
    margin-top: 3rem;
    justify-content: space-between;

}
.table-wrapper {
    width: 75%;
}
.table {
    width: 100%;
    box-shadow: 0 0 12px 3px rgb(238, 237, 237);
}
table {
    border-collapse: collapse;
}
th {
    padding: 0.8rem;
    border-bottom: 1px solid rgba(155, 155, 155, 0.644);
    text-align: center;

}
td {
    padding: 1rem;
    text-align: center;
}
.card-analytics {
    margin-bottom: 3rem;
    padding:2rem;
    background: #fff;
    box-shadow: 0 0 12px 3px rgb(238, 237, 237);
}
.card-analytics h4,h1 {
    text-align: center;
}
.pending-analytics-head {
    color: #D3951F;
}
.complete-analytics-head {
    color:rgb(49, 199, 141);
}
</style>
