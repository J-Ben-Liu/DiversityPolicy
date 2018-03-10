$(document).ready(function(){
    $('#citationDisplay').empty();
});

function abbrState(input, to){

    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to === 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }
    } else if (to === 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }
    }
}

function cite() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();

    if(dd<10){
        dd='0'+dd;
    }

    switch(mm) {
        case 1:
            mm = "January";
            break;
        case 2:
            mm = "February";
            break;
        case 3:
            mm = "March";
            break;
        case 4:
            mm = "April";
            break;
        case 5:
            mm = "May";
            break;
        case 6:
            mm = "June";
            break;
        case 7:
            mm = "July";
            break;
        case 8:
            mm = "August";
            break;
        case 9:
            mm = "September";
            break;
        case 10:
            mm = "October";
            break;
        case 11:
            mm = "November";
            break;
        case 12:
            mm = "December";
            break;
    }
    var formattedDate = dd+ " " +mm+ " " +yyyy;
    var chiFormattedDate = mm+ " " +dd+ " " +yyyy;

    var policyTitle = $('#inputTitle').val();
    var currentSchool = $('#inputSchool').val();
    var acadDept = $('#inputDept').val();
    var noDate = "n.d";
    var currentLink = $('#inputLink').val();
    var state = $('#inputState').val();
    var city = $('#inputCity').val();
    var stateAbbr = abbrState(state, 'abbr');


    var ps = ". ";

    var mlaCitation = "\"" + policyTitle + "\". " + currentSchool + ps + acadDept + ps + currentLink + ps + noDate + ps
        + "Web. " + formattedDate + ".";
    var apaCitation = currentSchool + ps + noDate + ps + policyTitle + ps + city + ", " + stateAbbr + ps + acadDept + ps
        + "Retrieved from: " + currentLink + ".";
    var chitownChitation = acadDept + ". " + policyTitle + ". " + city + ", " + stateAbbr + ": " + currentSchool + ", "
        + noDate + ". " + chiFormattedDate + ". " + currentLink + ".";


    $('#citationDisplay').append("<h4>MLA</h4><br>" + mlaCitation + "<br>");
    $('#citationDisplay').append("<br><h4>APA</h4><br>" + apaCitation + "<br>");
    $('#citationDisplay').append("<br><h4>Chicago</h4><br>" + chitownChitation + "<br>");

}

