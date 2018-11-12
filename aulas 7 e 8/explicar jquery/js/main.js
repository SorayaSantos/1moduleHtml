// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" )

    $("#target").click(function() {
        $('h1').css("color","red");
        $('.conteudo').html(getImage('https://image.freepik.com/fotos-gratis/hrc-tigre-siberiano-2-jpg_21253111.jpg',  "ola"));


    });

    $('#btn1').click(function() {
        $('h1').css("color","red");
        $('.conteudo').html(getTabel())

    });
});


function getImage(srcImage,altImage){
    return `<img src="${srcImage}" alt"=${altImage}">`; //acento grave

}
    

function getTabel(){
    return `<table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </table>`;
}
