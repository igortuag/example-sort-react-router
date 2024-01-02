function generatePeopleWithNameAndAge() {
  // generate 100 people with name and age
  return [...Array(100).keys()].map((i) => ({
    name: `Pessoa ${i}`,
    age: Math.floor(Math.random() * 100),
  }))
}

const people = generatePeopleWithNameAndAge()

export function getPeopleOrderedBy(orderBy, sortBy) {
  // order people by name or age
  return people.sort((a, b) => {
    if (sortBy === 'asc') {
      return a[orderBy] > b[orderBy] ? 1 : -1
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1
    }
  })
}
