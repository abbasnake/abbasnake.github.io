var main = () => {

    // list of the names for default settings
    var defaultList = ["Klavigo", "Mazais Ganins", "Uguns un Nakts"];

    var date, time, type, name, where, workers, hours, comments;

    //removing entries
    $(".calendar").on("click", ".calendar__entry--remove", function(){
        $(this).parent().parent().fadeOut(500, () => {
            $(this).remove();
        });
    });

    //adding entries
    $("body").on("click", ".calendar--add", function(){

    //ask for date and play name
    date = promptEntry.date();
    name = promptEntry.name();

    //set defaults or ask specifics
    setDefaults(name);

    //get date and put in correct order
    var currentDate = ".calendar__dates__" + date;

    //create new entry on page
    $(currentDate).append(
        '<div class="calendar__date row">' +
            '<div class="calendar__entry col-md-1">' + date + '</div>' +
            '<div class="calendar__entry col-md-1">' + time + '</div>' +
            '<div class="calendar__entry col-md-1">' + type + '</div>' +
            '<div class="calendar__entry col-md-2">' + name + '</div>' +
            '<div class="calendar__entry col-md-2">' + where + '</div>' +
            '<div class="calendar__entry col-md-1">' + workers + '</div>' +
            '<div class="calendar__entry col-md-1">' + hours + '</div>' +
            '<div class="calendar__entry col-md-2">' + comments + '</div>' +
            '<div class="calendar__entry col-md-1">' +
                '<button type="button" class="calendar__entry--remove">X</button>' +
            '</div>' +
        '</div>'
        );

    });

    //all prompt features
    var promptEntry = {
        date: () => {
            return prompt("what date?", "01");
        },
        time: () => {
            return prompt("what time?", "18:30");
        },
        type: () => {
            return prompt("what type?", "I");
        },
        name: () => {
            return prompt("what name? " + defaultList, "Klavigo");
        },
        where: () => {
            return prompt("what location?", "JZ");
        },
        workers: () => {
            return prompt("whos working?", "Ga, G");
        },
        hours: () => {
            return prompt("working hours?", "16:00 - 21:30");
        },
        comments: () => {
            return prompt("any comments");
        }
    }

    //setting predetermined defaults for a particular play
    var setDefaults = (_name) => {
        if (checkForDefault(_name)){
            if (_name == "Klavigo"){
                defaults.klavigo();
            } else if (_name == "Mazais Ganins") {
                defaults.mazaisG();
            } else if (_name == "Uguns un Nakts") {
                defaults.ugunsN();
            }
        } else {
            time = promptEntry.time();
            type = promptEntry.type();
            where = promptEntry.where();
            workers = promptEntry.workers();
            hours = promptEntry.hours();
            comments = promptEntry.comments();
        }
    }

    //check if chosen name has default settings
    //returns true or false
    var checkForDefault = (__name) => {
        var result = false;
        for (var i = 0; i<defaultList.length; i++){
            if (defaultList[i] === __name){
                result = true;
                i = defaultList.length; // stop the loop if true is found
            }
        }
        return result;
    }

    var defaults = {
        klavigo: () => {
            time = "18:30";
            type = "I";
            where = "JZ";
            workers = "R";
            hours = "16:00 - 21:30";
            comments = "";
        },
        mazaisG: () => {
            time = "18:30";
            type = "I";
            where = "AZ";
            workers = "M";
            hours = "16:00 - 21:30";
            comments = "";
        },
        ugunsN: () => {
            time = "18:30";
            type = "M";
            where = "LZ";
            workers = "Ga";
            hours = "16:00 - 21:30";
            comments = "";
        }
    }

}

main();

// var bobo = $(".calendar__date__01").children().length;
// console.log(bobo);
