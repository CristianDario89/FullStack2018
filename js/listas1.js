var person = {
        name: "Brad",
        age: 35,
        address:{
          street:"5 main st",
          city: "Boston"
        },
        children:["Brianna", "Nicholas"]
      }

      /*person = JSON.stringify(person);
      person = JSON.parse(person);*/

      var ravioles = [
        {
        id: 1,
          name:"LjubaLibrary",
          age: 2017
        },
        {
        id: 2,
          name:"Learn Br",
          age:2017
        },
        {
        id: 3,
          name:"Turismo Arg",
          age:2017
        }
      ];
      
      var nioquis = [
      {
      name:"ControldeAsistencias",
      precio: 2017
      },
      {
      name:"Login&CRUD",
      precio:2017
      },
      {
      name:"ShoppingCart&Sessions",
      precio:2017
      }
      ];

var agne = [
        {
          name:"Netbeans",
          precio: 8.1 
        },
        {
          name:"Brackets",
          precio:2
        }
      ];
      //console.log(people[1].age);
      var output = '';
      for(var i = 0;i < ravioles.length;i++){
        //console.log(people[i].name);
        output += '<p>'+ravioles[i].name + ' ' + ravioles[i].age+'</p>';
      
      }
      document.getElementById('people').innerHTML = output;
      
      var output2 = '';
      for(var i = 0;i < nioquis.length;i++){
      //console.log(people[i].name);
      output2 += '<p>'+nioquis[i].name + ' ' + nioquis[i].precio+'</p>';
      
      }
      document.getElementById('nioquis').innerHTML = output2;
      
      var output3 = '';
      for(var i = 0;i < agne.length;i++){
      //console.log(people[i].name);
      output3 += '<li>'+agne[i].name + ' ' + agne[i].precio+'</li>';
      
      }
      document.getElementById('agne').innerHTML = output3;
      
      
      
        var contenido = document.querySelector('#contenido');
      //contenido.innerHTML =`<p> jajajajajjajaja </p>`; 
      
      function traer(){
      
      	fetch('ravioles')
      	.then(res => res.jason())
      	.then(datos =>{
      	 tabla2(datos);
      	})
      }
      
      function tabla2(datos){
      
       contenido.innerHTML = '';
      for(let valor of ravioles){
     
      console.log(valor.name + "...." + valor.id);
      
      contenido.innerHTML += ` 
      <tr>
      <th scope="row">${ valor.id }</th>
      <td>${ valor.name}</td>
      <td>${ valor.age}</td>
      <br>
      </tr>
      `
      
      }
      
      }
      
      /*--------------*/
      
      $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
  
  function getMovies(searchText){
  axios.get('http://www.omdbapi.com?s='+searchText+'&apikey=thewdb')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="movies.html">Movie Details</a>
            </div>
          </div>
        `;
      });
  
      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  /*---_-----------*/
  