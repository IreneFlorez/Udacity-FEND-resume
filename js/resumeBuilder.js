var bio = {
    "name": "Rene suarez",
    "role": "DATA | STRATEGY | CODE",
    "contacts": {
        "mobile": "n/a",
        "email": "n/a",
        "github": "github.com/IreneFlorez",
        "twitter": "@IreneFlorez",
        "location": "San Francisco, CA",
    },
    "welcomeMsg": "Managing the launch of digital solutions, systematically",
    "bioPic": "images/profile2.jpg",
    "skills": ["Javascript", "python", "data analysis", "user-focused design"],

display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name).toUpperCase();
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").prepend(formattedName + formattedRole);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkills);
        }
    }   
    }    
};


var work = {
    "jobs": [{
            "employer": "We Vote",
            "title": "Engineering & Analytics Intern",
            "location": "San Francisco, CA",
            "dates": "January 2017 - Present",
            "description": "Working on a Django/Python server that uses a PostGresSQL database. Currently developing an impact dashboard."
        },
        {
            "employer": "Udacity",
            "title": "Front End Developer (nanodegree)",
            "location": "San Francisco, CA",
            "dates": "June 2017 - Present",
            "description": "Building projects using HTML, CSS, Javascript, and Git."
        },
        {
            "employer": "[M] Mothercoders",
            "title": "Front End Developer Trainee",
            "location": "San Francisco, CA",
            "dates": "September, 2016 - February, 2017",
            "description": "Built a website using CSS and JavaScript."
        },
    ],
display: function() {
    work.jobs.forEach(function(job){
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerWorkTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    },
};

var projects = {
    "projects": [{
            "title": "Project2",
            "dates": "Summer, 2017",
            "description": "Portfolio Project",
            "images": ["images/project.jpg"],
        },
        {
            "title": "Project1",
            "dates": "Summer, 2017",
            "description": "Resume Project",
            "images": ["images/project.jpg"],
        }
    ],
display: function() {
    projects.projects.forEach(function(project){
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            $(".project-entry:last").append(formattedImage);

            if(project.images.length>0){
                project.images.forEach(function(image)){
                    var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
});
}
});
},
};

var education = {
    "schools": [

        {
            "name": "Mills College",
            "location": "Oakland, CA",
            "degree": "B.A.(Hon) International Relations",
            "majors": "International Relations (game theory focus)",
            "dates": "n/a",
        },

        {
            "name": "Tokyo University of Foreign Studies",
            "location": "Tokyo, Japan",
            "degree": "Year abroad",
            "majors": "Development Economics, Japanese Culture",
            "dates": "n/a",
        },

        {
            "name": "Knight Digital Media Center (KDMC) at University of California, Berkeley",
            "location": "Berkeley, CA",
            "degree": "Data Journalism Workshop Series",
            "majors": "Data, QGIS & Fusion Table",
            "dates": "n/a",
        }
    ],

    "onlineClasses": [{
            "school": "Udacity",
            "title": "Front End Web Development",
            "dates": "June, 2017",
            "url": "udacity.com"
        },
        {
            "school": "Coursera",
            "title": "Python for Everybody",
            "dates": "January, 2017",
            "url": "coursera.org"
        }
    ],

display: function() {
    education.schools.forEach(function(school){
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        });

            $("#education").append(HTMLonlineClasses);
            education.onlineClasses.forEach(function(onlineClasses){
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[i].url);
                $("#education").append(HTMLonlineClasses);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
};
},
};


// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();

function locationizer(work_obj) {
    var locationArray = [];

    /*for (var job in work_obj.jobs){
    	var newLocation = work_obj.jobs[job].location;
    	locationArray.push(newLocation);
    }*/
    return locationArray;
}


//Map
$("#mapDiv").append(googleMap);
