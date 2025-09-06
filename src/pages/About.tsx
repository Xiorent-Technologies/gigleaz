const About = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          About Gigleaz
        </h1>
        
        <div className="space-y-12">
          {/* New Identity */}
          <section className="bg-green-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-300 mb-6">New Identity</h2>
            <p className="text-white text-lg leading-relaxed">
              From IT company → EdTech Product under USA platform. We've transformed from a traditional IT services company into an innovative EdTech product that operates within a robust US-based educational technology ecosystem.
            </p>
          </section>

          {/* Mission */}
          <section className="bg-green-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-300 mb-6">Mission</h2>
            <p className="text-white text-lg leading-relaxed">
              Build the Learn & Earn Economy. We're creating a revolutionary platform where learning and earning go hand in hand, empowering individuals to monetize their knowledge while helping others grow.
            </p>
          </section>

          {/* Educator + Creator Network */}
          <section className="bg-green-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-300 mb-6">Educator + Creator Network</h2>
            <p className="text-white text-lg leading-relaxed">
              We're building a powerful network of educators and content creators who can share their expertise and earn from their knowledge. This community-driven approach ensures quality content and sustainable income for all participants.
            </p>
          </section>

          {/* Vision Ahead */}
          <section className="bg-green-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-300 mb-6">Vision Ahead</h2>
            <p className="text-white text-lg leading-relaxed">
              Our vision is to become the world's leading Learn & Earn platform, creating opportunities for millions of people to learn new skills, share their knowledge, and build sustainable income streams through education.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
