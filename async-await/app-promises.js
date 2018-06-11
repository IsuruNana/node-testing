const users = [{
    id: 1,
    name: 'Drew',
    schoolId: 101
}, {
    id: 2,
    name: 'Drewerd',
    schoolId: 102
}];

const grades = [{
    id: 1,
    schooldId: 101,
    grade: 86
}, {
    id: 2,
    schooldId: 102,
    grade: 100
}, {
    id: 3,
    schooldId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => {
            return user.id === id;
        });

        if(user) {
            resolve(user);
        }
        else {
            reject(`Unable to find user with id of ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter(grade => {
            grade.schooldId === schoolId
        }));
    })
}

const getStatus = (userId) => {
    let theUser;

    return getUser(userId)
            .then(user => {
                theUser = user;
                return getGrades(user.schooldId);
            })
            .then(grades => {
                //Average
                let average = 0;

                if(grades.length > 0) {
                    average = grades.map(grade => {
                        grade.grade
                    }).reduce((a, b) => {
                        return a + b
                    });
                }

                average = average / grades.length;

                return `${user.name} has a ${average}% in the class.`;
            });
}

const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schooldId);

    let average = 0;

    if(grades.length > 0) {
        average = grades.map(grade => {
            grade.grade
        }).reduce((a, b) => {
            return a + b
        });
    }

    average = average / grades.length;

    return `${user.name} has a ${average}% in the class.`;
}

//console.log(getStatusAt());

getStatusAlt().then(name => {
    console.log(name);
});

// getUser(2)
//     .then(user => {
//         console.log(user);
//     })
//     .catch(e => {
//         console.log(e);
//     });

// getGrades(101)
//     .then(grades => {
//         console.log(grades);
//     })
//     .catch(e => {
//         console.log(e);
//     });

// getStatus(1)
//     .then(status => {
//         console.log(status);
//     })
//     .catch(e => {
//         console.log(e);
//     });