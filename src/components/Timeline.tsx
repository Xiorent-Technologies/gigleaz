const Timeline = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Timeline Line */}
        <div className="w-full h-px bg-white mb-4 opacity-30"></div>
        <div className="flex items-center justify-center space-x-6 text-white text-sm md:text-base font-medium">
          <span>1.0</span>
          <span>→</span>
          <span>Crisis</span>
          <span>→</span>
          <span>Rebuild</span>
          <span>→</span>
          <span>Relaunch</span>
          <span>→</span>
          <span>Future</span>
        </div>
      </div>
    </div>
  )
}

export default Timeline
