export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MyCompany</h1>
      <nav className="space-x-4">
        <a href="/home" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="/career" className="text-gray-700 hover:text-blue-600">Careers</a>
        <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
      </nav>
    </header>
  );
}
