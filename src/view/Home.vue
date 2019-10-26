<template>
    <div class="home">
        <h1>Track Your Learning</h1>
        <div class="content-wrapper">
            <button class="btn add-btn" @click="displayAddNew">
                Add new
            </button>
            <div class="add-new" v-if="isDisplayAddNew">
                <div class="row">
                    <div class="item-name">Topic</div>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="Enter topic name" class="search-input" v-model="topicName">
                </div>
                <div class="row">
                    <div class="category">
                        <div class="item-name">Category:</div>  &nbsp;&nbsp;&nbsp;
                        <select id="category-id" v-model="category">
                            <option value="theory" selected>Theory</option>
                            <option value="practicle">Practicle</option>
                        </select>
                    </div>
                    <div class="status">
                        <div class="item-name">Status: </div>&nbsp;&nbsp;&nbsp;
                        <select id="status-id" v-model="status">
                            <option value="pending" selected>Pending</option>
                            <option value="complete">Complete</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <button class="btn search-btn" @click="addNewTask">Add task</button>
                </div>
            </div>
            <!-- <div class="search-box">
                <input type="text" placeholder="Type topic to search" class="search-input">
                &nbsp;&nbsp;&nbsp;
                <button class="btn search-btn">Search</button>
            </div> -->
            <div class="contents">
                <div class="table-wrapper" v-if="tasks.length > 0">
                    <table class="table">
                        <thead>
                            <th>Topic</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>
                                <input type="checkbox" v-on:change="onSelect($event)" :checked="selectAll">
                            </th>
                            <th width="100px">
                                <i style="font-size:24px" class="fa icon" v-if="displayActions" @click="deleteSelected">&#xf014;</i>
                                &nbsp;&nbsp;&nbsp;
                                <i style="font-size:24px" class="fa icon" v-if="displayActions" @click="completeSelected">&#xf058;</i>

                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="(task,index) in tasks" :key="index">
                                <td>{{task.topic}}</td>
                                <td>{{task.category}}</td>
                                <td><span :class="task.status ==='pending'? 'pending-analytics-head':'complete-analytics-head'">{{task.status}}</span></td>
                                <td><input type="checkbox" v-on:change="onItemChecked($event,task)" :checked="task.checked"></td>
                                <td class="action"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="no-data" v-else>
                    <h3><i>Sorry, No Data to show</i></h3>
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
        isDisplayAddNew:false,
        topicName:'',
        category:'',
        status:'',
        selectAll:false,
        displayActions:false,
        tasks:[],
      }
  },
  computed: {
        calculatePending(){ 
           return this.tasks.filter(e=> e.status === 'pending').length;    
        },

        calculateComplete() {
            return this.tasks.filter(e=> e.status === 'complete').length;
        },
  },
  methods: {
        displayAddNew:function() {
            this.isDisplayAddNew = !this.isDisplayAddNew;
        },

         isSelectedAll() {
            let selected= this.tasks.some(element=> element.checked === false);
            return selected? false: true;
        },

        onItemChecked(e,item) {
           for(let element of this.tasks) {
               if(element.id === item.id) {
                   element.checked = e.target.checked;
               }
           }
           let allNotchecked = this.tasks.some(element=> element.checked == false);
           let oneCheck = this.tasks.some(element=> element.checked ==true);

           if(oneCheck) {
               this.displayActions=true;
           } else {
               this.displayActions = false;
           }

           if(allNotchecked) {
               this.selectAll = false;
           } else {
                this.selectAll = true;
           }
        },

        onSelect(event) {
            if(event.target.checked) {
                this.displayActions=true;
            } else {
                this.displayActions=false;
            }
            for(let element of this.tasks) {
                element.checked = event.target.checked;
           }
        },

        addNewTask: function() {
            console.log(this.topicName, this.category, this.status)
            if(!this.topicName || !this.category || !this.status){
                return;
            }
            let task = {
                id: this.tasks.length > 0 && this.tasks[this.tasks.length-1].id+1 || 1,
                topic: this.topicName,
                category:this.category,
                status: this.status,
                checked:false,
            }
            this.tasks.push(task);
            this.resetInputs();
        },

        deleteSelected() {
            this.tasks = this.tasks.filter(element=> element.checked ===false);
            this.displayActions=false;
        },

        completeSelected() {
            for(let task of this.tasks) {
                if(task.checked === true) {
                    task.status = 'complete';
                    task.checked=false;
                }
            }
            this.displayActions = false;
        },

        resetInputs() {
            this.topicName='';
            this.category='';
            this.status='';
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
  width: 55%;
  height: 38px;
  padding-left: 15px;
  padding-right: 10px;
  border-radius: 20px;
  font-size: 14px;
  border:none;
box-shadow: 0 0 12px 3px rgb(238, 237, 237);
}
.contents {
    display: flex;
    margin-top: 3rem;
    justify-content: space-between;

}
.table-wrapper,.no-data{
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
    padding: 1rem;
    /* box-shadow: 0 0 12px 3px rgb(238, 237, 237); */
    text-align: center;
    border-bottom: 1px solid rgba(156, 156, 155, 0.3);

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
.add-new {
    padding: 2rem;
    background: rgb(248, 248, 245);
    margin-top: 1rem;
    width: 70%;
    padding-top:3rem;
    padding-bottom:1rem;
}
.row {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#category-id, #status-id {
    width: 200px;
    height: 35px;
    font-size: 0.8rem;
    border-radius: 50px !important;
    border:none;
    background: #fff;
    box-shadow: 0 0 12px 3px rgb(238, 237, 237);
    color:#484848;

}
.status {
    margin-left: 3rem;
    display: flex;
    align-items: center;
}
.category{
    display: flex;
    align-items: center;
}
.center {
    text-align: center;
}
.item-name {
    width: 80px;
}
.icon {
    cursor:pointer;
    transition: 0.3s;
}
.icon:hover {
    color: rgb(49, 199, 141);
}
</style>
