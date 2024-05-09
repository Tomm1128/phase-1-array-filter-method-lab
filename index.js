// Code your solution here

const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

const fuzzyMatch = (drivers, name) => {
  return drivers.filter(driver => driver.substring(0, 1) === name.substring(0, 1))
}
