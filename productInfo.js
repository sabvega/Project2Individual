$(function (){
  var urlParameters = window.location.search.substring(1);
  var idValues = urlParameters.split('=');

  $.get("http://localhost:8080/online-store-app/store/items/"+ idValues[1], function(data){
      $('#productView').append(`
        <div class="column"  style="background-color:#aaa;">
          <h2>Name: `+data.name+`</h2>
          <p>Price: `+data.salePrice+`</p>
          <p>Item Description: `+data.shortDescription+`</p>
          <p>Brand: `+data.brandName+`</p>
          <p>Size: `+data.size+`</p>
          <p>Color: `+data.color+`</p>
          <p>Gender: `+data.gender+`</p>
        </div>
        `);

  });
});
