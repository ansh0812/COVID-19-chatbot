 var cough_counter = 2;
 var bodyaches_counter = 2;
 var sorethroat_counter = 2;
 var diarrhea_counter = 2;
 var cold_counter = 2;
 var breathing_counter = 2;
 var headache_counter = 2;
 var fatigue_counter = 2;
 var corona_number = 0;
 var symptoms = [];


 if (sessionStorage.getItem("coronaTest") == "active") {
     console.log("startCovidTesting")
     start_chatbot();
 }


 function start_chatbot() {
     var response_div = document.createElement("div");
     response_div.id = "age";
     response_div.className = "msg right-msg";
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer =
         '<div class="msg-bubble"><div class="msg-text" id="age-text"> AGE<input type="number" id="age-input" class="form-control" aria-describedby="passwordHelpBlock"><button type="button" class="btn btn-primary" id="age_go_button" onclick="age()">Go!</button></div></div>';
     document.getElementById("age").innerHTML += next_answer;
 }




 function validate_age() {
     var age = document.getElementById("age-input").value;
     document.getElementById("age-input").value = "";

     if (age === "") {
         return "Please enter your age first";
     } else if (isNaN(age) || age < 1 || age > 100) {
         return "The age must be a  number <br>  between 1 and 100";
     } else {
         return "OK";
     }
 }

 function age() {

     var age_validation_result = validate_age();
     console.log(age_validation_result);
     //create element
     var response_div = document.createElement("div");
     response_div.id = "temperature_question";
     response_div.className = "msg left-msg ";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     if (age_validation_result != "OK") {
         var next_question = "<div>" + age_validation_result + "</div>";
         document.getElementById("age-text").innerHTML += next_question;
         // //create element
         // var response_div = document.createElement("div");
         // response_div.id = "new_age";
         // response_div.className = "msg right-msg ";
         // var msger_chat = document.getElementById("msger-chat");
         // //append that element
         // msger_chat.appendChild(response_div);
         // document.getElementById("new_age").innerHTML += "<div class='msg-bubble'><div class='msg-text'>AGE<input type='number' id='age-input' class='form-control' aria-describedby='passwordHelpBlock'><button type='button' class='btn btn-primary' id='age_go_button' onclick='age()'>Go!</button></div></div>";

     } else {
         var next_question =
             "<div class='msg-bubble'><div class='msg-text'>Please let us know your current body temperature in degree Fahrenheit (Normal body temperature is 98.6??F):                                                                                                          <button type='button' class='btn btn-primary btn-sm'  onclick='normal_fever()' id='normal_fever'>Normal (96??F-98.6??F)</button>   <button type='button' class='btn btn-primary btn-sm ' id='high_fever' onclick='high_fever()'>Fever (98.6??F-102??F)</button>             </div></div>";
         document.getElementById("temperature_question").innerHTML += next_question;
         document.getElementById("age_go_button").disabled = true;
     }


 }

 function button_text_changer() {
     console.log(document.getElementById("none_of_these").innerText)
     if (typeof symptoms !== 'undefined' && symptoms.length > 0) {
         document.getElementById("none_of_these").innerText = "Confirm";
     } else {
         document.getElementById("none_of_these").innerText = "None of these";
     }
 }

 function cough_symptom(ele_id) {
     var symptom = ele_id.innerText;

     if (cough_counter % 2 == 0 || cough_counter == 0) {
         ele_id.style.backgroundColor = "red";
         cough_counter++;
         corona_number++;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         cough_counter++;
         corona_number--;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);

     }
     button_text_changer()

 }

 function cold_symptom(ele_id) {
     var symptom = ele_id.innerText;
     if (cold_counter % 2 == 0 || cold_counter == 0) {
         ele_id.style.backgroundColor = "red";
         cold_counter++;
         corona_number++;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         cold_counter++;
         corona_number--;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);
     }
     button_text_changer()
 }

 function diarrhea_symptom(ele_id) {
     var symptom = ele_id.innerText;
     if (diarrhea_counter % 2 == 0 || diarrhea_counter == 0) {
         ele_id.style.backgroundColor = "red";
         diarrhea_counter++;
         corona_number++;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         diarrhea_counter++;
         corona_number--;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);
     }
     button_text_changer()
 }

 function sorethroat_symptom(ele_id) {
     var symptom = ele_id.innerText;
     if (sorethroat_counter % 2 == 0 || sorethroat_counter == 0) {
         ele_id.style.backgroundColor = "red";
         sorethroat_counter++;
         corona_number++;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         sorethroat_counter++;
         corona_number--;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);
     }
     button_text_changer()
 }

 function bodyaches_symptom(ele_id) {
     var symptom = ele_id.innerText;
     if (bodyaches_counter % 2 == 0 || bodyaches_counter == 0) {
         ele_id.style.backgroundColor = "red";
         bodyaches_counter++;
         corona_number++;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         bodyaches_counter++;
         corona_number--;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);
     }
     button_text_changer()
 }

 function headache_symptom(ele_id) {
     var symptom = ele_id.innerText;
     if (headache_counter % 2 == 0 || headache_counter == 0) {
         ele_id.style.backgroundColor = "red";
         headache_counter++;
         corona_number++;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         headache_counter++;
         corona_number--;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);
     }
     button_text_changer()
 }

 function fatigue_symptom(ele_id) {
     var symptom = ele_id.innerText;
     if (fatigue_counter % 2 == 0 || fatigue_counter == 0) {
         ele_id.style.backgroundColor = "red";
         fatigue_counter++;
         corona_number = corona_number + 2;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         fatigue_counter++;
         corona_number = corona_number - 2;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);
     }
     button_text_changer()
 }

 function breathing_symptom(ele_id) {
     var symptom = ele_id.innerText;
     if (bodyaches_counter % 2 == 0 || bodyaches_counter == 0) {
         ele_id.style.backgroundColor = "red";
         breathing_counter++;
         corona_number = corona_number + 2;
         if (symptoms.indexOf(symptom) === -1) {
             symptoms.push(symptom);
             console.log(symptoms);
         }
     } else {

         ele_id.style.backgroundColor = "#0d6efd";
         breathing_counter++;
         corona_number = corona_number - 2;
         const index = symptoms.indexOf(symptom)
         if (index > -1) {
             symptoms.splice(index, 1)
         }
         console.log(symptoms);
     }
     button_text_changer()
 }

 function after_travelled_history_reply() {
     //create element
     var response_div = document.createElement("div");
     response_div.id = "after_travelled_history_reply";
     response_div.className = "msg left-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer =
         "<div class='msg-bubble'><div class='msg-text'>Do you have direct contact or is taking care of a positive COVID-19 patient?<button type='button' class='btn btn-primary btn-sm'  onclick='direct_contact_yes()' id='direct_contact_yes'>YES</button><button type='button' class='btn btn-primary btn-sm'  onclick='direct_contact_no()' id='direct_contact_no'>NO</button></div></div>";
     document.getElementById("after_travelled_history_reply").innerHTML += next_answer;

 }

 function direct_contact_yes() {
     remove_buttons('direct_contact_yes')
     remove_buttons('direct_contact_no')
     corona_number = corona_number + 3;
     after_direct_question('Yes')
 }

 function direct_contact_no() {
     remove_buttons('direct_contact_yes')
     remove_buttons('direct_contact_no')
     after_direct_question('no')
 }

 function main_result() {
     var response_div = document.createElement("div");
     response_div.id = "main_result";
     response_div.className = "msg left-msg";
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     if (corona_number >= 0 && corona_number <= 2) {
         next_answer =
             "<div class='msg-bubble'><div class='msg-text'>Maybe Stress related and observe</div></div>";
         document.getElementById("main_result").innerHTML += next_answer;
     } else if (corona_number >= 3 && corona_number <= 5) {
         next_answer =
             "<div class='msg-bubble'><div class='msg-text'>Hydrate properly and proper personal hygiene.Observe and re-evaluate after 2 days </div></div>";
         document.getElementById("main_result").innerHTML += next_answer;
     } else if (corona_number >= 3 && corona_number <= 5) {
         next_answer =
             "<div class='msg-bubble'><div class='msg-text'>Seek a consultation with your doctor </div></div>";
         document.getElementById("main_result").innerHTML += next_answer;
     } else {
         next_answer =
             "<div class='msg-bubble'><div class='msg-text'>Call the DOH hotline 02-8-561-7800 </div></div>";
         document.getElementById("main_result").innerHTML += next_answer;
     }
 }

 function after_direct_question(response) {
     //create element
     var response_div = document.createElement("div");
     response_div.id = "after_direct_question";
     response_div.className = "msg right-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer = "<div class='msg-bubble'><div class='msg-text'>" + response + "</div></div>";
     document.getElementById("after_direct_question").innerHTML += next_answer;
     main_result();
 }

 function after_travelled_history_question(response) {
     //create element
     var response_div = document.createElement("div");
     response_div.id = "after_travelled_history_question";
     response_div.className = "msg right-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer = "<div class='msg-bubble'><div class='msg-text'>" + response + "</div></div>";
     document.getElementById("after_travelled_history_question").innerHTML += next_answer;
     after_travelled_history_reply();
 }

 function travelled_recently_yes() {
     remove_buttons('travelled_recently_yes')
     remove_buttons('travelled_recently_no')
     corona_number = corona_number + 3;
     after_travelled_recently_question('Yes')
 }

 function travelled_recently_no() {
     remove_buttons('travelled_recently_yes')
     remove_buttons('travelled_recently_no')
     after_travelled_recently_question('no')
 }

 function travelled_history_yes() {
     remove_buttons('travelled_history_yes')
     remove_buttons('travelled_history_no')
     corona_number = corona_number + 3;
     after_travelled_history_question('Yes')
 }

 function travelled_history_no() {
     remove_buttons('travelled_history_yes')
     remove_buttons('travelled_history_no')
     after_travelled_history_question('no')
 }

 function after_travelled_recently_reply() {
     //create element
     var response_div = document.createElement("div");
     response_div.id = "after_travelled_recently_reply";
     response_div.className = "msg left-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer =
         "<div class='msg-bubble'><div class='msg-text'>Do you have a travel history to a COVID-19 infected area  <button type='button' class='btn btn-primary btn-sm'  onclick='travelled_history_yes()' id='travelled_history_yes'>YES</button><button type='button' class='btn btn-primary btn-sm'  onclick='travelled_history_no()' id='travelled_history_no'>NO</button></div></div>";
     document.getElementById("after_travelled_recently_reply").innerHTML += next_answer;
 }

 function after_travelled_recently_question(response) {
     //create element
     var response_div = document.createElement("div");
     response_div.id = "after_travelled_recently_question";
     response_div.className = "msg right-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer = "<div class='msg-bubble'><div class='msg-text'>" + response + "</div></div>";
     document.getElementById("after_travelled_recently_question").innerHTML += next_answer;
     after_travelled_recently_reply();
 }

 function after_symptoms_reply() {
     //create element
     var response_div = document.createElement("div");
     response_div.id = "after_symptom_reply";
     response_div.className = "msg left-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer =
         "<div class='msg-bubble'><div class='msg-text'>Have you travelled recently during the past 14 days?<button type='button' class='btn btn-primary btn-sm'  onclick='travelled_recently_yes()' id='travelled_recently_yes'>YES</button><button type='button' class='btn btn-primary btn-sm'  onclick='travelled_recently_no()' id='travelled_recently_no'>NO</button></div></div>";
     document.getElementById("after_symptom_reply").innerHTML += next_answer;
 }

 function after_symptoms_question() {
     //create element
     var response_div = document.createElement("div");
     response_div.id = "after_symptoms_question";
     response_div.className = "msg right-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer = "<div class='msg-bubble'><div class='msg-text'>" + symptoms + "</div></div>";
     document.getElementById("after_symptoms_question").innerHTML += next_answer;
     remove_buttons('cough')
     remove_buttons('cold')
     remove_buttons('sorethroat')
     remove_buttons('bodyaches')
     remove_buttons('headache')
     remove_buttons('fatigue')
     remove_buttons('diarrhea')
     remove_buttons('breathing')
     remove_buttons('none_of_these')
     after_symptoms_reply()

 }

 function after_age_question() {
     var response_div = document.createElement("div");
     response_div.id = "symptoms_selector";
     response_div.className = "msg left-msg";

     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer =
         '<div class="msg-bubble"><div class="msg-text"> Are you experiencing any of the symptoms below (mark all those applicable)                                                                              <button type="button" class="btn btn-primary btn-sm"  onclick="cough_symptom(cough)" id="cough">Cough</button>                                  <button type="button" class="btn btn-primary btn-sm"  onclick="cold_symptom(cold)" id="cold">Cold</button>                                      <button type="button" class="btn btn-primary btn-sm"  onclick="diarrhea_symptom(diarrhea)" id="diarrhea">Diarrhea</button>              <button type="button" class="btn btn-primary btn-sm"  onclick="sorethroat_symptom(sorethroat)" id="sorethroat">Sore Throat</button>            <button type="button" class="btn btn-primary btn-sm"  onclick="bodyaches_symptom(bodyaches)" id="bodyaches">BodyAches</button> <button type="button" class="btn btn-primary btn-sm"  onclick="headache_symptom(headache)" id="headache">Headache</button> <button type="button" class="btn btn-primary btn-sm"  onclick="fatigue_symptom(fatigue)" id="fatigue">Fatigue</button> <button type="button" class="btn btn-primary btn-sm"  onclick="breathing_symptom(breathing)" id="breathing">Difficulty Breathing</button><button type="button" class="btn btn-primary btn-sm"  onclick="after_symptoms_question()" id="none_of_these">None of these</button></div></div>';
     document.getElementById("symptoms_selector").innerHTML = next_answer;

 }

 function high_fever() {
     remove_buttons("high_fever")
     remove_buttons("normal_fever")
         //create element
     var response_div = document.createElement("div");
     response_div.id = "temperature_reply";
     response_div.className = "msg right-msg";
     //append that element
     var msger_chat = document.getElementById("msger-chat");
     msger_chat.appendChild(response_div);
     next_answer = "<div class='msg-bubble'><div class='msg-text'>Fever (98.6??F-102??F)</div></div>";
     document.getElementById("temperature_reply").innerHTML += next_answer;
     after_age_question();
     corona_number++;
 }

 function normal_fever() {
     remove_buttons("high_fever")
     remove_buttons("normal_fever")
         //create element  
     var response_div = document.createElement("div");
     response_div.id = "temperature_reply";
     response_div.className = "msg right-msg";
     var msger_chat = document.getElementById("msger-chat");
     //append that element
     msger_chat.appendChild(response_div);
     next_answer = "<div class='msg-bubble'><div class='msg-text'>Normal (96??F-98.6??F)</div></div>";
     document.getElementById("temperature_reply").innerHTML += next_answer;
     after_age_question();
 }

 function remove_buttons(button_id) {
     var button_element = document.getElementById(button_id);
     button_element.style.display = "none";
 }