import React from "react"
interface todoTypes {
  title: string
  content: string
  date: string
  complete: boolean
  time: string
  priority: boolean
}
function useGetTodoData() {
  const getRandomTime = () => {
    // Function to generate a random time (HH:mm format)
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, "0")
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0")
    return `${hours}:${minutes}`
  }
  const getRandomDate = () => {
    // Function to generate a random date (YYYY-MM-DD format)
    const year = String(Math.floor(Math.random() * 10) + 2015) // Random year between 2015 and 2024
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0") // Random month between 01 and 12
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0") // Random day between 01 and 28
    return `${year}-${month}-${day}`
  }
  let TodoItems: todoTypes[] = [
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: false,
    },
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: false,
    },
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: true,
    },
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: false,
    },
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: false,
    },
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: false,
    },
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: true,
    },
    {
      title: "Create a random todo task title",
      content: "Create a random todo task content",
      date: getRandomDate(),
      complete: false,
      time: getRandomTime(),
      priority: true,
    },
  ]

  return { TodoItems }
}

export default useGetTodoData
