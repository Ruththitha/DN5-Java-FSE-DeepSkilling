import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="app">
      <h1>Blogger App</h1>
      <div className="cards">
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </div>
    </div>
  );
}

export default App;
