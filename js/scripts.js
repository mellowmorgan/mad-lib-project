$(document).ready(function() {
  
    $("#formOne").submit(function(event) {
      event.preventDefault();
const person1Input = $("#name1").val();
const person2Input = $("#name2").val();
const nounInput = $("#noun").val();
const verbInput = $("#verb1").val();
const verb2Input = $("#verb2").val();

$(".n1").text(person1Input);
$(".n2").text(person2Input);
$(".n").text(nounInput);
$(".v1").text(verbInput);
$(".v2").text(verb2Input);

$("#story").show();
    });
});