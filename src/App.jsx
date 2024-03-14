import "./scss/style.scss";
import Layout from "./components/Layout.jsx";
import StartQuiz from "./components/StartQuiz.jsx";
import { QuizContextProvider } from "./context/quiz-context.jsx";

function App() {

  return (
    <div className="container">
      <QuizContextProvider>
        <StartQuiz />
        <Layout />
      </QuizContextProvider>
    </div>
  );
}

export default App;
