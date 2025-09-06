const RelaunchTimeline = () => {
  const timelineEvents = [
    {
      year: "2023–2024",
      title: "OTT Beginnings",
      description: "Initial development of our Over-The-Top platform concept, laying the groundwork for what would become Gigleaz 2.0."
    },
    {
      year: "2024",
      title: "Pause After Crisis",
      description: "Faced with serious challenges and allegations, we made the difficult decision to pause operations and reassess our entire approach."
    },
    {
      year: "2025",
      title: "Rebuild Quietly, Plan Loudly",
      description: "Behind the scenes, we rebuilt everything from the ground up, learning from our mistakes and planning our comeback strategy."
    },
    {
      year: "Nov 18, 2025",
      title: "Relaunch",
      description: "The big day! Gigleaz 2.0 launches as the world's first Learn & Earn OTT platform, marking our official comeback."
    },
    {
      year: "Beyond",
      title: "Global Learn & Earn Economy",
      description: "Our vision extends far beyond launch day. We're building a global economy where learning and earning are seamlessly integrated."
    }
  ]

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-16 text-center">
          Relaunch Timeline
        </h1>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-green-400"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-green-900 z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-green-900 bg-opacity-30 p-8 rounded-lg flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-bold text-green-300">{event.year}</h2>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  </div>
                  <p className="text-white text-lg leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-green-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-300 mb-6">Ready to Join the Future?</h2>
            <p className="text-white text-lg mb-8">
              Be part of the Learn & Earn revolution. Join us on November 18, 2025, and beyond.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Join the Waitlist →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelaunchTimeline
