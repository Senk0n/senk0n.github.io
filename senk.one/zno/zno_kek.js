// функция раскрытия комментария
function showsComment(idCommentar)
{
	var cmnt = "#commentar_" + idCommentar;
	$( cmnt ).slideToggle( 300 );
}


$( "#btn_sshow_17061" ).click(function() { 
	$( "#commentar_17061" ).slideToggle( 300 ); 
}); 
