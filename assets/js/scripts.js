			$('document').ready(function(){

			var latestUrl = "http://acadprojects.com/py/notes/sharing/note";
			getNotes(latestUrl);

			function getNotes(dataUrl)
			{
			    $.ajax({
			url: dataUrl,
			type: "GET",
			success: function(result){
			     console.log(result);

			 $('#studyMaterials tbody').empty();
			 $('#questionPapers tbody').empty();
			 $('#projectReports tbody').empty();

			 var  myNotes = result.notes;

			 var length = myNotes.length;


			 var countStudyMaterial = 0;
			 var countQuestionPaper = 0;
			 var countProjectReport = 0;

			     for(var i = 0;i<length;i++)
			 {
				   var noteObject = myNotes[i];


			   var notesName = noteObject.doc_name;
			 	   var description = noteObject.doc_description;
			       var subject = noteObject.subject.subject;
			   var url = noteObject.doc_url;

			   var type = noteObject.document_type;

			   if(type == 'Study Material')
			   {
			     countStudyMaterial++;
			         $('#studyMaterials tbody').append('<tr> <td> ' + countStudyMaterial + '</td> <td>' + notesName + '</td> <td>' + description + '</td> <td>' + subject + '</td> <td><a target="_blank" href="'+url+'">Download</a></td> </tr>');

			   }

			   else if(type == 'Question Papers')
			   {
			     countQuestionPaper++;
			         $('#questionPapers tbody').append('<tr> <td> ' + countQuestionPaper + '</td> <td>' + notesName + '</td> <td>' + description + '</td> <td>' + subject + '</td> <td><a target="_blank" href="'+url+'">Download</a></td> </tr>');

			   }

			   else if(type == 'Project Report')
			   {
			     countProjectReport++;
			         $('#projectReports tbody').append('<tr> <td> ' + countProjectReport + '</td> <td>' + notesName + '</td> <td>' + description + '</td> <td>' + subject + '</td> <td><a target="_blank" href="'+url+'">Download</a></td> </tr>');

			   }


			 }
			}});
		}

		 $('#arts').on('click',function(){

		  $("#notesNavigation ul li").removeClass('active');

		  $(this).parent().addClass('active');

		  var url = "http://acadprojects.com/py/notes/sharing/note?category=arts";
		  getNotes(url);

		});

		 $('#engineering').on('click',function(){
 		  $("#notesNavigation ul li").removeClass('active');
 		  $(this).parent().addClass('active');

 		   var url = "http://acadprojects.com/py/notes/sharing/note?category=engineering";
 		   getNotes(url);
 		});

			$('#science').on('click',function(){
			  $("#notesNavigation ul li").removeClass('active');
			  $(this).parent().addClass('active');

			   var url = "http://acadprojects.com/py/notes/sharing/note?category=science";
			   getNotes(url);
			});

			$('#maths').on('click',function(){
			  $("#notesNavigation ul li").removeClass('active');
			  $(this).parent().addClass('active');

			   var url = "http://acadprojects.com/py/notes/sharing/note?category=mathematics";
			   getNotes(url);
			});

			$('#latest').on('click',function(){
				$("#notesNavigation ul li").removeClass('active');
				$(this).parent().addClass('active');

				 var url = "http://acadprojects.com/py/notes/sharing/note";
				 getNotes(url);
			});

		 $("#submitBtn").on('click', function(){

			 var docName = $("#fileName").val();
			 var docDescription = $("#description").val();

			 var subject = $("#subject").val();
			 var documentType = $("#documentType").val();

			 var myFile = $("input[type=file]")[0].file[0];

			 if(docName == undefined || docName == "")
			 {
				 alert("all fields are required");
				 return false;
			 }

			 if(docDescription == undefined || docDescription == "")
			 {
				 alert("all fields are required");
				 return false;
			 }

			 if(subject == undefined || subject == "")
			 {
				 alert("all fields are required");
				 return false;
			 }

			 if(documentType == undefined || documentType == "")
			 {
				 alert("all fields are required");
				 return false;
			 }

			 if(myFile == undefined || myFile == "")
			 {
				 alert("all fields are required");
				 return false;
			 }

			 var formdata = new FormData();

			 formdata.append('file', myFile);
			 formdata.append('document_type' , documentType);
			 formdata.append('doc_description' , docDescription);
			 formdata.append('doc_name' , docName);
			 formdata.append('category' , subject);

			 $.ajax({
				 url: 'http://acadprojects.com/py/notes/sharing/note',
				 data: formdata,
				 type: 'POST',
				 contentType: false,
				 processData: false,
				 success: function(result)
				 {
					 alert("Submitted");
					 location.reload();
				 }
			 });

		 });

	 });
