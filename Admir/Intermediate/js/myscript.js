$(document).ready(function(){

	$('*').css({'margin':'0', 'padding':'0'});

	const persons = JSON.parse(simpsons);


	for (let i = 0; i < persons.length; i++){

		let person = `<div id="${i}" class="person_wrapper">
		<img src="${persons[i].image}">
			<div class="person_name">
				<p>${persons[i].name}</p>
				<p class="person_relation">${persons[i].relation}</p>
			</div>
		</div>`;
		$('#wrapper').append(person);

		

	}

	$(".person_wrapper").css({"font-size":"3vw", "text-align":"center"});

	$(".person_wrapper").click(function() {
	        let content = persons[this.id].hobbies;
	        $("#"+this.id).text("Hobbies: "+content);
	        //$("#"+this.id).append("Hobbies: "+content);
	    });

	let button = `<button class ="button" type="button">Famylize</button>`;
	$('body').append(button);





	$('.button').click(familize);
	function familize(){
		for (let i = 0; i < persons.length; i++){
			if(!persons[i].family){
				$(`.person_wrapper:nth-child(${i+1})`).addClass('nonFamily');
			}
			else{
				$(`.person_wrapper:nth-child(${i+1})`).addClass('family');
			}		 
		}	
	}

	

});