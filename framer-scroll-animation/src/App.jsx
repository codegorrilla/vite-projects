import {Hero} from "./components/Hero"
import {Title} from "./components/features/Title"
import { Colors, FeatureCard, Music, ScheduleLinks, Team, Todo } from "./components/features/FeatureCard"

function App() { 

  const features = [
    {
      title: "Use your calendar as a todo list",
      id: "todo-list",
      card: Todo
    },
    {
      title: "Color your calendar to organize",
      id: "colors",
      card: Colors
    },
    {
      title: "Instantly know if someone is available",
      id: "music",
      card: Music
    },
    {
      title: "Send scheduling links guests love",
      id: "scheduling-links",
      card: ScheduleLinks
    },
    {
      title: "Always know what your team is up to",
      id: "team",
      card: Team
    }
  ]

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) =>(
              <li 
              key={feature.id}
              className="text-5xl text-gray-300 font-heading py-16"
              >
               <Title>
                {feature.title}
               </Title>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative w-full aspect-square rounded-2xl bg-gray-100">
            {features.map((feature) =>(
              <FeatureCard id = {feature.id}>{feature.card}</FeatureCard>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  )
}

export default App
