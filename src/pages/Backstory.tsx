import { Link } from 'react-router-dom'

const Backstory = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          Our Backstory
        </h1>
        
        <div className="space-y-12">
          {/* The Beginning */}
          <section className="bg-green-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-300 mb-6">The Beginning</h2>
            <p className="text-white text-lg leading-relaxed">
              Gigleaz started as an IT company, providing technology solutions and services. We built our foundation on innovation and customer satisfaction, growing steadily in the competitive tech landscape.
            </p>
          </section>

          {/* The Pause (2024) */}
          <section className="bg-red-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-red-300 mb-6">The Pause (2024)</h2>
            <div className="space-y-4">
              <p className="text-white text-lg leading-relaxed">
                <strong>Allegations, fraud claims, loss of trust.</strong> We faced serious challenges that shook our foundation. The accusations, whether founded or not, created a crisis of confidence that we couldn't ignore.
              </p>
              <p className="text-white text-lg leading-relaxed">
                <strong>Company stopped operations.</strong> In the face of mounting pressure and to protect all stakeholders, we made the difficult decision to pause all operations and reassess our path forward.
              </p>
            </div>
          </section>

          {/* The Shift */}
          <section className="bg-yellow-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-300 mb-6">The Shift</h2>
            <div className="space-y-4">
              <p className="text-white text-lg leading-relaxed">
                <strong>Decision to end Gigleaz as a company.</strong> We realized that continuing as a traditional IT company wasn't sustainable. The crisis forced us to question everything and think differently about our future.
              </p>
              <p className="text-white text-lg leading-relaxed">
                <strong>Rebuilt as a product inside a US EdTech ecosystem.</strong> Instead of giving up, we chose to transform. We rebuilt Gigleaz as an innovative product within a trusted US-based EdTech platform, giving us a fresh start and stronger foundation.
              </p>
            </div>
          </section>

          {/* The Comeback */}
          <section className="bg-green-900 bg-opacity-30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-300 mb-6">The Comeback</h2>
            <p className="text-white text-lg leading-relaxed mb-6">
              <strong>Relaunch as Gigleaz 2.0 (Learn + Share + Earn).</strong> We're back, but completely transformed. Gigleaz 2.0 is not just a comeback—it's a revolution in how people learn, share knowledge, and earn from their expertise.
            </p>
            <div className="text-center">
              <Link 
                to="/relaunch-timeline" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                See how the Relaunch unfolds → Timeline Page
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Backstory
