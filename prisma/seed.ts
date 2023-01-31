import prisma from "../src/database.js";

function main() {
    return prisma.jobs.createMany({
        data: [
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": false,
                "company": "Nuvia Dynamics Inc."
            },
            {
                "position": "Tester",
                "salary": 6000,
                "summoned": false,
                "company": "IBM"
            },
            {
                "position": "Tester",
                "salary": 5000,
                "summoned": false,
                "company": "Grupo Jacto"
            },
            {
                "position": "Electrical Engineer",
                "salary": 8000,
                "summoned": false,
                "company": "Intel Corporation"
            },
            {
                "position": "Tester",
                "salary": 5000,
                "summoned": true,
                "company": "Avenue"
            },
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": false,
                "company": "Samsung Brasil"
            },
            {
                "position": "Tester",
                "salary": 5000,
                "summoned": false,
                "company": "Samsung Brasil"
            },
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Tester",
                "salary": 4000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Tester",
                "salary": 7000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Geophysicist",
                "salary": 10000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Front-end developer",
                "salary": 8000,
                "summoned": false,
                "company": "Google"
            },
            {
                "position": "Front-end developer",
                "salary": 8000,
                "summoned": true,
                "company": "Samsung Brasil"
            },
            {
                "position": "Back-end developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Back-end developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Back-end developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Full-stack developer",
                "salary": 7000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Full-stack developer",
                "salary": 8000,
                "summoned": false,
                "company": "Mercado Livre"
            },
            {
                "position": "Full-stack developer",
                "salary": 9000,
                "summoned": true,
                "company": "Mercado Livre"
            }
        ]
    });
}

main()
    .then(() => console.log('Jobs registered.'))
    .catch(response => {
        console.log(response);
        process.exit(1);
    })
    .finally(async () => await prisma.$disconnect());


function subMain() {
    return prisma.skills.createMany({
        data: [
            {name: 'React'},
            {name: 'Docker'},
            {name: 'Vue'},
            {name: 'Angular'},
            {name: 'Python'},
            {name: 'JavaScript'},
            {name: 'PostgreSQL'},
            {name: 'MySQL'},
            {name: 'Node'},
            {name: 'CSS'},
            {name: 'MongoDB'},
            {name: 'Git'},
            {name: 'TypeScript'},
            {name: 'Prisma'},
            {name: 'Express'}
        ]
    });
}

subMain()
    .then(() => console.log('Skills registered.'))
    .catch(response => {
        console.log(response);
        process.exit(1);
    })
    .finally(async () => await prisma.$disconnect());

function newMain() {
    return prisma.jobs_skills.createMany({
        data: [
            {
                jobId: 1,
                skillId: 1
            },
            {
                jobId: 1,
                skillId: 2
            },
            {
                jobId: 2,
                skillId: 1
            }
        ]
    });
}

newMain()
    .then(() => console.log('Skills from jobs registered.'))
    .catch(response => {
        console.log(response);
        process.exit(1);
    })
    .finally(async () => await prisma.$disconnect());