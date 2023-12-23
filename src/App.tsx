import styles from "./App.module.sass";
import Form from "./components/Form/Form";
import FormContextProvider from "./contexts/formContext";

function App() {
  return (
    <div className={styles.app}>
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </div>
  );
}

export default App;
