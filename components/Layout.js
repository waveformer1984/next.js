export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-vhsBackground font-mono text-vhsBlue">
      <aside className="w-64 bg-vhsOverlay text-vhsGreen p-4 shadow-vhs">
        <h1 className="text-2xl font-bold mb-6 glitch">ForgeFinder</h1>
        <nav>
          <ul>
            <li className="mb-3 badge">Home</li>
            <li className="mb-3 badge">Projects</li>
            <li className="mb-3 badge">Contact</li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 bg-gray-900 p-6">
        <header className="bg-vhsBlue text-black p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold glitch">Welcome to ForgeFinder</h2>
        </header>
        <main className="mt-6 text-vhsGreen">
          <div className="text-vhsAccent mb-2">Powered by signal and solder</div>
          {children}
        </main>
      </div>
    </div>
  );
}
