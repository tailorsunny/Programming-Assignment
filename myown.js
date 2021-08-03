let jsons     = '[{"id": 1,"email": "george.bluth@reqres.in","first_name": "George","last_name": "Bluth","image": "https://toothsicms.s3.ap-south-1.amazonaws.com/testimony5_235550a629.png","projects_completed": 50,"avg_ratings": 4.5,"specializations": ["threejs", "3d graphics"],"address": "street-1 usa","about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, {"id": 2,"email": "janet.weaver@reqres.in","first_name": "Janet","last_name": "Weaver","image": "https://toothsicms.s3.ap-south-1.amazonaws.com/testimony2_59251dac92.png","projects_completed": 12,"avg_ratings": 3.5,"specializations": ["google cloud", "excel"],"address": "street-123 andheri","about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, {"id": 3,"email": "emma.wong@reqres.in","first_name": "Emma","last_name": "Wong","image": "https://toothsicms.s3.ap-south-1.amazonaws.com/testimony4_15c762a80d.png","projects_completed": 10,"avg_ratings": 1.5,"specializations": ["clickView", "tableau"],"address": "street-A1 malad","about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id": 4,"email": "eve.holt@reqres.in","first_name": "Eve","last_name": "Holt","image": "https://toothsicms.s3.ap-south-1.amazonaws.com/testimony2_85a039c7f4e3db2ce55fc089312f3410_5b018f43b1.png","projects_completed": 155,"avg_ratings": 4.2,"specializations": ["reactjs"],"address": "street-A2 goregaon","about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id": 5,"email": "charles.morris@reqres.in","first_name": "Charles","last_name": "Morris","image": "https://toothsicms.s3.ap-south-1.amazonaws.com/testimony1_11e54a273b5495a558b5d091a80dfc5a_811fa5fc8a.png","projects_completed": 500,"avg_ratings": 4.0,"specializations": ["nodejs", "angular"],"address": "street-A8882 jogeshwari","about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id": 6,"email": "tracey.ramos@reqres.in","first_name": "Tracey","last_name": "Ramos","image": "https://assets.toothsi.in/Neha_Modi_Jalan_624d9dd0ed.jpeg","projects_completed": 950,"avg_ratings": 4.8,"specializations": ["java", "mongodb"],"address": "sai baba street , jogeshwari","about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]';

let json      = JSON.parse(jsons);

let str       = '';

let class_var = '';

let counter   = 1;

let bgColor   = '';

for (let i in json) {

    if (json[i].id == 3) {
        
        class_var = 'double';

    } else {

        class_var = '';

    }

    if (counter == 2) {
        
        bgColor = "style='background: #843C90;'"; 

    } else if (counter == 5) {
        
        bgColor = "style='background: #e67e22;'"; 

    } else {

        bgColor = "style='background: #87C637;'"; 

    }

    str+='<div class="card" onclick="openProfile('+json[i].id+')">';

        str+= '<div class="row align-items-center">';
        
            str+= '<div class="c-7">';

                str+= '<h4>'+json[i].first_name + ' ' + json[i].last_name +'</h4>';

                str+= '<p class="tags"><strong>projects_completed</strong> : '+json[i].projects_completed+'</p>';

                str+= '<a href="mailto:'+json[i].email+'">'+json[i].email+'</a>';

            str+='</div>';

            str+='<div class="c-5">';

                str+='<img src="'+json[i].image+'" class="profile">';

            str+='</div>';

        str+='</div>';

        str+='<hr>';

        str+='<div class="row p-15 align-items-center">';
                
            str+='<div class="c-7">';
                        
                str+='<div class="d-flex align-items-center">';
                            
                    str+='<div class="'+class_var+'">';

                        if (json[i].id == 3) {
        
                            str+='<div class="circle bg-2"></div>';
    
                            str+='<div class="circle bg-3"></div>';

                        } else {

                            str+='<div class="circle bg-1" '+bgColor+'></div>';

                        }
            
                    str+='</div>';
                            
                    str+='<p class="f-11 text-grey">'+json[i].specializations+'</p>';
                        
                str+='</div>';
                    
            str+='</div>';
                    
            str+='<div class="c-5">';
                        
                str+='<div class="full-end">';
                            
                    str+='<img src="img/star.svg">';
                            
                    str+='<p class="pl-4">'+json[i].avg_ratings+'</p>';
                        
                str+='</div>';
                    
            str+='</div>';
                
        str+='</div>';
    
    str+='</div>';

    counter++;

}
        
document.getElementById("card_list").innerHTML = str;

function openProfile(e) {

    let id = e;

    document.getElementById("card_list").style.display = "none";

    let str = '';

    document.getElementById("profile_details").style.display = "block";

    let class_var  = '';

    let bgColor    = '';

    for (let i in json) {

        if (json[i].id == 3) {
        
            class_var = 'double';

        } else {

            class_var = '';

        }

        if (json[i].id == id) {

            str+='<div class="top">';
                
                str+='<div class="c-6 pl-15" onclick="hideProfile()">';

                    str+='<img src="img/back.svg" class="c-p">';

                str+='</div>';

                str+='<div class="c-6 full-end pr-10">';
                
                    str+='<button><img src="img/star-black.svg">'+json[i].avg_ratings+'</button>';
            
                str+='</div>';
                
            str+='</div>';
            
            str+='<div class="profiles">';
                
                str+='<img src="'+json[i].image+'" alt="no-img">';
            
            str+='</div>';

            str+='<div class="profiles-details">';
                
                str+='<div class="p-10">';
                    
                    str+='<h1>'+json[i].first_name + ' ' + json[i].last_name +'</h1>';
                    
                    str+= '<a href="mailto:'+json[i].email+'">'+json[i].email+'</a>';
                    
                    str+='<h5>projects_completed : '+json[i].projects_completed+'</h5>';
                    
                    str+='<p class="details">'+json[i].about+' </p>';
                
                str+=' </div>';

                str+='<hr>';

                str+='<div class="p-10 pt-0">';
                    
                    str+='<div class="row p-16 align-items-center">';
                    
                        str+='<div class="c-7">';
                    
                            str+='<div class="d-flex align-items-center">';
                    
                                // str+='<div class="">';
                                    
                                //     str+='<div class="circle bg-1"></div>';
    
                                // str+='</div>';

                                str+='<div class="'+class_var+'">';

                                    if (json[i].id == 3) {
                    
                                        str+='<div class="circle bg-2"></div>';
                
                                        str+='<div class="circle bg-3"></div>';

                                    } else {

                                        if (json[i].id == 2) {
                                            
                                            bgColor = "style='background: #843C90;'"; 

                                        } else if (json[i].id == 5) {
                                            
                                            bgColor = "style='background: #e67e22;'"; 

                                        } else {

                                            bgColor = "style='background: #87C637;'"; 

                                        }

                                        str+='<div class="circle bg-1" '+bgColor+'></div>';

                                    }
                
                                str+='</div>';

                                str+='<p class="f-11 text-grey pl-4">'+json[i].specializations+'</p>';
                            
                            str+='</div>';
                            
                        str+='</div>';
                        
                    str+='</div>';

                    str+='<p class="address"><img src="img/rectangle.svg">'+json[i].address+'</p>';

                    str+='<button class="btn-lg">Proceed</button>';

                str+='</div>';
                            
            str+='</div>';
                                
        }

    }
    
    document.getElementById("profile_details").innerHTML = str;

}


function hideProfile() {
    
    document.getElementById("profile_details").style.display = "none";

    document.getElementById("card_list").style.display = "block";

}

function openFilter() {
    
    document.getElementById("profile_details").style.display = "none";

    document.getElementById("card_list").style.display = "none";

    document.getElementById("filters-box").style.display = "block";

}

function createFilter() {

    let checkValue = parseFloat(document.querySelector("input[name='filter_rating']:checked").value);

    let str        = '';

    let class_var  = '';

    let count      = 0;

    let bgColor    = '';


    if (checkValue >= 1 && checkValue <= 3) {

        count = 1;

    } else if (checkValue >= 3 && checkValue <= 4) {

        count = 3;

    } else if (checkValue >= 4 && checkValue <= 5) {

        count = 4.1;

    }

    for (let i in json) {

        if (json[i].avg_ratings >= count && json[i].avg_ratings <= checkValue) {

            if (json[i].id == 3) {
        
                class_var = 'double';

            } else {

                class_var = '';

            }

            str+='<div class="card" data-id = '+json[i].id+' onclick="openProfile(this)">';

                str+= '<div class="row align-items-center">';
                
                    str+= '<div class="c-7">';
        
                        str+= '<h4>'+json[i].first_name + ' ' + json[i].last_name +'</h4>';
        
                        str+= '<p class="tags"><strong>projects_completed</strong> : '+json[i].projects_completed+'</p>';
        
                        str+= '<a href="mailto:'+json[i].email+'">'+json[i].email+'</a>';
        
                    str+='</div>';
        
                    str+='<div class="c-5">';
        
                        str+='<img src="'+json[i].image+'" class="profile">';
        
                    str+='</div>';
        
                str+='</div>';
        
                str+='<hr>';

                str+='<div class="row p-15 align-items-center">';
                        
                    str+='<div class="c-7">';
                            
                        str+='<div class="d-flex">';
                                
                            str+='<div class="'+class_var+'">';

                                if (json[i].id == 3) {
                
                                    str+='<div class="circle bg-2"></div>';
            
                                    str+='<div class="circle bg-3"></div>';

                                } else {

                                        if (json[i].id == 2) {
                                        
                                        bgColor = "style='background: #843C90;'"; 

                                    } else if (json[i].id == 5) {
                                        
                                        bgColor = "style='background: #e67e22;'"; 

                                    } else {

                                        bgColor = "style='background: #87C637;'"; 

                                    }

                                    str+='<div class="circle bg-1" '+bgColor+'></div>';

                                }
                
                            str+='</div>';
                                
                            str+='<p class="f-11 text-grey">'+json[i].specializations+'</p>';
                            
                        str+='</div>';
                        
                    str+='</div>';
                        
                    str+='<div class="c-5">';
                            
                        str+='<div class="full-end">';
                                
                            str+='<img src="img/star.svg">';
                                
                            str+='<p class="pl-4">'+json[i].avg_ratings+'</p>';
                            
                        str+='</div>';
                        
                    str+='</div>';
                    
                str+='</div>';
            
            str+='</div>';


        }
                
    }

    document.getElementById("card_list").innerHTML = str;

    document.getElementById("card_list").style.display = "block";

    document.getElementById("filters-box").style.display = "none";
    
}

