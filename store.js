$(function(){
  $("#nav-placeholder").load("header.html");
});

$(function (){
  $.get("http://localhost:8080/online-store-app/store/items", function(data){

    for (let i=0;i<data.length;i++){
      $('#tileView').append(`
        <div class="column" onclick = "selectItem(`+data[i].itemId+`)" style="background-color:#aaa;">
          <h2>`+data[i].name+`</h2>
          <p>$`+data[i].salePrice+`</p>
          <p>`+data[i].size+`</p>
          <i class="fas fa-plus-circle" id=`+data[i].itemId+`></i>
        </div>
        `);
    }
  });

  $(document).on('click', '.fa-plus', function (event) {
    if (!Cookies.get('username')){
      window.location.href = 'login.html';
    }else {
      let addToCart = 'http://localhost:8080/online-store-app/store/carts?productId='+event.target.id+'&username='+Cookies.get('username');
      $.post(addToCart,
      {

      }, function(data){
        alert('Added!');
      });
    }
  });
});

//redirect to product display page when item is clicked
function selectItem(param){

 window.location.href = 'product.html?id='+ param;

}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// List View
function listView() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
