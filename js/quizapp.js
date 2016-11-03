(function () {
var app = angular.module('quiz',[]);

var quizsettings = [
       {
            question_text: 'Hoeveel vragen?', 
            cssclass: "quiz_settings_panel--blue",
            imageicon: "img/amount-icon.png",
            isSelected: false,
            
            questions_options: {
                10: false, 
                15: true, 
                25: false, 
                50: false
            },
            questions_chosen: "15"
        },
        {
            question_text: 'Categorie?', 
            cssclass: "quiz_settings_panel--green",
            imageicon: "img/category-icon.png",
            isSelected: false,
            
             questions_options: {
                 html: true, 
                 css: false, 
                 php: false, 
                 mysql: false
             },
            questions_chosen: "html"
        },
        {
            question_text: 'Soort vragen?', 
            cssclass: "quiz_settings_panel--orange",
            imageicon: "img/type-icon.png",
            isSelected: true,
            
            questions_options: {
                open: false, 
                multiple_choice: true, 
                half_open: false
            },
            questions_chosen: "half_open"
        },
        {
            question_text: 'Moeilijkheidsgraad?', 
            cssclass: "quiz_settings_panel--yellow",
            imageicon: "",
//            imageicon: "img/difficulty-icon.png",
            isSelected: false,
            
            questions_options: {
                easy: true, 
                moderate: false, 
                hard: false
            },
            questions_chosen: "hard"
        }
    ];
    

app.controller('Instelblokken', function(){
    this.quizsettings = quizsettings;
    
    this.ifSelected = function(isSelected){
        if(isSelected === true){
         return "quiz_settings_panel--active";   
        }else{
         return "";   
        }
    };
    
    this.selectThis = function(value){
        alert(value);
    };
    
    this.selected_setting = {
    
    };
    
    this.startquiz = function(value) {
        
    };
    
    this.test = function(value){
     console.log(value);   
    }

    
    });
    
})();