$(document).ready(function () {

    let orders = [];
    let product = [];
    let Price = [];
    let total = 0;
    let qty = [];
    

    let personal_Details = {
        name: "",
        address: "",
        phone: "",
        method: ""

    };

    


    function clear() {
        product = [];
        Price = [];
        total = 0;
        qty = [];
    }



    $('.Menu').click(function () {

        window.location.href = "/Pages/Menu.html";

    });



    $('#Special').click(function () {
        $('#Dragon').fadeToggle(500);



    });

    $('#Fishball').click(function () {

        $('#FBall').fadeToggle(500);





    });
    $('#fballtotal').click(function () {
        let primary_Value = $("#Fishball-qty").val() * 30;
        product.push("Fishball");
        total += primary_Value;
        qty.push($("#Fishball-qty").val());
        Price.push(30);
    
        $('#FBall').fadeOut(200);


    });



    $('#Quick').click(function () {
        $('#Kwek').fadeToggle(500);



    });
    $('#kwektotal').click(function () {

        let primary_Value = $("#Quick-qty").val() * 50;
        product.push("Kwek-Kwek");
        total += primary_Value;
        qty.push($("#Quick-qty").val());
        Price.push(50);
      
        $('#Kwek').fadeOut(200);



    });

    $('#Gulaman').click(function () {
        $('#Guls').fadeToggle(500);
        product.push("Gulaman");
        Price.push(20);
        total += 20;
        qty.push($("#Guls-qty").val());




    });

    $('#Gulstotal').click(function () {
        let primary_Value = $("#Guls-qty").val() * 20;
        product.push("Gulaman");
        total += primary_Value;
        qty.push($("#Guls-qty").val());
        Price.push(20);
        $('#Guls').fadeOut(200);
    });

    $('#Dragon').click(function () {
        $('#Dball').fadeToggle(500);



    });
    $('#Dtotal').click(function () {
        product.push("Dragon Ball");
        Price.push(100);
        total += 100;
        qty.push($("#D-qty").val());
        $('#Dball').fadeOut(200);

    });

    $('#close_fball').click(function () {
        $('#FBall').fadeOut(300);
    });
    $('#close_kwek').click(function () {
        $('#Kwek').fadeOut(300);
    });
    $('#close_guls').click(function () {
        $('#Guls').fadeOut(300);
    });
    $('#close_dball').click(function () {
        $('#Dball').fadeOut(300);
    });


    $('#close').click(function () {
        $('.Checkout').fadeOut(500);

    });

    $('#Checkout-btn').click(function () {
        
       
        for (let x = 0; x < 1; x++) {
            $('#Table').append('<tr><th>Product</th><th>Quantity</th><th>Price</th></tr>');
        }
        for (let i = 0; i < product.length; i++) {
            $('#Table').append('<tr><td>' + product[i] + '</td><td>' + qty[i] + '</td><td>' + Price[i] + '</td></tr>');
        }
        $('#total').text(total);
        orders.push(product);
        orders.push(qty);
        orders.push(Price);
        orders.push(total);
       
        

        $('.form').fadeIn(300);

    });


    $('#cancel').click(function () {
        $('.form').fadeOut(300);
    });
    
    $('#submit').click(function () {
        personal_Details.name = $('#Name').val();
        personal_Details.address = $('#Address').val();
        personal_Details.phone = $('#Number').val();
        personal_Details.method = $('#Receive').val();

        

        if (personal_Details.name == "" || personal_Details.address == "" || personal_Details.phone == "") {
            alert("Please fill out the forms");


            $('#Name').focus();
            


            $('#Number').css("border", "1px solid red");
            $('#Address').css("border", "1px solid red");
            $('#Name').css("border", "1px solid red");

        } else {
            $('.form').fadeOut(300);
            

        $('#name').text(personal_Details.name);
        $('#address').text(personal_Details.address);
        $('#number').text(personal_Details.phone);
        $('#method').text(personal_Details.method);
            $('.Checkout').fadeIn(500);
        }
    
        

    });
    let order_Count = 0 ;
        $('#Checkout-Button').click(function () {
        order_Count ++;
        $('.Checkout').fadeOut(300);
        $('#Product').fadeOut(300);
        $('#order').show(300);
        $('#Order-Count').text(order_Count);
        $('#orderNumber').text(order_Count);
        

    });

    $('#okay').click(function () {
        $('#order').fadeOut(300);
        $('#Product').fadeIn(300);
        clear();
    });

});