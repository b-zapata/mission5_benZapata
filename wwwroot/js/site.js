// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#btnCalculate").click( function () {
    let hoursDesired = $("#hoursDesired").val();
    let hourlyRate = $("#hourlyRate").val();
    let totalCost = hoursDesired * hourlyRate;
    console.log("Total cost: " + totalCost);
    $("#totalCost").val(totalCost);
})
