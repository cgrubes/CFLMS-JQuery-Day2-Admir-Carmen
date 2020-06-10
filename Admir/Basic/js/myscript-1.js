let christmas = [	
					["gift-box.png","santa-claus.png","gift-box.png"],
					["gift-box.png", "santa-claus.png", "gift-box.png"],
					["santa-claus.png", "gift-box.png", "santa-claus.png"] 
				];

$(document).ready(function() {
let data = ""
	for (i = 0; i < 3; i++) {
		
		for (j = 0; j < 3; j++)  {
		 	data +=
			 	`<div class="data_wrapper">
					<img alt="${christmas[i][j].split(".")[0]}" src="images/${christmas[i][j]}">
				</div>`;		
		}
	}

	$("#wrapper").append(data);

    $("img").on("click", function() {
        if($(this).attr('alt') === "santa-claus") {
        	$(this).hide();
        }
    });
});