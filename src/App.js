import React, { } from 'react';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  

  return (
    <div>
      <main>
          <About></About>
          <Gallery ></Gallery>
          <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
