const nameReplaceLiteral = (str) => `Tryber ${str} aqui!`;
const skills = ['HTML', 'CSS', 'JavaScript', 'Aprender a aprender', 'SoftSkills'];
const nameAndSkills = (str) => `${str}
Minhas Minhas cinco principais habilidades são
 - ${skills.sort()[0]};
 - ${skills.sort()[1]};
 - ${skills.sort()[2]};
 - ${skills.sort()[3]};
 - ${skills.sort()[4]}.
#goTrybe`;

console.log(nameAndSkills(nameReplaceLiteral('Ronald')));