
import './App.css';
import'./Style.css';
import ragnar from './ragnar.jpg';
import videoreact from'./videoreact.mp4';





function App() {
  return (
    <div className="App">
     <div >

<h1 className="title red">react video</h1>

<br/>
<section className='images'>
<img src="/logo192.png" />

<br/>

<img src={ragnar} alt="ragnar photo" style={{width:'440px'}}/>
</section>
</div>

<video width="320" height="240" controls>

<source src={videoreact} type="video/mp4" />

</video>
    </div>
  );
}

export default App;
