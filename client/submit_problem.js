//Button to show next question in the form
Template.submitProblem.events({
  'click .route':function() {
    if (problem.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part2').addClass('magictime swashIn');
    $('#submit-problem').addClass('hidden');
    $('#submit-why1').removeClass('hidden');
    } else {
      alert("You need to enter problem");
    }
  }
  
});

Template.submitProblem.events({
  'click .answer1':function() {
    if (why1.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part3').addClass('magictime swashIn');
    $('#submit-why1').addClass('hidden');
    $('#submit-why2').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  }
});

Template.submitProblem.events({
  'click .answer2':function() {
    if (why2.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part4').addClass('magictime swashIn');
    $('#submit-why2').addClass('hidden');
    $('#submit-why3').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  }
});

Template.submitProblem.events({
  'click .answer3':function() {
    if (why3.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part5').addClass('magictime swashIn');
    $('#submit-why3').addClass('hidden');
    $('#submit-why4').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  }
});

Template.submitProblem.events({
  'click .answer4':function() {
    if (why4.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part6').addClass('magictime swashIn');
    $('#submit-why4').addClass('hidden');
    $('#submit-why5').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  }
});

Template.submitProblem.events({
  'click .answer5':function() {
    if (why4.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part7').addClass('magictime swashIn');
    $('#submit-why5').addClass('hidden');
    $('#submit-solution').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  }
});


Template.submitProblem.events({
  'click .back1':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why1').addClass('hidden');
    $('#submit-problem').removeClass('hidden');
  }
});

Template.submitProblem.events({
  'click .back2':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why2').addClass('hidden');
    $('#submit-why1').removeClass('hidden');
  }
});

Template.submitProblem.events({
  'click .back3':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why3').addClass('hidden');
    $('#submit-why2').removeClass('hidden');
  }
});

Template.submitProblem.events({
  'click .back4':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why4').addClass('hidden');
    $('#submit-why3').removeClass('hidden');
  }
});

Template.submitProblem.events({
  'click .back5':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why5').addClass('hidden');
    $('#submit-why4').removeClass('hidden');
  }
});

Template.submitProblem.events({
  'click .back6':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-solution').addClass('hidden');
    $('#submit-why5').removeClass('hidden');
  }
});

Template.submitProblem.events({
  'submit form':function(event) {
    event.preventDefault();

    var post = {
    postProblem: $(event.target).find('[name=problem]').val(),
    postWhy1: $(event.target).find('[name=why1]').val(),
    postWhy2: $(event.target).find('[name=why2]').val(),
    postWhy3: $(event.target).find('[name=why3]').val(),
    postWhy4: $(event.target).find('[name=why4]').val(),
    postWhy5: $(event.target).find('[name=why5]').val(),
    postSolution:$(event.target).find('[name=solution]').val(),
    submitdate: new Date()
    };

    post._id = Problems.insert(post);
    console.log(post._id);
    Session.set('current_post', post._id);
    Router.go('problemPage', post);
  }
});


Template.submitProblem.helpers({
  problem: function() {
    return Session.get("problem");
  },
  why1: function() {
    return Session.get("why1");
  },
  why2: function() {
    return Session.get("why2");
  },
  why3: function() {
    return Session.get("why3");
  },
  why4: function() {
    return Session.get("why4");
  },
  why5: function() {
    return Session.get("why5");
  }
});

Template.submitProblem.events({
  'keyup input#problem':function(event) {
    Session.set("problem", event.target.value);
  },
  'keyup input#why1':function(event) {
    Session.set("why1", event.target.value);
  },
  'keyup input#why2':function(event) {
    Session.set("why2", event.target.value);
  },
  'keyup input#why3':function(event) {
    Session.set("why3", event.target.value);
  },
  'keyup input#why4':function(event) {
    Session.set("why4", event.target.value);
  },
  'keyup input#why5':function(event) {
    Session.set("why5", event.target.value);
  }
});




