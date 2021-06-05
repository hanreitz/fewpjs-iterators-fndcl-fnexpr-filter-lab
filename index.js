// Code your solution here
function findMatching (drivers, search) {
  const matches = drivers.filter(d => d.toLowerCase() === search.toLowerCase())
  return !!matches ? matches : [];
}

function fuzzyMatch (drivers, str) {
  const matches = drivers.filter (d => d.slice(0, str.length) === str)
  return !!matches ? matches : [];
}

function matchName (drivers, search) {
  const matches = drivers.filter (d => d.name === search);
  return !!matches ? matches : [];
}