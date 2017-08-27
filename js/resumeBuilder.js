// var formattedName = HTMLheaderName.replace("%data%", "Irene Florez");

// var formattedRole = HTMLheaderRole.replace("%data%", "Engineering & Analytics Intern");

//$("#header").append(formattedName);

//$("#header").append(formattedRole);

//[string].replace([old], [new]);
//var email = "email.com";
//var newEmail=email.replace("email", "com");

//$("#main").append("Irene");

//$("#main").append(["Irene Florez"]);

//$("#header").append(bio.name);

var bio = {
	"name": "Irene Florez",
	"role": "DATA | STRATEGY | CODE",
	"contacts": {
		"github": "github.com/IreneFlorez",
		"twitter": "@IreneFlorez",
		"location": "San Francisco, CA",
		"email": "emailplaceholdercom",
		"mobile": "cell number",
	},
	"bioPic": "images/profile.png",
	"welcomeMsg": "Managing the launch of digital solutions, systematically",
	"skills": ["Javascript", "python", "data analysis", "user-focused design"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}




var work = {
	"jobs": [
		
		{	"employer": "We Vote",
			"title": "Engineering & Analytics Intern",
			"location": "San Francisco, CA",
			"dates": "January 2017 - Present",
			"description":"Working on a Django/Python server that uses a PostGresSQL database. Currently developing an impact dashboard."
		},

		{	"employer": "Udacity",
			"title": "Front End Developer (nanodegree)",
			"location": "San Francisco, CA",
			"dates": "June 2017 - Present",
			"description": "Building projects using HTML, CSS, Javascript, and Git."
		},
		
		{	"employer": "[M] Mothercoders",
			"title": "Front End Developer Trainee",
			"location": "San Francisco, CA",
			"dates": "September, 2016 - February, 2017",
			"description": "Built a website using CSS and JavaScript."
		},
	]
};		


function displayWork() {
	// if(work.jobs.length > 0) {
	// 	$("#workExperience").append(HTMLworkStart);
		
		for(job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				$(".work-entry:last").append(formattedEmployerTitle);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedWorkLocation);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDatesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedWorkDescription);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
		// }
	}
}

displayWork();

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

// // Display work json info
// work.display = function(){
	
// 	for (var job in work.jobs){
// 		$("#workExperience").append(HTMLworkStart);

// 		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
// 								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
// 								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
// 								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
// 								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
// 	}
		
// }

var education = {
	"schools": [
		
		{ "name": "Mills College",
			"location": "Oakland, CA",
			"degree": "B.A.(Hon) International Relations",
			"dates" : "undefined",
			"major": "International Relations (game theory focus)",
			"url" : "www.site.com",
		},		
		
		{"name": "Tokyo University of Foreign Studies",
			"location": "Tokyo, Japan",
			"degree": "Year abroad",
			"dates" : "undefined",
			"major": "Development Economics, Japanese Culture",
			"url" : "www.site.com",
		},		

		{ "name": "Knight Digital Media Center (KDMC) at University of California, Berkeley",
			"location": "Berkeley, CA",
			"degree": "Data Journalism Workshop Series",
			"major": "Data, QGIS & Fusion Table",
			"dates" : "undefined",
			"url" : "www.site.com",
		}	
	],

	"onlineCourses": [

		{ "school": "Udacity",
			"title": "Javascript Basics",
		},

		{ "school": "Udacity",
			"dates": "August, 2017",
			"url": "https://www.udacity.com/course/ud804"
		},

		{	"title": "Intro to HTML and CSS",
			"dates" : "July, 2017",
			"url": "https://www.udacity.com/course/ud304"
		},	

		{ "school": "Udacity",
			"title": "Web Development",
			"dates": "June, 2017",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};




education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
}

education.display();


var projects = {
	"projects": [
		{ "title": "Project Name",
			"dates": "January, 2017",
			"description": "Project",
			"images": "images/profile.png",
		}

projects.display = function(){
	for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$("#project-entry:last").append(formattedTitle);

	var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$("#project-entry:last").append(formattedDates);

	var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$("#project-entry:last").append(formattedDescription;

		if (projects.projects[project].images.length>0){
			for (image in projects.projects[project].images) {
				var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$("#project-entry:last").append(formattedImage;
			}
		}
	}
}



$("#mapDiv").append(googleMap);
