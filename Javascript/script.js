$(document).ready(function () {

    let orders =[];

    $('.Menu').click(function () {

        window.location.href = "Pages/Menu.html";

    });

    $('#Meats').click(function () {
        window.location.href = "/Pages/Meats.html";
    });
    
  
        $('#Burger').click(function () {
            alert('Burger added to cart');
            orders.push('Burger');
        });
        $('#Chicken').click(function () {
            alert('Chicken added to cart');
            orders.push('Chicken');
        });

        $('#Porkchop').click(function () {
            alert('Pork added to cart');
            orders.push('Pork');
        });

        
});