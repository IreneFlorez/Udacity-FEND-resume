var DATA = "%data%";

var bio = {
	"name": "Irene Florez",
	"role": "DATA | STRATEGY | CODE",
	"profileImage": "images/profile.png",
	"welcomeMsg": "Managing the launch of digital solutions, systematically",
	"contacts": {
			"github": "github.com/IreneFlorez",
			"twitter": "@IreneFlorez",
			"location": "San Francisco, CA",
	},
	"skills": ["Javascript", "python", "data analysis", "user-focused design"]
};


var formattedName = HTMLheaderName.replace(DATA, bio.name);
var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
var formattedProfileImage = HTMLprofileImage.replace(DATA, bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace(DATA, bio.welcomeMessage);

var formattedContactInfo = [];
	formattedContactInfo.push(HTMLgithub.replace(DATA, bio.contacts.github));
	formattedContactInfo.push(HTMLtwitter.replace(DATA, bio.contacts.twitter));
	formattedContactInfo.push(HTMLlocation.replace(DATA, bio.contacts.location));

$("#header").prepend(formattedName + formattedRole);
$("#header").append(formattedProfileImage);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace(DATA, bio.skills[i]));
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
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		
		for(job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[job].title);
				$(".work-entry:last").append(formattedEmployerTitle);
			var formattedEmployerWorkTitle = formattedEmployer + formattedTitle;
			var formattedWorkLocation = HTMLworkLocation.replace(DATA, work.jobs[job].location);
				$(".work-entry:last").append(formattedWorkLocation);
			var formattedDates = HTMLworkDates.replace(DATA, work.jobs[job].dates);
				$(".work-entry:last").append(formattedDatesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace(DATA, work.jobs[job].description);
				$(".work-entry:last").append(formattedWorkDescription);
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


var education = {
	"schools": [
		
		{ "name": "Mills College",
			"location": "Oakland, CA",
			"degree": "B.A.(Hon) International Relations",
			"major": "International Relations (game theory focus)",
		},		
		
		{"name": "Tokyo University of Foreign Studies",
			"location": "Tokyo, Japan",
			"degree": "Year abroad",
			"major": "Development Economics, Japanese Culture",
		},		

		{ "name": "Knight Digital Media Center (KDMC) at University of California, Berkeley",
			"location": "Berkeley, CA",
			"degree": "Data Journalism Workshop Series",
			"major": "Data, QGIS & Fusion Table",
		}	
	],

	"onlineCourses": [

		{ "school": "Udacity",
			"title": "Front End Web Development",
			"dates": "June, 2017",
			"url": "https://www.udacity.com"
		}
	]
};




education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace(DATA, education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace(DATA, education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace(DATA, education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

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
	
	var formattedTitle=HTMLprojectTitle.replace(DATA, projects.projects[project].title);
	$("#project-entry:last").append(formattedTitle);

	var formattedDates=HTMLprojectDates.replace(DATA, projects.projects[project].dates);
	$("#project-entry:last").append(formattedDates);

	var formattedDescription=HTMLprojectDescription.replace(DATA, projects.projects[project].description);
	$("#project-entry:last").append(formattedDescription;

		if (projects.projects[project].images.length>0){
			for (image in projects.projects[project].images) {
				var formattedImage=HTMLprojectImage.replace(DATA, projects.projects[project].images[image]);
				$("#project-entry:last").append(formattedImage;
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);
