$(function (){
  var urlParameters = window.location.search.substring(1);
  var idValues = urlParameters.split('=');

  $.get("http://localhost:8080/online-store-app/store/items/"+ idValues[1], function(data){
      $('#productView').append(`
        <div class="column"  style="background-color:#a2a276">
          <h2>Name: `+data.name+`</h2>
          <p><b>Price:</b> $`+data.salePrice+`</p>
          <p><b>Item Description:</b> `+data.shortDescription+`</p>
          <p><b>Brand:</b> `+data.brandName+`</p>
          <p><b>Size:</b> `+data.size+`</p>
          <p><b>Color:</b> `+data.color+`</p>
          <p><b>Gender:</b> `+data.gender+`</p>
        </div>
        `);

  });
});
