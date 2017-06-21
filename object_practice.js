var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }];


function studentAverage(classrooms) {
  var ageArr = [];

  for (var classes of classrooms) {
    for (var students of classes.students) {
      ageArr.push(students.age);
    }
  }

  var reduced = ageArr.reduce(function(acc, val) {
    return acc + val;
  });

  return reduced / (ageArr.length);
}


function teacherAverage(classrooms) {
  var ageArr = [];

  for (var value of classrooms) {
    ageArr.push(value.teacher.age);
  }

  var reduced = ageArr.reduce(function(acc, val) {
    return acc + val;
  });

  return reduced / (ageArr.length);
}


function studentsInClass(classrooms, subj) {
  var sum = 0;

  for (var classes of classrooms) {
    if (classes.teacher.subject === subj) {
      sum += (classes.students).length;
    }
  }
  return sum;
}
studentsInClass(classrooms, "Literature");
